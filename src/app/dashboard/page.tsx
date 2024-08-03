import { getSession } from "@/lib/profile/action";
import Link from "next/link";
import { redirect } from "next/navigation";
import Container from "@/components/Container";
import { MainNav } from "@/ui/header/mainNav";
import DashSidebar from "@/components/admin/userDashboard/DashSidebar";
import DashPosts from "@/components/admin/userDashboard/DashPosts";
import DashUsers from "@/components/admin/userDashboard/DashUsers";
import DashProfile from "@/components/admin/userDashboard/DashProfile";
import DashboardView from "@/components/admin/userDashboard/DashboardView";

const AdminPage = async ({ searchParams }: any) => {
  const session = await getSession();

  if (!session.isLoggedIn) {
    redirect("/");
  }

  if (!session.isAdmin) {
    return (
      <div className="notPremium">
        <h1>Only Admin users can see the content!</h1>
        <Link href="/profile">
          Go to the profile page Sign in
        </Link>
      </div>
    );
  }

  const tab = searchParams?.tab || 'dashboardView';

  return (
    <>
    <Container>
      <MainNav />
      </Container>
      <div className="min-h-screen flex gap-5 placeholder:flex-col md:flex-row pr-5">
        <div className="md:w-56">
          {/* Sidebar */}
          <DashSidebar tab={tab} />
        </div>
        <div className="flex-1 dark:bg-gradient-to-br from-[#081129] to-[#021817] rounded-xl p-5">
          {/* Render based on tab */}
          {tab === "dashboardView" && <DashboardView />}
          {tab === "profile" && <DashProfile />}
          {tab === "posts" && <DashPosts />}
          {tab === "users" && <DashUsers />}
        </div>
      </div>
    </>
  );
};

export default AdminPage;
