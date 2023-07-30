// import { useState, useEffect } from "react";
// import React from "react";

// const Tickets = ()=> {
//     const[tickets, setTickets] = useState([]);


//     useEffect(() => {
//         fetch('api/v1/ticket')
//         .then((response) => response.json())
//         .then((data) => setTickets(data))
//         .catch((error)=> console.error('error fetching tickets data:', error));
//     }, []);

//     return (
//         <div>
//         <h1>Tickets List</h1>
//         <ul>
//           {tickets.map((ticket) => (
//             <li key={ticket.ticketId}>
//               <div>Ticket ID: {ticket.ticketId}</div>
//               <div>Name: {ticket.ticketName}</div>
//               <div>Price: {ticket.ticketPrice}</div>
//               <div>Date: {ticket.ticketDate}</div>
//               <div>Venue: {ticket.ticketVenue}</div>
//               <div>Time: {ticket.ticketTime}</div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
// } 




import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Paper } from "@mui/material";
import Button from "@mui/material/Button";

const Ticket = () => {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [ticketName, setTicketName] = useState("");
  const [ticketPrice, setTicketPrice] = useState("");
  const [ticketDate, setTicketDate] = useState("");
  const [ticketVenue, setTicketVenue] = useState("");
  const [ticketTime, setTicketTime] = useState("");
  const [tickets, setTickets] = useState([]);

  const handleAddTicket = (e) => {
    e.preventDefault();
    const ticket = {
      ticketName,
      ticketPrice,
      ticketDate,
      ticketVenue,
      ticketTime,
    };
    fetch("http://localhost:8080/api/v1/ticket/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ticket),
    })
      .then(() => {
        console.log("New Ticket Added");
        // Refresh the list of tickets after adding a new one
        // fetchTickets();
      })
      .catch((error) => console.error("Error adding ticket:", error));
  };

  // const fetchTickets = () => {
  //   fetch("http://localhost:8080/api/v1/ticket/getTickets")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setTickets(data);
  //     })
  //     .catch((error) => console.error("Error fetching tickets:", error));
  // };

  // useEffect(() => {
  //   fetchTickets();
  // }, []);

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}>
          <u>Add Ticket</u>
        </h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth
            value={ticketName}
            onChange={(e) => setTicketName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            fullWidth
            value={ticketPrice}
            onChange={(e) => setTicketPrice(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Date"
            variant="outlined"
            fullWidth
            value={ticketDate}
            onChange={(e) => setTicketDate(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Venue"
            variant="outlined"
            fullWidth
            value={ticketVenue}
            onChange={(e) => setTicketVenue(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Time"
            variant="outlined"
            fullWidth
            value={ticketTime}
            onChange={(e) => setTicketTime(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleAddTicket}>
            Submit
          </Button>
        </Box>
      </Paper>
      {/* <h1>Tickets</h1> */}
      {/* <Paper elevation={3} style={paperStyle}>
        {tickets.map((ticket) => (
          <Paper
            elevation={6}
            style={{ margin: "10px", padding: "15px", textAlign: "left" }}
            key={ticket.ticketId}
          >
            Ticket ID: {ticket.ticketId}
            <br />
            Name: {ticket.ticketName}
            <br />
            Price: {ticket.ticketPrice}
            <br />
            Date: {ticket.ticketDate}
            <br />
            Venue: {ticket.ticketVenue}
            <br />
            Time: {ticket.ticketTime}
          </Paper>
        ))}
      </Paper> */}
    </Container>
  );
};

export default Ticket;
