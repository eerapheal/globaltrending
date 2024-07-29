import LatestPost from "@/components/home/latest.post";
import { MainNav } from "@/ui/header/mainNav";

export default function Home() {
  return (
    <>
    <header>
      <MainNav />
    </header>
    <main className="">
      <section>
       <LatestPost />
      </section>
    </main>
    </>
  );
}
