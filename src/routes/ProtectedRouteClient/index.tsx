"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRouteClient = ({
  children,
}: {
  children: React.ReactNode | null;
}) => {
  const { userId, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !userId) {
      router.push("/login");
    }
  }, [loading, userId]);

  return <>{userId && children}</>;
};

export default ProtectedRouteClient;
