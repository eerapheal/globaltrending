import Container from "@/components/Container";
import { MainNav } from "@/ui/header/mainNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-800">
        <Container>
          <MainNav />
        </Container>
      </div>
      {children}
    </>
  );
}
