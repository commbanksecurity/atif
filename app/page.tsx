import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SerpSimulator from "@/components/SerpSimulator";
import Methodology from "@/components/Methodology";
import Arsenal from "@/components/Arsenal";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#070b13] text-zinc-100">
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <SerpSimulator />
        <Methodology />
        <Arsenal />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
