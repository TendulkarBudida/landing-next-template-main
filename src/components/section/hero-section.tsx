"use client";

import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { AnimatedButton } from "../ui/animated-button";
import { Spotlight } from "../ui/spotlight-new";
import Image from "next/image";
// import { useRouter } from "next/navigation";
import heroImg1 from "@/../public/heroimg1.avif";
import heroImg2 from "@/../public/heroimg2.avif";
import { useState, useRef } from "react";

export function HeroSection() {
  // const router = useRouter();
  const [showPopover, setShowPopover] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });
  const joinBtnRef = useRef<HTMLButtonElement | null>(null);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // const scrollToNextSection = () => {
  //   // Scroll to the next section after hero
  //   window.scrollTo({
  //     top: window.innerHeight,
  //     behavior: 'smooth'
  //   });
  // };

  const handleJoinCommunity = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setPopoverPosition({
      x: rect.left + rect.width / 2,
      y: rect.top - 40
    });
    setShowPopover(true);
    setTimeout(() => setShowPopover(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 hero-nav-padding">
      <Spotlight 
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 70%, .35) 0, hsla(210, 100%, 55%, .20) 50%, hsla(210, 100%, 45%, .08) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 75%, .30) 0, hsla(210, 100%, 60%, .18) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 80%, .25) 0, hsla(210, 100%, 50%, .15) 80%, transparent 100%)"
        width={700}
        height={1600}
        smallWidth={300}
        xOffset={120}
      />
      <Image
        src={heroImg1}
        alt="hero-img1"
        className="absolute -z-50 top-10 right-20 blur-sm animate-bounce w-20 h-20"
      />
      <Image
        src={heroImg2}
        alt="hero-img1"
        className="absolute -z-50 top-[30rem] right-0 xl:right-[20rem] blur-sm animate-bounce opacity-50 xl:opacity-80"
      />
      <Container className="overflow-visible px-4 md:px-0">
        <Hero className="relative text-center w-full">
          <div className="animate-fade-in [--animation-delay:200ms] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-semibold text-white leading-tight tracking-tight md:leading-snug  relative z-40">
            Audio Visual Community
          </div>
          <div className="animate-fade-in [--animation-delay:200ms] text-3xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-semibold text-white leading-tight tracking-tight md:leading-snug  relative z-40">
              Built by AV Experts, For AV Professionals
          </div>
          <div className=""></div>
          <div className="animate-fade-in [--animation-delay:200ms] mt-6 text-md sm:text-md md:text-lg lg:text-[16px] text-slate-200 max-w-5xl mx-auto leading-relaxed font-light relative z-40">
            Where AV experts unite to share, learn, and lead the industry forward.
          </div>
          <div className="animate-fade-in [--animation-delay:200ms] mt-2 mb-10 text-md sm:text-md md:text-lg lg:text-[16px] text-slate-200 max-w-8xl mx-auto leading-relaxed font-light relative z-40">
            We don&apos;t just build a platform – we cultivate a thriving ecosystem for Audio Visual growth and innovation.
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center animate-fade-in [--animation-delay:200ms] relative z-0 px-0">
            <button
              ref={joinBtnRef}
              type="button"
              onClick={handleJoinCommunity}
              className="bg-transparent relative py-[5px] flex items-center justify-center  border-white no-underline cursor-pointer border rounded-[50px] outline-none overflow-hidden text-white transition-[color] duration-300 delay-100 ease-out text-center hover:text-white hover:border-[rgb(40,144,241)] before:absolute before:top-0 before:right-0 before:bottom-0 before:m-auto before:content-[''] before:rounded-full before:block before:w-[20em] before:h-[20em] before:left-[-5em] before:text-center before:transition-[box-shadow] before:duration-500 before:ease-out before:-z-[1] hover:before:shadow-[inset_0_0_0_10em_rgb(40,144,241)] h-14 sm:h-16 px-6 sm:px-8 text-lg sm:text-lg font-semibold whitespace-nowrap w-[200px] sm:w-auto"
            >
              Join Community
            </button>
            <AnimatedButton 
              type="button" 
              onClick={scrollToServices}
              className="h-14 sm:h-16 px-6 sm:px-8 text-lg sm:text-lg font-semibold whitespace-nowrap w-[200px] sm:w-auto"
            >
              Explore Services
            </AnimatedButton>
          </div>
        </Hero>
      </Container>

      {/* Popover - matches footer style */}
      {showPopover && (
        <div
          className="fixed bg-white text-slate-900 px-4 py-2 rounded-lg shadow-lg text-sm font-medium z-50 animate-fade-in"
          style={{
            left: popoverPosition.x,
            top: popoverPosition.y,
            transform: 'translateX(-50%)'
          }}
        >
          This feature is coming soon!
        </div>
      )}
      {/* Scroll Down Indicator - Positioned at bottom */}
      {/* <div 
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem] z-50 group cursor-pointer hover:scale-110 transition-all duration-300"
        onClick={scrollToNextSection}
      ><p className="text-white/60 text-sm font-medium mb-4 animate-pulse group-hover:text-white/80 transition-colors duration-300 text-center whitespace-nowrap">
          Scroll down to discover
        </p>
        <div className="relative flex flex-col items-center">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-12 border border-white/20 rounded-full animate-ping opacity-30"></div>
          
          <div className="relative w-6 h-10 border-2 border-white/40 rounded-full flex justify-center group-hover:border-white/60 transition-colors duration-300 animate-bounce">
            
            <div className="w-1 h-3 bg-gradient-to-b from-white/90 to-white/30 rounded-full mt-2 animate-scroll-wheel"></div>
          </div>
          
          <div className="flex flex-col items-center mt-2 space-y-1">
            <svg 
              className="w-3 h-3 text-white/50 animate-bounce-arrow opacity-80" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              style={{ animationDelay: '0ms' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
            </svg>
            <svg 
              className="w-3 h-3 text-white/40 animate-bounce-arrow opacity-60" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              style={{ animationDelay: '150ms' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
            </svg>
            <svg 
              className="w-3 h-3 text-white/30 animate-bounce-arrow opacity-40" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              style={{ animationDelay: '300ms' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" />
            </svg>
          </div>
        </div>
      </div> */}
    </section>
  );
}
