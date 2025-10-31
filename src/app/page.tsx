"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PropertyCard from "@/components/PropertyCard";
import { getFeaturedProperties } from "@/data/properties";
import { CONTACT } from "@/lib/constants";
import { fadeInUp, fadeIn, staggerContainer, cardStagger, buttonHover, easeOutQuart } from "@/lib/animations";

export default function Home() {
  const featuredProperties = getFeaturedProperties();

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative h-screen">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: easeOutQuart }}
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop')] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </motion.div>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center"
        >
          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 96, opacity: 1 }}
            transition={{ duration: 0.8, ease: easeOutQuart, delay: 0.3 }}
            className="mb-8 h-px bg-gradient-to-r from-transparent via-[#c9a961] to-transparent"
          />
          
          <motion.p
            variants={fadeInUp}
            className="mb-4 text-xs tracking-[0.3em] text-[#c9a961] uppercase" 
            style={{ fontFamily: "var(--font-lora)" }}
          >
            Welcome to Excellence
          </motion.p>
          
          <motion.h1
            variants={fadeInUp}
            className="mb-6 max-w-4xl text-6xl font-bold leading-tight text-white md:text-7xl lg:text-8xl" 
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            THE FINEST
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="block text-[#c9a961]"
            >
              PROPERTIES
            </motion.span>
            IN HYDERABAD
          </motion.h1>
          
          <motion.p
            variants={fadeInUp}
            className="mb-12 max-w-2xl text-base text-gray-300 leading-relaxed" 
            style={{ fontFamily: "var(--font-lora)" }}
          >
            The gamut of preferred properties. Premium residential and commercial spaces curated for distinguished clientele.
          </motion.p>
          
          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <motion.div whileHover={buttonHover} whileTap={{ scale: 0.98 }}>
              <Link
                href="/properties"
                className="block border border-[#c9a961] bg-[#c9a961] px-10 py-4 text-xs font-medium tracking-widest text-black transition-all duration-300 hover:bg-transparent hover:text-[#c9a961]"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                EXPLORE COLLECTION
              </Link>
            </motion.div>
            <motion.a
              href={`tel:${CONTACT.phone}`}
              whileHover={buttonHover}
              whileTap={{ scale: 0.98 }}
              className="border border-white px-10 py-4 text-xs font-medium tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black"
              style={{ fontFamily: "var(--font-lora)" }}
            >
              SCHEDULE VIEWING
            </motion.a>
          </motion.div>
          
          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 1, duration: 0.6 },
              y: { delay: 1.5, duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute bottom-12 flex flex-col items-center"
          >
            <span className="mb-2 text-xs text-gray-400 tracking-widest">SCROLL</span>
            <div className="h-12 w-px bg-gradient-to-b from-[#c9a961] to-transparent"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="bg-black py-24"
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <motion.div
              variants={fadeIn}
              className="mb-8 flex justify-center"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: easeOutQuart }}
                className="h-px bg-gradient-to-r from-transparent via-[#c9a961] to-transparent"
              />
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="mb-6 text-xs tracking-[0.3em] text-[#c9a961] uppercase" 
              style={{ fontFamily: "var(--font-lora)" }}
            >
              Excellence in Real Estate
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="mb-8 text-4xl font-bold text-white md:text-5xl" 
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Where Luxury
              <span className="block text-[#c9a961]">Meets Legacy</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mx-auto max-w-3xl text-base leading-relaxed text-gray-400" 
              style={{ fontFamily: "var(--font-lora)" }}
            >
              Your trusted real estate consultant in Hyderabad. With years of experience in the property market, 
              we specialize in helping discerning clients find their perfect home or investment opportunity. From luxury apartments 
              to premium plots, we offer personalized service and expert guidance throughout your property journey.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Featured Properties */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="bg-[#0a0a0a] py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <motion.div
              variants={fadeIn}
              className="mb-8 flex justify-center"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-px bg-gradient-to-r from-transparent via-[#c9a961] to-transparent"
              />
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="mb-6 text-xs tracking-[0.3em] text-[#c9a961] uppercase" 
              style={{ fontFamily: "var(--font-lora)" }}
            >
              Curated Selection
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="mb-4 text-4xl font-bold text-white md:text-5xl" 
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Featured <span className="text-[#c9a961]">Properties</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-base text-gray-400" 
              style={{ fontFamily: "var(--font-lora)" }}
            >
              Handpicked premium properties for discerning clientele
            </motion.p>
          </div>
          <motion.div
            variants={cardStagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-16 text-center"
          >
            <motion.div whileHover={buttonHover} whileTap={{ scale: 0.98 }}>
              <Link
                href="/properties"
                className="inline-block border border-[#c9a961] px-10 py-4 text-xs font-medium tracking-widest text-[#c9a961] transition-all duration-300 hover:bg-[#c9a961] hover:text-black"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                VIEW COMPLETE COLLECTION
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Me */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="bg-black py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <motion.div
              variants={fadeIn}
              className="mb-8 flex justify-center"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-px bg-gradient-to-r from-transparent via-[#c9a961] to-transparent"
              />
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="mb-6 text-xs tracking-[0.3em] text-[#c9a961] uppercase" 
              style={{ fontFamily: "var(--font-lora)" }}
            >
              Our Advantages
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold text-white md:text-5xl" 
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Why Choose <span className="text-[#c9a961]">Prop Kingdom?</span>
            </motion.h2>
          </div>
          <motion.div
            variants={cardStagger}
            className="grid gap-8 md:grid-cols-3"
          >
            <motion.div variants={fadeInUp} className="border border-[#c9a961]/20 bg-[#0a0a0a] p-8 text-center transition-all hover:border-[#c9a961]">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center border border-[#c9a961]">
                  <svg className="h-8 w-8 text-[#c9a961]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 text-sm font-semibold tracking-widest text-[#c9a961] uppercase" style={{ fontFamily: "var(--font-playfair)" }}>
                Expert Guidance
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed" style={{ fontFamily: "var(--font-lora)" }}>
                Years of experience in Hyderabad real estate market, providing insights and recommendations tailored to your needs.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="border border-[#c9a961]/20 bg-[#0a0a0a] p-8 text-center transition-all hover:border-[#c9a961]">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center border border-[#c9a961]">
                  <svg className="h-8 w-8 text-[#c9a961]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 text-sm font-semibold tracking-widest text-[#c9a961] uppercase" style={{ fontFamily: "var(--font-playfair)" }}>
                Verified Listings
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed" style={{ fontFamily: "var(--font-lora)" }}>
                All properties are personally verified and thoroughly vetted to ensure transparency and authenticity.
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="border border-[#c9a961]/20 bg-[#0a0a0a] p-8 text-center transition-all hover:border-[#c9a961]">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center border border-[#c9a961]">
                  <svg className="h-8 w-8 text-[#c9a961]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 text-sm font-semibold tracking-widest text-[#c9a961] uppercase" style={{ fontFamily: "var(--font-playfair)" }}>
                24/7 Support
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed" style={{ fontFamily: "var(--font-lora)" }}>
                Always available to answer your questions and assist with site visits, documentation, and negotiations.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="bg-[#0a0a0a] py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <motion.div
              variants={fadeIn}
              className="mb-8 flex justify-center"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="h-px bg-gradient-to-r from-transparent via-[#c9a961] to-transparent"
              />
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="mb-6 text-xs tracking-[0.3em] text-[#c9a961] uppercase" 
              style={{ fontFamily: "var(--font-lora)" }}
            >
              Client Testimonials
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl font-bold text-white md:text-5xl" 
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              What Our <span className="text-[#c9a961]">Clients Say</span>
            </motion.h2>
          </div>
          <motion.div
            variants={cardStagger}
            className="grid gap-8 md:grid-cols-3"
          >
            <motion.div variants={fadeInUp} className="border border-[#c9a961]/20 bg-black p-8">
              <div className="mb-4 flex text-[#c9a961]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 text-sm text-gray-400 leading-relaxed" style={{ fontFamily: "var(--font-lora)" }}>
                "Excellent service! Found my dream apartment within my budget. The entire process was smooth and transparent."
              </p>
              <p className="text-sm font-semibold tracking-wider text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                — Rajesh Kumar
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="border border-[#c9a961]/20 bg-black p-8">
              <div className="mb-4 flex text-[#c9a961]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 text-sm text-gray-400 leading-relaxed" style={{ fontFamily: "var(--font-lora)" }}>
                "Professional and reliable. Highly recommend for anyone looking for property in Hyderabad!"
              </p>
              <p className="text-sm font-semibold tracking-wider text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                — Priya Sharma
              </p>
            </motion.div>
            <motion.div variants={fadeInUp} className="border border-[#c9a961]/20 bg-black p-8">
              <div className="mb-4 flex text-[#c9a961]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mb-6 text-sm text-gray-400 leading-relaxed" style={{ fontFamily: "var(--font-lora)" }}>
                "Great experience! They helped us find the perfect villa. Very patient and understanding of our needs."
              </p>
              <p className="text-sm font-semibold tracking-wider text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                — Anil Reddy
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Closing CTA */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="bg-gradient-to-b from-black via-[#0a0a0a] to-black py-24"
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            variants={fadeIn}
            className="mb-8 flex justify-center"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-px bg-gradient-to-r from-transparent via-[#c9a961] to-transparent"
            />
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mb-6 text-4xl font-bold text-white md:text-5xl" 
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready to Find Your<br /><span className="text-[#c9a961]">Dream Property?</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mb-12 text-base text-gray-400" 
            style={{ fontFamily: "var(--font-lora)" }}
          >
            Let's discuss your requirements and find the perfect property for you.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href={`tel:${CONTACT.phone}`}
              whileHover={buttonHover}
              whileTap={{ scale: 0.98 }}
              className="border border-[#c9a961] bg-[#c9a961] px-10 py-4 text-xs font-medium tracking-widest text-black transition-all duration-300 hover:bg-transparent hover:text-[#c9a961]"
              style={{ fontFamily: "var(--font-lora)" }}
            >
              CALL NOW: {CONTACT.phone}
            </motion.a>
            <motion.a
              href={`https://wa.me/91${CONTACT.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={buttonHover}
              whileTap={{ scale: 0.98 }}
              className="border border-white px-10 py-4 text-xs font-medium tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black"
              style={{ fontFamily: "var(--font-lora)" }}
            >
              WHATSAPP US
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
