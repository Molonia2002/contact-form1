import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import TicketSelection from "./pages/TicketSelection";
import AttendeeDetails from "./pages/AttendeeDetails";
import TicketReady from "./pages/TicketReady";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-[#0D1B2A] text-white">
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
