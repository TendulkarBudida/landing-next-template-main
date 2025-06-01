"use client";

// import Link from "next/link";
// import { Container } from "./container";
import { XIcon } from "./icons/twitter";
import { LinkedinIcon } from "./icons/linkedin";
import { InstagramIcon } from "./icons/instagram";
import { YouTubeIcon } from "./icons/youtube";
import { FacebookIcon } from "./icons/facebook";
import { motion } from "framer-motion";
import Logo from "../../public/logo-white.png";
import Image from "next/image";
// import { FooterButton } from './ui/footer-button';
import { AnimatedButton } from "./ui/animated-button";
import { useState } from "react";

export const Footer = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setPopoverPosition({
      x: rect.left,
      y: rect.top - 40
    });
    setShowPopover(true);
    setTimeout(() => setShowPopover(false), 2000);
  };

  return (
    <motion.footer
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ ease: "easeIn", delay: 0.3 }}
      className="bg-slate-900 text-slate-300 rounded-lg mt-8"
    >
      <div className="max-w-[1300px] mx-auto px-6 md:px-12 py-16">
        {/* Top Zone */}
        <div className="flex flex-col md:flex-row justify-between gap-12">
          
          {/* Left Block - Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col justify-between items-center w-full md:items-start md:w-auto text-center"
          >
            {/* Circular Badge with Logo */}
            {/* <div className="w-14 h-14 bg-violet-500 rounded-full flex items-center justify-center"> */}
            {/* <Image src={Logo} alt="AV Champs" width={128} height={128} className="" /> */}
            {/* </div> */}
            {/* <h3 className="text-xl font-semibold text-white ml-4">AV Champs</h3> */}
            
            {/* Tagline */}
            <div className="flex flex-col items-center md:items-start w-full">
              <Image src={Logo} alt="AV Champs" width={180} height={180} className="mx-auto md:mx-0" />
              <p className="text-slate-50 text-sm font-medium mt-3 text-center md:text-left w-full">Be Connected</p>
            </div>

            <div className="flex justify-center md:justify-start gap-6 mt-8 w-full">
              <a href="https://www.linkedin.com/company/av-champs/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn">
                <LinkedinIcon className="w-5 h-5 text-slate-400 hover:text-white transition-colors cursor-pointer" />
              </a>
              <a href="https://instagram.com/av.champs" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                <InstagramIcon className="w-5 h-5 text-slate-400 hover:text-white transition-colors cursor-pointer" />
              </a>
              <a href="https://x.com/rgbaudiovideo" target="_blank" rel="noopener noreferrer" aria-label="Follow us on X (Twitter)">
                <XIcon className="w-5 h-5 text-slate-400 hover:text-white transition-colors cursor-pointer" />
              </a>
              <a href="https://youtube.com/@AVChamps" target="_blank" rel="noopener noreferrer" aria-label="Subscribe to our YouTube channel">
                <YouTubeIcon className="w-5 h-5 text-slate-400 hover:text-white transition-colors cursor-pointer" />
              </a>
              <a href="https://facebook.com/profile.php?id=61558649983492" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                <FacebookIcon className="w-5 h-5 text-slate-400 hover:text-white transition-colors cursor-pointer" />
              </a>
            </div>
          </motion.div>

          {/* Right Block - Navigation Grid */}
          <div className="flex-1 w-full">
            <div className="flex flex-wrap md:flex-nowrap justify-between gap-8 md:gap-4">
              
              {/* Column 1: Company */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-4 mr-2 md:mr-0"
              >
                <h4 className="uppercase text-xs font-bold tracking-widest text-slate-400 mb-4">Company</h4>
                <ul className="space-y-1">
                  <li><a href="#" onClick={handleLinkClick} className="block text-sm text-slate-300 hover:text-white transition-colors">About</a></li>
                  <li><a href="/careers" onClick={handleLinkClick} className="block text-sm text-slate-300 hover:text-white transition-colors">Careers</a></li>
                  <li><a href="/events" onClick={handleLinkClick} className="block text-sm text-slate-300 hover:text-white transition-colors">Events</a></li>
                  <li><a href="/login" onClick={handleLinkClick} className="block text-sm text-slate-300 hover:text-white transition-colors">Login</a></li>
                  {/* <li><a href="/login" onClick={handleLinkClick} className="block text-sm text-slate-300 hover:text-white transition-colors">Signup</a></li> */}
                </ul>
              </motion.div>

              {/* Column 2: Products */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <h4 className="uppercase text-xs font-bold tracking-widest text-slate-400 mb-4">Products</h4>
                <ul className="space-y-1">
                  <li><a href="tools" onClick={handleLinkClick} className="block text-sm text-slate-300 hover:text-white transition-colors">Tools</a></li>
                  <li><a href="ekart" onClick={handleLinkClick} className="block text-sm text-slate-300 hover:text-white transition-colors">Marketplace</a></li>
                  <li><a href="discussions" onClick={handleLinkClick} className="block text-sm text-slate-300 hover:text-white transition-colors">Community</a></li>
                  <li><a href="training" onClick={handleLinkClick} className="block text-sm text-slate-300 hover:text-white transition-colors">Training</a></li>
                  <li><a href="reviews" onClick={handleLinkClick} className="block text-sm text-slate-300 hover:text-white transition-colors">Reviews</a></li>
                </ul>
              </motion.div>

              {/* Column 4: Stay Updated */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <h4 className="uppercase text-xs font-bold tracking-widest text-slate-400 mb-4">Stay Updated</h4>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                  Get the latest updates and insights from the AV community.
                </p>
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex flex-row gap-2"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-[42px] px-3 text-sm bg-slate-800/60 border border-slate-700 rounded-md text-slate-200 placeholder-slate-500 outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all"
                  />
                  <AnimatedButton 
                    type="submit"
                    className="h-10 px-6 sm:px-8 text-md sm:text-lg font-semibold whitespace-nowrap w-[150px] sm:w-auto z-40"
                  >
                    Subscribe
                  </AnimatedButton>
                </form>
                
              </motion.div>

              {/* Social Media Icons */}
              {/* <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex justify-center lg:justify-end gap-6 mt-8"
              >
                <LinkedinIcon className="w-5 h-5 text-slate-400 hover:text-white transition-colors cursor-pointer" />
                <InstagramIcon className="w-5 h-5 text-slate-400 hover:text-white transition-colors cursor-pointer" />
                <XIcon className="w-5 h-5 text-slate-400 hover:text-white transition-colors cursor-pointer" />
                <YouTubeIcon className="w-5 h-5 text-slate-400 hover:text-white transition-colors cursor-pointer" />
                <FacebookIcon className="w-5 h-5 text-slate-400 hover:text-white transition-colors cursor-pointer" />
              </motion.div> */}

            </div>

            
          </div>
        </div>
      </div>

      {/* Separator */}
      <hr className="border-slate-700" />
      
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-3 py-6">
          <p className="text-sm text-slate-500 text-center">
            © 2024 AV Community. All rights reserved.
          </p>
          {/* <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
            <a href="/privacy" className="text-slate-500 hover:text-white transition-colors">
              Privacy
            </a>
            <a href="/terms" className="text-slate-500 hover:text-white transition-colors">
              Terms
            </a>
            <a href="/cookies" className="text-slate-500 hover:text-white transition-colors">
              Cookies
            </a>
            <a href="/security" className="text-slate-500 hover:text-white transition-colors">
              Security
            </a>
          </div> */}
        </div>
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
    </motion.footer>
  );
};
