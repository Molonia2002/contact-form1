import React from "react";

const Ready = () => {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const avatarUrl = localStorage.getItem("avatarUrl");
  const ticketType = localStorage.getItem("ticketType");

  return (
    <div className="text-center">
      <h2>Your Ticket is Ready!</h2>
      <img src={avatarUrl} alt="Avatar" className="w-24 mx-auto rounded-full" />
      <h3>{name}</h3>
      <p>{email}</p>
      <p>Ticket Type: {ticketType}</p>
    </div>
  );
};

export default Ready;

