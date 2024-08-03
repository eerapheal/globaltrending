import LogoutForm from '@/components/profile/logoutForm'
import { Button } from '@/components/ui/button'
import { getSession } from '@/lib/profile/action'
import Link from 'next/link'
import React from 'react'

const DashSidebar = async ({ tab }: any) => {
  const session = await getSession()

  return (
    <div className=" flex flex-col justify-center items-center gap-10 dark:bg-gradient-to-br from-[#081129] to-[#021817] w-full min-h-screen">
      <div
        className={`sidebar-item ${tab === "dashboardView" ? "active" : ""}`}
      >
        <Link href="/dashboard?tab=dashboardView">
          <Button type="submit">
          DashboardView
          </Button>
        </Link>
      </div>
      <div
        className={`sidebar-item ${tab === "profile" ? "active" : ""}`}
      >
        <Link href="/dashboard?tab=profile">
          <Button type="submit">
            Profile
          </Button>
        </Link>
      </div>
      <div
        className={`sidebar-item ${tab === "posts" ? "active" : ""}`}
      >
        <Link href="/dashboard?tab=posts">
          <Button type="submit">
            Posts
          </Button>
        </Link>
      </div>
      <div
        className={`sidebar-item ${tab === "users" ? "active" : ""}`}
      >
        <Link href="/dashboard?tab=users">
          <Button type="submit">
            Users
          </Button>
        </Link>
      </div>
      <div
        className={`sidebar-item ${tab === "users" ? "active" : ""}`}
      >
        <Link href="/">
          <Button>
            {session.isLoggedIn && <LogoutForm />}
          </Button>
        </Link>

      </div>
    </div>
  )
}

export default DashSidebar
