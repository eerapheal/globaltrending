"use client"
import { useSession } from "next-auth/react";
import Spinner from "@/components/spinner";
import { redirect } from "next/navigation";

const Page = () => {

  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="flex justify-center items-center w-full h-screen text-center">
      <Spinner />
    </div>;
  }

  if (status === "unauthenticated" || !session) {
    redirect("/login");
    return null;
  }
  return (
    <section className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mb-12 rounded-md bg-black/2v  0 py-10 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px] px-8">
              <h2 className="mb-3 text-2xl font-bold  sm:text-3xl lg:text-2xl xl:text-3xl">
                Create Your Own Blog Post
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page;
