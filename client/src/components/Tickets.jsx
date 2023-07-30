import { useState, useEffect } from "react";
import React from "react";

const Tickets = ()=> {
    const[tickets, setTickets] = useState([]);


    useEffect(() => {
        fetch('api/v1/ticket')
        .then((response) => response.json())
        .then((data) => setTickets(data))
        .catch((error)=> console.error('error fetching tickets data:', error));
    }, []);

    return (
        <div>
        <h1>Tickets List</h1>
        <ul>
          {tickets.map((ticket) => (
            <li key={ticket.ticketId}>
              <div>Ticket ID: {ticket.ticketId}</div>
              <div>Name: {ticket.ticketName}</div>
              <div>Price: {ticket.ticketPrice}</div>
              <div>Date: {ticket.ticketDate}</div>
              <div>Venue: {ticket.ticketVenue}</div>
              <div>Time: {ticket.ticketTime}</div>
            </li>
          ))}
        </ul>
      </div>
    );
} 