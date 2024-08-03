"use client";

import { login } from "@/lib/profile/action";
import { useFormState } from "react-dom";
import { Button } from "../ui/button";

const LoginForm = () => {
  const [state, formAction] = useFormState<any, FormData>(login, undefined);

  return (
    <form action={formAction}>
      <input type="text" name="username" required placeholder="username" className="loginInput" />
      <input type="password" name="password" required placeholder="password" className="loginInput" />
      <Button className="pt-2">Login</Button>
      {state?.error && <p>{state.error}</p>}
    </form>
  );
};

export default LoginForm;
