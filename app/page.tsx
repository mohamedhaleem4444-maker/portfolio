import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import DualCareer from "@/components/sections/DualCareer";

import Skills from "@/components/sections/Skills";
import FeaturedSoftware from "@/components/sections/FeaturedSoftware";
import Projects from "@/components/sections/Projects";
import Expertise from "@/components/sections/Expertise";
import Certifications from "@/components/sections/Certifications";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <DualCareer />

      <Skills />
      <FeaturedSoftware />
      <Projects />
      <Expertise />
      <Certifications />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
