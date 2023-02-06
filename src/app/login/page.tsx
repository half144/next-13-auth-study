import AuthRoutes from "@/routes/AuthRoutes";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Login from "../../templates/Login";

const protectedUserRoute = async () => {
  const token = cookies().get("token");

  try {
    if (token) {
      return redirect("/");
    }
  } catch (e) {
    console.log(e);
  }

  return token;
};

const LoginPage = async () => {
  await protectedUserRoute();

  return (
    <>
      <AuthRoutes>
        <Login />
      </AuthRoutes>
    </>
  );
};

export default LoginPage;
