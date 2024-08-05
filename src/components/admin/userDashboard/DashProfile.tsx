"use client"
import { useSession } from "next-auth/react";
import Spinner from "@/components/spinner";

const DashProfile = () => {

  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <Spinner />
      </div>
    );
  }

  if (!session || !session.user) {
    return <div className="flex justify-center items-center w-full h-full">User is not logged in.</div>;
  }

  return (
    <div className="profile">
      <h1>
        Welcome, <b className="bs">{session.user.name || "Guest"}</b>
      </h1>
      <div>
        <h3>{session.user.email}</h3>
      </div>
    </div>
  );
};

export default DashProfile;
