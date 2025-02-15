import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-[#1B263B] flex justify-between items-center">
      <h1 className="text-xl font-bold">🎟️ Tix</h1>
      <div className="space-x-4">
        <Link to="/" className="text-white">Events</Link>
        <Link to="/my-tickets" className="text-white">My Tickets</Link>
        <Link to="/about" className="text-white">About Project</Link>
      </div>
      <button className="bg-[#00A3FF] px-4 py-2 rounded">My Tickets</button>
    </nav>
  );
};

export default Navbar;
