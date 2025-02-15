import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="text-center mt-10">
        <h2 className="text-2xl text-white">Welcome to the Conference Ticket Generator</h2>
        <Button text="Get Started" onClick={() => navigate("/select-ticket")} />
      </div>
    </div>
  );
};

export default Home;

