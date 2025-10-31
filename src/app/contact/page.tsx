"use client";

import { useState } from "react";
import { CONTACT } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <div className="mb-8 h-px w-16 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent"></div>
          <h1 className="mb-4 text-5xl font-bold md:text-6xl lg:text-7xl" style={{ fontFamily: "var(--font-playfair)" }}>
            CONTACT <span className="text-[#c9a961]">US</span>
          </h1>
          <p className="text-sm text-gray-400 tracking-wide" style={{ fontFamily: "var(--font-lora)" }}>
            Let us help you find your perfect property
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Office Location */}
            <div className="group border border-[#c9a961]/20 bg-[#0a0a0a] p-8 text-center transition-all hover:border-[#c9a961]">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center border border-[#c9a961]">
                  <svg className="h-8 w-8 text-[#c9a961]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 text-sm font-semibold tracking-widest text-[#c9a961] uppercase" style={{ fontFamily: "var(--font-playfair)" }}>
                Office Location
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed" style={{ fontFamily: "var(--font-lora)" }}>
                {CONTACT.address.line1}<br />
                {CONTACT.address.line2}<br />
                {CONTACT.address.line3}<br />
                {CONTACT.address.city}, {CONTACT.address.state} {CONTACT.address.pincode}
              </p>
              <a
                href={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address.full)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block text-xs tracking-widest text-[#c9a961] hover:text-white transition-colors"
              >
                GET DIRECTIONS →
              </a>
            </div>

            {/* Working Hours */}
            <div className="group border border-[#c9a961]/20 bg-[#0a0a0a] p-8 text-center transition-all hover:border-[#c9a961]">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center border border-[#c9a961]">
                  <svg className="h-8 w-8 text-[#c9a961]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 text-sm font-semibold tracking-widest text-[#c9a961] uppercase" style={{ fontFamily: "var(--font-playfair)" }}>
                Working Hours
              </h3>
              <div className="space-y-2 text-sm text-gray-400" style={{ fontFamily: "var(--font-lora)" }}>
                <p>Monday - Saturday</p>
                <p className="text-white">9:00 AM - 8:00 PM</p>
                <p className="mt-4">Sunday</p>
                <p className="text-white">10:00 AM - 6:00 PM</p>
              </div>
            </div>

            {/* Communication */}
            <div className="group border border-[#c9a961]/20 bg-[#0a0a0a] p-8 text-center transition-all hover:border-[#c9a961]">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center border border-[#c9a961]">
                  <svg className="h-8 w-8 text-[#c9a961]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 text-sm font-semibold tracking-widest text-[#c9a961] uppercase" style={{ fontFamily: "var(--font-playfair)" }}>
                Communication
              </h3>
              <div className="space-y-3 text-sm text-gray-400" style={{ fontFamily: "var(--font-lora)" }}>
                <p>
                  <a href={`tel:${CONTACT.phone}`} className="hover:text-[#c9a961] transition-colors">
                    +91 {CONTACT.phone}
                  </a>
                </p>
                <p>
                  <a href={`https://wa.me/91${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a961] transition-colors">
                    WhatsApp: +91 {CONTACT.whatsapp}
                  </a>
                </p>
                <p className="pt-2">
                  <a href={`mailto:${CONTACT.email}`} className="hover:text-[#c9a961] transition-colors">
                    {CONTACT.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Side - Message */}
            <div className="flex flex-col justify-center">
              <div className="mb-8 h-px w-16 bg-gradient-to-r from-[#c9a961] to-transparent"></div>
              <p className="mb-6 text-xs tracking-[0.3em] text-[#c9a961] uppercase" style={{ fontFamily: "var(--font-lora)" }}>
                Get in Touch
              </p>
              <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>
                HAVE ANY <span className="text-[#c9a961]">QUERY?</span>
              </h2>
              <p className="mb-8 text-base leading-relaxed text-gray-400" style={{ fontFamily: "var(--font-lora)" }}>
                Whether you're looking to buy, sell, or invest in premium real estate, we're here to assist. 
                Our expert consultants are ready to help you navigate the property market with personalized service.
              </p>
              <div className="space-y-4">
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="inline-flex items-center gap-3 text-sm text-gray-400 hover:text-[#c9a961] transition-colors"
                >
                  <span className="text-[#c9a961]">→</span>
                  Call us directly at +91 {CONTACT.phone}
                </a>
                <br />
                <a
                  href={`https://wa.me/91${CONTACT.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-sm text-gray-400 hover:text-[#c9a961] transition-colors"
                >
                  <span className="text-[#c9a961]">→</span>
                  Message us on WhatsApp
                </a>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="border border-[#c9a961]/20 bg-[#0a0a0a] p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-b border-[#c9a961]/30 bg-transparent px-0 py-3 text-sm text-white placeholder-gray-600 focus:border-[#c9a961] focus:outline-none transition-colors"
                    style={{ fontFamily: "var(--font-lora)" }}
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border-b border-[#c9a961]/30 bg-transparent px-0 py-3 text-sm text-white placeholder-gray-600 focus:border-[#c9a961] focus:outline-none transition-colors"
                    style={{ fontFamily: "var(--font-lora)" }}
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border-b border-[#c9a961]/30 bg-transparent px-0 py-3 text-sm text-white placeholder-gray-600 focus:border-[#c9a961] focus:outline-none transition-colors"
                    style={{ fontFamily: "var(--font-lora)" }}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full border-b border-[#c9a961]/30 bg-transparent px-0 py-3 text-sm text-white placeholder-gray-600 focus:border-[#c9a961] focus:outline-none resize-none transition-colors"
                    style={{ fontFamily: "var(--font-lora)" }}
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full border border-[#c9a961] bg-[#c9a961] px-8 py-4 text-xs font-medium tracking-widest text-black transition-all duration-300 hover:bg-transparent hover:text-[#c9a961]"
                  style={{ fontFamily: "var(--font-lora)" }}
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-96 border border-[#c9a961]/20 bg-[#0a0a0a] flex items-center justify-center">
            <div className="text-center">
              <svg className="mx-auto mb-4 h-16 w-16 text-[#c9a961]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <p className="text-sm text-gray-400" style={{ fontFamily: "var(--font-lora)" }}>
                Google Maps Integration<br />
                <span className="text-xs text-gray-600">Map will be integrated here</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
