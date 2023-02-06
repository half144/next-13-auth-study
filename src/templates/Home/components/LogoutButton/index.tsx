"use client";

import { useAuth } from "@/context/AuthContext";

const LogoutButton = () => {
  const { logout } = useAuth();

  return <button onClick={logout}>Sign out</button>;
};

export default LogoutButton;
