import GymIntroLoader from "@/components/ui/GymIntroLoader";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Programs from "@/components/sections/Programs";
import PersonalTraining from "@/components/sections/PersonalTraining";
import Transformations from "@/components/sections/Transformations";
import BMICalculator from "@/components/sections/BMICalculator";
import Packages from "@/components/sections/Packages";
import Coaches from "@/components/sections/Coaches";
import Nutrition from "@/components/sections/Nutrition";
import Reviews from "@/components/sections/Reviews";
import Gallery from "@/components/sections/Gallery";
import FAQ from "@/components/sections/FAQ";
import Blog from "@/components/sections/Blog";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <GymIntroLoader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Programs />
        <PersonalTraining />
        <Transformations />
        <BMICalculator />
        <Packages />
        <Coaches />
        <Nutrition />
        <Reviews />
        <Gallery />
        <FAQ />
        <Blog />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
