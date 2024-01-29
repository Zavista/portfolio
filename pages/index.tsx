import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider defaultTheme="light">
      <Navbar></Navbar>
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
        <HomeSection></HomeSection>
      </main>

    </ThemeProvider>
      
  );
}
