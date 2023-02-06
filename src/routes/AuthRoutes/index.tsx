"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthRoutes = ({ children }: { children: any }) => {
  const { userId, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (userId && !loading) {
      router.push("/");
    }
  }, [userId, loading]);

  if (!userId && !loading) {
    return children;
  }
};

export default AuthRoutes;
