"use client";

import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useEffect, useState } from "react";

const avServices = [
  {
    title: "Professional AV Tools",
    description: "Access cutting-edge audio visual tools and resources designed by industry experts to streamline your workflow and enhance project outcomes.",
    link: "#tools",
  },
  {
    title: "AV Career Hub",
    description: "Discover exciting career opportunities in the audio visual industry. Connect with top employers and advance your AV professional journey.",
    link: "#careers",
  },
  {
    title: "AV Marketplace",
    description: "Shop the latest audio visual equipment and solutions. Find everything from professional microphones to complete venue setups.",
    link: "#avkart",
  },
  {
    title: "AV Professional Network",
    description: "Join a thriving community of audio visual professionals. Share knowledge, collaborate on projects, and grow your network.",
    link: "#community",
  },
  {
    title: "Equipment Reviews",
    description: "Read honest reviews and comparisons of the latest AV equipment from industry professionals who actually use the gear.",
    link: "#reviews",
  },
  {
    title: "Professional Training",
    description: "Enhance your skills with comprehensive training programs led by industry experts. Stay current with the latest AV technologies and techniques.",
    link: "#training",
  },
];

export default function Features() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="py-12 lg:py-16 px-4 lg:px-8 container mx-auto">
        <p className="text-sm lg:text-md text-brand font-bold text-center mb-2"></p>
        <h1 className="tracking-tight text-2xl md:text-4xl lg:text-6xl text-center font-bold mb-4 text-brand glow ">
          Our Services{" "}
          {/* <span
            className="text-brand glow font-serif"
            style={{
              textShadow:
                "0px -10px 70px rgba(59, 130, 246, 0.5), 0px -10px 70px rgba(59, 130, 246, 0.5)",
            }}
          >
            AV Solutions
          </span> */}
        </h1>      
        <p className="max-w-5xl text-center mx-auto text-primary-text text-sm md:text-md lg:text-lg font-medium px-4">
          From automated workflow tools to career opportunities, marketplace solutions to community engagement, 
          AV Champs provides everything the Audio Visual industry needs to thrive and grow.
        </p>      {/* Hover Effect Cards with improved mobile spacing */}
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
      {/* <p className="text-sm lg:text-md text-brand font-bold text-center mb-2"></p> */}
      <h1 className="tracking-tight text-2xl md:text-4xl lg:text-6xl text-center font-bold mb-4 text-brand glow ">
        Our Services{" "}
      </h1>      
      <p className="max-w-5xl text-center mx-auto text-primary-text text-sm md:text-md lg:text-lg font-medium px-4">
        From automated workflow tools to career opportunities, marketplace solutions to community engagement, 
        AV Champs provides everything the Audio Visual industry needs to thrive and grow.
      </p>      {/* Hover Effect Cards with improved mobile spacing */}
      <div className="mt-6 sm:mt-8 lg:mt-10 px-1 sm:px-2 md:px-4 lg:px-8 xl:px-16 2xl:px-24">
        <HoverEffect items={avServices} className="gap-2 sm:gap-4 lg:gap-0" />
      </div>
    </motion.div>
  );
}
