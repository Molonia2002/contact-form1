import { useNavigate } from "react-router-dom";

const TicketReady = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#112240] p-6 rounded-lg w-96 text-center">
        <h2 className="text-lg font-bold">Your Ticket is Booked!</h2>
        <p className="text-sm text-gray-400">Check your email for a copy or download below.</p>
        
        <img src="/ticket-placeholder.png" alt="Ticket" className="w-full mt-4 rounded" />
        
        <button className="w-full mt-4 bg-[#00A3FF] p-2 rounded">Download Ticket</button>
        <button onClick={() => navigate("/")} className="w-full mt-2 bg-gray-600 p-2 rounded">Book Another Ticket</button>
      </div>
    </div>
  );
};

export default TicketReady;

