import Navbar from "../components/Navbar";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider defaultTheme="light">
      <Navbar></Navbar>
    </ThemeProvider>
      
  );
}
