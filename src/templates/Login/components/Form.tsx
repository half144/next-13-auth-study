"use client";

import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

const Form = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    login({ username: user, password });
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Usuário"
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Form;
