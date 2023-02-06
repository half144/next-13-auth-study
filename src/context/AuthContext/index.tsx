"use client";

import { AuthServices } from "@/services/http/AuthServices";
import { createContext, useContext, useEffect, useState } from "react";
import cookies from "js-cookie";
import api from "@/services/api";

type AuthContextType = {
  userId: string;
  login: ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => void;
  loading: boolean;
  logout: () => void;
};

const AuthContext = createContext({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = cookies.get("token");
    const userId = cookies.get("userId");

    if (token && userId) {
      setUserId(userId);
      api.defaults.headers.Authorization = `Bearer ${token}`;
    }

    setLoading(false);
  }, []);

  const login = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    try {
      const { data } = await AuthServices.login(username, password);

      setUserId(data._id);
      cookies.set("userId", data._id, {
        expires: 1,
        secure: true,
      });
      cookies.set("token", data.token, {
        expires: 1,
        secure: true,
      });

      api.defaults.headers.Authorization = `Bearer ${data.token}`;

      return data;
    } catch (e) {
      console.error(e);
    }
  };

  const logout = () => {
    setUserId("");
    cookies.remove("token");
    cookies.remove("userId");
    delete api.defaults.headers.Authorization;
  };

  return (
    <AuthContext.Provider
      value={{
        userId,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
