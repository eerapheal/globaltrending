import LoginForm from "@/components/profile/loginForm"
import { getSession } from "@/lib/profile/action"
import { redirect } from "next/navigation"
import Container from "@/components/Container";
import { MainNav } from "@/ui/header/mainNav";

const LoginPage = async () => {
  const session = await getSession()

  if (session.isLoggedIn) {
    redirect("/dashboard")
  }
  return (
    <>
      <Container>
        <MainNav />
        <div className="login p-[30px] md:p-[70px]">
          <h1>Welcome to the Login Page</h1>
          <LoginForm />
        </div>
      </Container>
    </>
  )
}

export default LoginPage