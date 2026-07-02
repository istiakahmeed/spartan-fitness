import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Coaches from "@/components/sections/Coaches";
import Packages from "@/components/sections/Packages";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Coaches />
        <Packages />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
