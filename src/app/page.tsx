import { Footer } from "@/components/footer";
// import ScrollZoom from "@/components/hero-image";
import { Companies } from "@/components/section/companies";
// import { FAQ } from "@/components/section/faq";
import Features from "@/components/section/features";
import { HeroSection } from "@/components/section/hero-section";
// import NewsLetter from "@/components/section/news-letter";
// import { PricingComponent } from "@/components/section/pricing";
// import { Testimonial } from "@/components/section/testimonials";
import TestimonialsSection from "@/components/section/testimonials-section";
import { ContactUsClassic } from "@/components/section/contact-classic";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      {/* <ScrollZoom /> */}
      <Companies />
      <Features />
      <TestimonialsSection />
      <ContactUsClassic />
      {/* <Testimonial /> */}
      {/* <PricingComponent /> */}
      {/* <FAQ /> */}
      {/* <NewsLetter /> */}
      <Footer />
    </div>
  );
}
