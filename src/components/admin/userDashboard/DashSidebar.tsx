import { Button } from '@/components/ui/button'
import { signOut, } from "next-auth/react"
import Link from 'next/link'

const DashSidebar = ({ tab }: any) => {

  return (
    <div className=" flex flex-col justify-center items-center gap-10 dark:bg-gradient-to-br from-[#081129] to-[#021817] w-full min-h-screen">
      <div
        className={`sidebar-item ${tab === "dashboardView" ? "active" : ""}`}
      >
        <Link href="/dashboard?tab=dashboardView">
          <Button type="submit" className="font-bold text-[1.20rem]">
            Dashboard
          </Button>
        </Link>
      </div>
      <div
        className={`sidebar-item ${tab === "profile" ? "active" : ""}`}
      >
        <Link href="/dashboard?tab=profile">
          <Button type="submit" className="font-bold text-[1.20rem]">
            Profile
          </Button>
        </Link>
      </div>
      <div
        className={`sidebar-item ${tab === "posts" ? "active" : ""}`}
      >
        <Link href="/dashboard?tab=posts">
          <Button type="submit" className="font-bold text-[1.20rem]">
            Posts
          </Button>
        </Link>
      </div>
      <div
        className={`sidebar-item ${tab === "users" ? "active" : ""}`}
      >
        <Link href="/dashboard?tab=users">
          <Button type="submit" className="font-bold text-[1.20rem]">
            Users
          </Button>
        </Link>
      </div>
      <div
        className={`sidebar-item ${tab === "users" ? "active" : ""}`}
      >
        <div>
          <Button onClick={() => signOut()} className="font-bold text-[1.20rem]">
            SignOut
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DashSidebar
