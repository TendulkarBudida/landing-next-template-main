"use client";

import { Container } from "../container";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 text-brand">Contact Us</h2>
          <p className="text-lg text-primary-text px-4 max-w-5xl mx-auto">
            Get in touch with us for any inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Division */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4 flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full border border-brand/20 bg-brand/5">
                    <MapPin className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary text-lg">Address</h4>
                    <p className="text-md text-primary-text">AV CHAMPS LLP, H.No- 362, 12th Main Road, Sector 5, HSR Layout, Bangalore-560102</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full border border-brand/20 bg-brand/5">
                    <Phone className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary text-lg">Phone</h4>
                    <p className="text-md text-primary-text">+91 9966416417</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full border border-brand/20 bg-brand/5">
                    <Mail className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary text-lg">Email</h4>
                    <p className="text-md text-primary-text">hello@avchamps.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="">
              <h3 className="text-2xl font-semibold mb-4">Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9951318210333!2d77.63460511164146!3d12.908034187348944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14915acd8d8f%3A0x17c58a484d8186af!2s362%2C%2012th%20Main%20Rd%2C%20Sector%207%2C%20HSR%20Layout%2C%20Bengaluru%2C%20Karnataka%20560102!5e0!3m2!1sen!2sin!4v1748804728593!5m2!1sen!2sin"
                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0011999999997!2d77.6441!3d12.9121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae149a0f4f3f0f%3A0x3b0c0c0c0c0c0c0c!2sHSR%20Layout%20Sector%205%2C%20Bengaluru%2C%20Karnataka%20560102!5e0!3m2!1sen!2sin!4v1647043087964!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-3xl min-h-[200px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
              ></iframe>
            </div>
          </div>

          {/* Right Division - Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300">
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="font-medium text-primary text-lg">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full text-md text-primary-text"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="font-medium text-primary text-lg">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full text-md text-primary-text"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="font-medium text-primary text-lg">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  className="w-full text-md text-primary-text"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="font-medium text-primary text-lg">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="w-full min-h-[150px] text-md text-primary-text"
                />
              </div>
              <Button 
                className="w-full relative overflow-hidden bg-gradient-to-r from-brand via-brand/90 to-brand text-white font-medium py-4 rounded-2xl shadow-[0_4px_14px_0_rgba(0,118,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-brand/50 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                size="medium"
                aria-label="Send message"
                role="button"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand/0 via-brand/30 to-brand/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative flex items-center justify-center w-full">
                  <span className="relative z-10 text-base font-semibold tracking-wide flex items-center gap-2">
                    Send Message
                    <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:rotate-12 transition-all duration-300" />
                  </span>
                </div>
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
} 