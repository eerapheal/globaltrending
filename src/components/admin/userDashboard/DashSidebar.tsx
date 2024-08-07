import { Button } from '@/components/ui/button'
import { signOut, } from "next-auth/react"
import Link from 'next/link'

const DashSidebar = ({ tab }: any) => {

  return (
    <div className=" flex flex-col justify-center items-center gap-10 bg-black/10 dark:bg-gradient-to-br from-[#081129] to-[#021817] w-full min-h-screen">
      <div
        className={``}
      >
        <Link href="/dashboard?tab=dashboardView">
          <Button type="submit" className="font-bold text-[1.20rem]">
            Dashboard
          </Button>
        </Link>
      </div>
      <div
        className={``}
      >
        <Link href="/dashboard?tab=profile">
          <Button type="submit" className="font-bold text-[1.20rem]">
            Profile
          </Button>
        </Link>
      </div>
      <div
        className={``}
      >
        <Link href="/write">
          <Button type="submit" className="font-bold text-[1.20rem]">
            Create
          </Button>
        </Link>
      </div>
      <div
        className={``}
      >
        <Link href="/dashboard?tab=posts">
          <Button type="submit" className="font-bold text-[1.20rem]">
            Posts
          </Button>
        </Link>
      </div>
      <div
        className={``}
      >
        <Link href="/dashboard?tab=users">
          <Button type="submit" className="font-bold text-[1.20rem]">
            Users
          </Button>
        </Link>
      </div>
      <div
        className={``}
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
