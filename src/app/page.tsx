import Container from "@/components/Container";
import LatestPost from "@/components/home/latest.post";
import PopularPosts from "@/components/home/popular.posts";
import TopCategories from "@/components/home/top.categories";
import { MainNav } from "@/ui/header/mainNav";

export default function Home() {
  return (
    <>
      <Container>
        <MainNav />
        <div className="flex flex-col items-start justify-evenly mt-16 md:flex-row">
          <section>
            <LatestPost />
          </section>
          <section className="h-screen">
            <div>
              <h1 className="font-bold mb-4">TOP CATEGORIES</h1>
              <TopCategories />
            </div>
            <div className="mt-10 sticky top-0">
              <h1 className="font-bold mb-4">POPULAR POSTS</h1>
              <PopularPosts />
            </div>
          </section>
        </div>
      </Container>
    </>
  );
}
