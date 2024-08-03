
import {  changePremium, changeUsername, getSession } from "@/lib/profile/action";
import { redirect } from "next/navigation";

const DashProfile = async () => {
  const session = await getSession();

  if(!session.isLoggedIn){
    redirect("/")
  }

  return (
    <div className="profile">
      <h1>Welcome to the Profile Page</h1>
      <p>
        Welcome, <b className="bs">{session.username}</b>
      </p>
      <span>You are a <b className="bs">{session.isAdmin ? "Admin" : "Publisher"}</b> user</span>
      <form action={changePremium}>
        <button>{session.isAdmin ? "Cancel" : "Accept"} Admin</button>
      </form>

      <form action={changeUsername}>
        <input type="text" name="username" required placeholder={session.username} />
        <button>Update</button>
      </form>
    </div>
  );
};

export default DashProfile;