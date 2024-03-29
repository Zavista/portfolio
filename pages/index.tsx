import Navbar from "../components/Navbar";
import HomeSection from "../components/HomeSection";
import { ThemeProvider } from "next-themes";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from '../components/Footer'
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>David Zhao | Portfolio </title>
      </Head>
      <ThemeProvider defaultTheme="light">
      <Navbar></Navbar>
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
        <HomeSection></HomeSection>
        <AboutSection></AboutSection>
        <ProjectsSection></ProjectsSection>
      </main>
      <Footer></Footer>
    </ThemeProvider>
      
    </>

  );
}
