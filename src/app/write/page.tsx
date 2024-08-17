"use client"
import { useSession } from "next-auth/react";
import Spinner from "@/components/spinner";
import { redirect } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { firebaseConfig, formControls, initialBlogFormData } from "@/utils/constants";
import { GlobalContext } from "@/context";
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import React, { useContext, useState } from "react";
import { BlogFormData } from "@/utils/type";
import Container from "@/components/Container";
import { MainNav } from "@/ui/header/mainNav";
import Link from "next/link";
import { Icons } from "@/components/icons";

const app = initializeApp(firebaseConfig);
const stroage = getStorage(app, "gs://globaltrending-61f22.appspot.com");

function createUniqueFileName(fileName: string) {
  const timeStamp = Date.now();
  const randomString = Math.random().toString(36).substring(2, 12);

  return `${fileName}-${timeStamp}-${randomString}`;
}

async function handleImageSaveToFireBase(file: any) {
  const extractUniqueFileName = createUniqueFileName(file?.name);
  const stroageRef = ref(stroage, `blog/${extractUniqueFileName}`);
  const uploadImg = uploadBytesResumable(stroageRef, file);

  return new Promise((resolve, reject) => {
    uploadImg.on(
      "state_changed",
      (snapshot) => { },
      (error) => reject(error),
      () => {
        getDownloadURL(uploadImg.snapshot.ref)
          .then((url) => resolve(url))
          .catch((error) => reject(error));
      }
    );
  });
}

const Page = () => {
  const { formData, setFormData } = useContext(GlobalContext);
  const [imageLoading, setImageLoading] = useState<boolean>(false);
  const { data: session, status } = useSession();

  console.log(formData)
  
  if (status === "loading") {
    return <div className="flex justify-center items-center w-full  h-screen text-center">
      <Spinner />
    </div>;
  }

  if (status === "unauthenticated" || !session) {
    redirect("/login");
    return null;
  }

  async function handleBlogImageChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    if (!event.target.files) return;
    setImageLoading(true);
    const saveImageToFirebase: any = await handleImageSaveToFireBase(
      event.target.files[0]
    );

    if (saveImageToFirebase !== "") {
      setImageLoading(false);
      console.log(saveImageToFirebase, "saveImageToFirebase");
      setFormData({
        ...formData,
        image: saveImageToFirebase,
      });
    }
  }
  const handleCreatePost = () => {

  };

  return (
    <>
      <Container>
        <MainNav />
        <Link href="/dashboard" title="Back to Dashboard">{<Icons.arrowBigLeft />}</Link>
        <section className="overflow-hidden py-16 md:py-20 lg:py-28">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mb-12 rounded-md bg-black/20 dark:bg-gradient-to-br from-[#081129] to-[#021817] py-10  sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px] px-8">
                  <h2 className="mb-3 text-2xl font-bold  sm:text-3xl lg:text-2xl xl:text-3xl">
                    Create Your Own Blog Post
                  </h2>
                  <div>
                    <div className="flex flex-col gap-3">
                      <div className="flex gap-3">
                        <div className={`${imageLoading ? "w-1/2" : "w-full"}`}>
                          <label className="mb-3 block text-sm font-medium text-dark dark:text-white">
                            Upload Blog Image
                          </label>
                          <Input
                            id="fileInput"
                            accept="image/*"
                            max={1000000}
                            type="file"
                            onChange={handleBlogImageChange}
                            className="w-full mb-8 rounded-md border border-transparent py-3 px-6 shadow-one outline-none focus:border-neutral-100 focus-visible:shadow-none dark:bg-[#242B51]"
                          />
                        </div>
                        {imageLoading ? (
                          <div className="w-1/2">
                            <Spinner />
                          </div>
                        ) : null}
                      </div>
                      <div className="-mx-4 flex flex-wrap">
                        {formControls.map((control) => (
                          <div 
                            className="w-full px-4"
                            key={control.id}
                          >
                            <label className="mb-3 block text-sm font-medium">
                              {control.label}
                            </label>
                            {control.component === "input" ? (
                              <input
                                type={control.type}
                                name={control.id}
                                placeholder={control.placeholder}
                                className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51]"
                                onChange={(
                                  event: React.ChangeEvent<HTMLInputElement>
                                ) => {
                                  setFormData({
                                    ...formData,
                                    [control.id]: event.target.value,
                                  });
                                }}
                                value={formData[control.id as keyof BlogFormData]}
                              />
                            ) : control.component === "textarea" ? (
                              <textarea
                                placeholder={control.placeholder}
                                rows={5}
                                name={control.id}
                                className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51]"
                                onChange={(
                                  event: React.ChangeEvent<HTMLTextAreaElement>
                                ) => {
                                  setFormData({
                                    ...formData,
                                    [control.id]: event.target.value,
                                  });
                                }}
                                value={formData[control.id as keyof BlogFormData]}
                              />
                            ) : control.component === "select" ? (
                              <select
                                name={control.id}
                                className="w-full mb-8 rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51]"
                                onChange={(
                                  event: React.ChangeEvent<HTMLSelectElement>
                                ) => {
                                  setFormData({
                                    ...formData,
                                    [control.id]: event.target.value,
                                  });
                                }}
                                value={formData[control.id as keyof BlogFormData]}
                              >
                                <option value={""} id="">
                                  Select
                                </option>
                                {control.options.map((optionItem) => (
                                  <option
                                  key={optionItem.value} 
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
                          <Button
                            onClick={handleCreatePost}
                          >
                            Create New Blog
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}

export default Page;
