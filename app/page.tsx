import Image from "next/image";
import Hero from "./components/HeroSection";
import Portfolio from "./components/PortfolioSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import ServiceSection from "./components/ServiceSection";
import TestimonialSection from "./components/TestimonialsSection";
import SocialProofSection from "./components/SocialProofSection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <>
    <Hero/>
    <SocialProofSection/>
    <Portfolio/>
    <CTASection/>
    <ServiceSection/>
    <TestimonialSection/>
    <ContactSection/>
    <Footer/>
    </>
  );
}
