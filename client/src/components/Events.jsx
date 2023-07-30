import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Paper } from "@mui/material";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

export default function Events() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const [eventCode, setEventCode] = useState("");
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [description, setDescription] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [category, setCategory] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [status, setStatus] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const event = {
      eventCode,
      eventName,
      date,
      time,
      venue,
      description,
      organizer,
      category,
      guestCount,
      status,
    };
    console.log(event);
    fetch("http://localhost:8081/api/v1/event/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
      //stringify() method converts a JavaScript object or value to a JSON string,
    }).then(() => {
      console.log("New Event Added");
    });
  };

  //   useEffect(() => {
  //     fetch("http://localhost:8080/api/v1/event/get")
  //       .then((res) => res.json())
  //       .then((result) => {
  //         setStudents(result);
  //       });
  //   }, []);

  return (
    <Container>
      <Paper elevation={3} style={paperStyle}>
        <h1 style={{ color: "blue" }}>
          <u>Add Event</u>
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
            label="Event Code"
            variant="outlined"
            fullWidth
            value={eventCode}
            onChange={(e) => setEventCode(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Event Name"
            variant="outlined"
            fullWidth
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Date"
            variant="outlined"
            fullWidth
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Time"
            variant="outlined"
            fullWidth
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Venue"
            variant="outlined"
            fullWidth
            value={venue}
            onChange={(e) => setVenue(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Organizer"
            variant="outlined"
            fullWidth
            value={organizer}
            onChange={(e) => setOrganizer(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Category"
            variant="outlined"
            fullWidth
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Guest Count"
            variant="outlined"
            fullWidth
            value={guestCount}
            onChange={(e) => setGuestCount(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Status"
            variant="outlined"
            fullWidth
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <Button variant="contained" color="success" onClick={handleClick}>
            Submit
          </Button>
        </Box>
      </Paper>
      {/* <h1>Students</h1> */}

      {/* <Paper elevation={3} style={paperStyle}>
        {students.map((student) => (
          <Paper
            elevation={6}
            style={{ margin: "10px", padding: "15px", textAlign: "left" }}
            key={student.id}
          >
            Id:{student.id}
            <br />
            Name:{student.name}
            <br />
            Address:{student.address}
          </Paper>
        ))}
      </Paper> */}
    </Container>
  );
}
