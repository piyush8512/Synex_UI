import Hero from "@/components/landingpage/Hero";
import BusinessSection from "@/components/tabswitichingimage";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import ContactCard from "@/components/contact1";
import NewsList from "@/components/newsblogs";
import AboutCard from "@/components/card1";
import Testimonials from "@/components/Testimonials1";
import HeroSection from "@/components/Spotlight";
import Vodcastemove from "@/components/button";
import ServicesOffer from "@/components/drawer";
import TeamSection from "@/components/MeetOurTeam";
import PricingSection from "@/components/PricingSection";
import Navbar from "@/components/landingpage/Navbar";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BusinessSection />
      <TestimonialCarousel />
      <ContactCard />
      <NewsList />
      <AboutCard />
      <Testimonials />
      <HeroSection />
      <Vodcastemove />
      <ServicesOffer />
      <TeamSection />
      <PricingSection />
    </main>
  );
}
