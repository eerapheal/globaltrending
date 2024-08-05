"use client"
import { signIn } from "next-auth/react"
import { Button } from "./ui/button"

export function SignIn() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <div>
        <Button className="font-bold text-xl" onClick={() => signIn("google")}>
          Continue with Google
        </Button>
      </div>
      <div className="" >
        <Button className="font-bold text-xl" onClick={() => signIn("github")}>
          Continue with GitHub
        </Button>
      </div>
    </div>
  )
};
