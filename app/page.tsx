import Hero from "./components/HeroSection";
import Portfolio from "./components/PortfolioSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import ServiceSection from "./components/ServiceSection";
import TestimonialSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import JamesSection from "./components/JamesSection";

export default function Home() {
  return (
    <>
    <Hero/>

    <JamesSection/>

    <Portfolio/>
    
    <ServiceSection/>
    <TestimonialSection/>
    <CTASection/>
    <ContactSection/>
    <Footer/>
    </>
  );
}
