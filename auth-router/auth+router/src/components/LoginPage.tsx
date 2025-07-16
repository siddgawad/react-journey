import { useAuth } from "../context/useAuth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    login(name);
    navigate("/dashboard");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
