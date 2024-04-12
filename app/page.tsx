import Hero from "./components/HeroSection";
import PortfolioSectionRevision from "./components/PortfolioSectionRevision";
import Footer from "./components/Footer";
import ServiceSection from "./components/ServiceSection";
import TestimonialSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import JamesSection from "./components/JamesSection";
import Socials from "./components/Socials";

export default function Home() {
  return (
    <>
    <Hero/>
    <JamesSection/>
    <PortfolioSectionRevision/>
    <ServiceSection/>
    <TestimonialSection/>
    <CTASection/>
    <Socials/>
    <Footer/>
    </>
  );
}
