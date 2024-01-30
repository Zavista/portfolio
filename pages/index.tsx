import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import { ThemeProvider } from "next-themes";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <ThemeProvider defaultTheme="light">
      <Navbar></Navbar>
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <HomeSection></HomeSection>
        <AboutSection></AboutSection>
        <ProjectsSection></ProjectsSection>
      </main>

    </ThemeProvider>
      
  );
}
