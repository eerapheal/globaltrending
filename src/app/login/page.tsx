"use client"
import { redirect } from "next/navigation";
import Container from "@/components/Container"
import { MainNav } from "@/ui/header/mainNav"
import { SignIn } from "@/components/sign-in"
import { useSession } from "next-auth/react";
import Spinner from "@/components/spinner";

const LoginPage = () => {

  const { data: session, status } = useSession();

  if (status === "authenticated" || session) {
    redirect("/dashboard");
    return null;
  }

  return (
    <Container>
      <MainNav />
      <div className="flex flex-col w-full h-screen gap-8 justify-center items-center">
        <h1 className="text-center text-2xl">Welcome to the Global Trending Login Page</h1>
        <SignIn />
      </div>
    </Container>
  )
}

export default LoginPage;
