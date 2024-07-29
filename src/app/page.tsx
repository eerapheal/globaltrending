import Container from "@/components/Container";
import LatestPost from "@/components/home/latest.post";
import { MainNav } from "@/ui/header/mainNav";

export default function Home() {
  return (
    <>
      <Container>
        <header>
          <MainNav />
        </header>
        <main className="">
          <section>
            <LatestPost />
          </section>
        </main>
      </Container>
    </>
  );
}
