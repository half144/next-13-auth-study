import Home from "@/templates/Home";
import ProtectedRouteClient from "@/routes/ProtectedRouteClient";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const protectedUserRoute = async () => {
  const token = cookies().get("token");

  console.log("estou protegendo a rota pelo server");

  console.log("token: ", token?.value);

  try {
    if (!token) {
      return redirect("/login");
    }
  } catch (e) {
    console.log(e);
  }
  return token;
};

export default async function HomePage() {
  // const token = protectedUserRoute();

  return (
    <div>
      <ProtectedRouteClient>
        <Home />
      </ProtectedRouteClient>
    </div>
  );
}
