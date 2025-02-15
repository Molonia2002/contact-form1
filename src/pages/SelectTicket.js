import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TicketSelection from "../components/TicketSelection";
import Button from "../components/Button";

const SelectTicket = () => {
  const [ticketType, setTicketType] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    localStorage.setItem("ticketType", ticketType);
    navigate("/attendee");
  };

  return (
    <div className="text-center">
      <h2 className="text-white">Select Your Ticket</h2>
      <TicketSelection setTicketType={setTicketType} />
      <Button text="Next" onClick={handleNext} disabled={!ticketType} />
    </div>
  );
};

export default SelectTicket;
