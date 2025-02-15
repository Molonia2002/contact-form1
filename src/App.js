import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TicketSelection from "./components/TicketSelection";
import AttendeeDetails from "./components/AttendeeDetails";
import TicketReady from "./components/TicketReady";
import Navbar from "./components/Navbar";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="bg-[#0b1e26] min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<TicketSelection />} />
          <Route path="/attendee-details" element={<AttendeeDetails />} />
          <Route path="/ticket-ready" element={<TicketReady />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
