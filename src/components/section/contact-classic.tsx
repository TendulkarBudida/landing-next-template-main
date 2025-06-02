"use client";

import { Mail, MapPin, Phone, Clock } from 'lucide-react';
import { Container } from '../container';
import { useState } from 'react';

export function ContactUsClassic() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: ''
  });

  const validateName = (name: string) => {
    if (!name) return 'Name is required';
    if (!/^[A-Za-z\s]+$/.test(name)) return 'Name should only contain alphabets';
    return '';
  };

  const validateEmail = (email: string) => {
    if (!email) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email';
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'name') {
      setErrors(prev => ({ ...prev, name: validateName(value) }));
    } else if (name === 'email') {
      setErrors(prev => ({ ...prev, email: validateEmail(value) }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    setErrors({ name: nameError, email: emailError });
    if (!nameError && !emailError) {
      // Form is valid, proceed with submission
      console.log('Form submitted:', formData);
    }
  };

  return (
    <Container className="pb-16 px-4 md:px-0 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 text-brand">Contact Us</h2>
        <p className="text-lg text-primary-text px-4 max-w-5xl mx-auto">
          Get in touch with us for any inquiries
        </p>
      </div>
      {/* <hr className="border-t border-brand w-full my-8" /> */}
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-[0px_0px_20px_10px_rgba(0,0.1,0.1,0.1)] overflow-hidden">
          {/* Left Info Panel */}
          <div className="bg-brand text-white flex flex-col gap-6 p-8 md:w-1/3 w-full">
            <div className="flex items-center gap-4 border rounded-lg p-4">
              <MapPin className="w-7 h-7 text-white" />
              <div>
                <div className="font-bold text-lg">Address</div>
                <div className="text-sm">AV CHAMPS LLP, H.No- 362, 12th Main Road, Sector 5, HSR Layout, Bangalore-560102</div>
              </div>
            </div>
            <div className="flex items-center gap-4 border rounded-lg p-4">
              <Phone className="w-7 h-7 text-white" />
              <div>
                <div className="font-bold text-lg">Phone</div>
                <div className="text-sm">+91 9966416417</div>
              </div>
            </div>
            <div className="flex items-center gap-4 border rounded-lg p-4">
              <Mail className="w-7 h-7 text-white" />
              <div>
                <div className="font-bold text-lg">Email</div>
                <div className="text-sm">hello@avchamps.com</div>
              </div>
            </div>
            <div className="flex items-center gap-4 border rounded-lg p-4">
              <Clock className="w-7 h-7 text-white" />
              <div>
                <div className="font-bold text-lg">Open Hours:</div>
                <div className="text-sm">Mon-Sat: 11AM - 23PM</div>
              </div>
            </div>
          </div>
          {/* Right Form Panel */}
          <div className="flex-1 bg-white p-8">
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex-1">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand text-md"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>
                <div className="flex-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand text-md"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand text-md"
              />
              <textarea
                rows={8}
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-3 mb-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand resize-y text-md"
              />
              <div className="text-center">
              {/* <AnimatedButton
                  type="submit"
                  className=" hover:before:shadow-[inset_0_0_0_10em_rgb(40,144,241)] h-10 px-6 sm:px-8 text-md sm:text-lg font-semibold whitespace-nowrap w-[150px] sm:w-auto z-40 bg-brand text-white"
                >
                  Send Message
                </AnimatedButton> */}
                <button
                  type="submit"
                  className="mt-2 bg-brand hover:bg-brand/90 text-white font-semibold px-10 py-3 rounded-full shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 text-md"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
} 