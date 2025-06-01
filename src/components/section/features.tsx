"use client";

import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useEffect, useState } from "react";

const avServices = [
  {
    title: "Professional AV Tools",
    description: "Access cutting-edge audio visual tools and resources designed by industry experts to streamline your workflow and enhance project outcomes.",
    link: "tools",
  },
  {
    title: "AV Career Hub",
    description: "Discover exciting career opportunities in the audio visual industry. Connect with top employers and advance your AV professional journey.",
    link: "careers",
  },
  {
    title: "AV Marketplace",
    description: "Shop the latest audio visual equipment and solutions. Find everything from professional microphones to complete venue setups.",
    link: "ekart",
  },
  {
    title: "AV Professional Network",
    description: "Join a thriving community of audio visual professionals. Share knowledge, collaborate on projects, and grow your network.",
    link: "discussions",
  },
  {
    title: "Equipment Reviews",
    description: "Read honest reviews and comparisons of the latest AV equipment from industry professionals who actually use the gear.",
    link: "reviews",
  },
  {
    title: "Professional Training",
    description: "Enhance your skills with comprehensive training programs led by industry experts. Stay current with the latest AV technologies and techniques.",
    link: "training",
  },
];

export default function Features() {
  const [isMounted, setIsMounted] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCardClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setPopoverPosition({
      x: rect.left + (rect.width / 2),
      y: rect.top - 40
    });
    setShowPopover(true);
    setTimeout(() => setShowPopover(false), 2000);
  };

  if (!isMounted) {
    return (
      <div className="py-12 lg:py-16 px-4 lg:px-8 container mx-auto">
        <div className="text-center  max-w-5xl mx-auto mb-8 sm:mb-12 lg:mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 text-brand">
          Our Services
        </h2>
        <p className="text-lg text-primary-text max-w-5xl">
        From automated workflow tools to career opportunities, marketplace solutions to community engagement, AV Champs provides everything the Audio Visual industry needs to thrive and grow.
        </p>
      </div>
      <div className="mt-6 sm:mt-8 lg:mt-10 px-1 sm:px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-24">
        <HoverEffect items={avServices} className="gap-2 sm:gap-4 lg:gap-0" />
      </div>
      </div>
    );
  }

  return (
    <motion.div
      id="services"
      initial={{ y: 70, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "easeIn", delay: 0.3 }}
      className="pt-12 lg:pt-16 px-4 lg:px-8 container mx-auto"
    >
      <div className="text-center  max-w-5xl mx-auto mb-4 sm:mb-8 lg:mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 text-brand">
          Our Services
        </h2>
        <p className="text-lg text-primary-text max-w-5xl">
          From automated workflow tools to career opportunities, marketplace solutions to community engagement, AV Champs provides everything the Audio Visual industry needs to thrive and grow.
        </p>
      </div>
      <div className="mt-6 sm:mt-8 lg:mt-10 px-1 sm:px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-24">
        <HoverEffect items={avServices} className="gap-2 sm:gap-4 lg:gap-0" onCardClick={handleCardClick} />
      </div>

      {/* Popover */}
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
    </motion.div>
  );
}
