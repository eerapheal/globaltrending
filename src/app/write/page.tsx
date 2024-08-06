"use client"
import { useSession } from "next-auth/react";
import Spinner from "@/components/spinner";
import { redirect } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formControls } from "@/utils/constants";

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
            <div className="mb-12 rounded-md bg-black/20 py-10  sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px] px-8">
              <h2 className="mb-3 text-2xl font-bold  sm:text-3xl lg:text-2xl xl:text-3xl">
                Create Your Own Blog Post
              </h2>
              <div>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3">
                    <div className={``}>
                      <label className="mb-3 block text-sm font-medium ">
                        Upload Blog Image
                      </label>
                      <Input
                        id="fileInput"
                        accept="image/*"
                        max={1000000}
                        type="file"
                        className="w-full mb-8 rounded-md border border-transparent py-3 px-6text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51]"
                      />
                    </div>
                  </div>
                  <div className="-mx-4 flex flex-wrap">
                    {formControls.map((control) => (
                      <div className="w-full px-4">
                        <label className="mb-3 block text-sm font-medium">
                          {control.label}
                        </label>
                        {control.component === "input" ? (
                          <input
                            type={control.type}
                            name={control.id}
                            placeholder={control.placeholder}
                            className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51]"
                          />
                        ) : control.component === "textarea" ? (
                          <textarea
                            placeholder={control.placeholder}
                            rows={5}
                            name={control.id}
                            className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51]"
                          />
                        ) : control.component === "select" ? (
                          <select
                            name={control.id}
                            className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51]"
                          >
                            <option value={""} id="">
                              Select
                            </option>
                            {control.options.map((optionItem) => (
                              <option
                                id={optionItem.value}
                                value={optionItem.value}
                              >
                                {optionItem.label}
                              </option>
                            ))}
                          </select>
                        ) : null}
                      </div>
                    ))}
                    <div className="w-full px-4">
                      <Button>Create New Blog</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page;
