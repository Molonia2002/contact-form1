
import { useNavigate } from "react-router-dom";

const TicketSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#112240] p-6 rounded-lg w-96">
        <h2 className="text-lg font-bold">Techember Fest '25</h2>
        <p className="text-sm text-gray-400">Join us for an unforgettable experience!</p>
        
        <div className="mt-4">
          <h3 className="text-sm font-semibold">Select Ticket Type:</h3>
          <button className="w-full p-2 my-2 bg-[#00A3FF] text-white rounded">Free - Regular Access</button>
          <button className="w-full p-2 my-2 bg-[#00A3FF] text-white rounded">$150 - VIP Access</button>
        </div>

        <button
          onClick={() => navigate("/attendee-details")}
          className="w-full mt-4 bg-[#00A3FF] p-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TicketSelection;
