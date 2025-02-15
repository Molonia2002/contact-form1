import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import UploadImage from "../components/UploadImage";
import Button from "../components/Button";

const Attendee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("avatarUrl", avatarUrl);
    navigate("/ready");
  };

  return (
    <div className="text-center">
      <h2 className="text-white">Enter Your Details</h2>
      <UploadImage setAvatarUrl={setAvatarUrl} />
      <Input label="Full Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button text="Generate Ticket" onClick={handleSubmit} />
    </div>
  );
};

export default Attendee;

