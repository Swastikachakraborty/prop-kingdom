"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, cardHover, imageZoom, buttonHover } from "@/lib/animations";

export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: string;
  type: string;
  image: string;
  featured?: boolean;
  sold?: boolean;
}

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      whileHover={cardHover}
      className="group overflow-hidden border border-[#c9a961]/20 bg-black shadow-md"
    >
      <Link href={`/properties/${property.id}`}>
        <div className="relative h-64 overflow-hidden">
          <motion.div
            whileHover={imageZoom}
            className="h-full w-full"
          >
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
            />
          </motion.div>
          {/* Tags */}
          <div className="absolute top-4 left-4 flex gap-2">
            {property.featured && (
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-[#c9a961] px-3 py-1 text-xs font-semibold tracking-wider text-black uppercase"
              >
                Featured
              </motion.span>
            )}
            {property.sold && (
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-red-500 px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase"
              >
                Sold
              </motion.span>
            )}
          </div>
        </div>

        <div className="p-6 bg-black">
          {/* Title & Location */}
          <h3 className="mb-2 text-lg font-bold text-white line-clamp-1" style={{ fontFamily: "var(--font-playfair)" }}>
            {property.title}
          </h3>
          <p className="mb-4 text-sm text-gray-400 flex items-center gap-1">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {property.location}
          </p>

          {/* Price */}
          <p className="mb-4 text-2xl font-bold text-[#c9a961]" style={{ fontFamily: "var(--font-playfair)" }}>
            {property.price}
          </p>

          {/* Details */}
          <div className="flex items-center gap-4 text-sm text-gray-400 border-t border-[#c9a961]/20 pt-4">
            <div className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              {property.bedrooms} BHK
            </div>
            <div className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
              </svg>
              {property.bathrooms} Bath
            </div>
            <div className="flex items-center gap-1">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
              </svg>
              {property.area}
            </div>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={buttonHover}
            whileTap={{ scale: 0.98 }}
            className="mt-6 w-full border border-[#c9a961] py-3 text-xs font-medium tracking-widest text-[#c9a961] transition-all hover:bg-[#c9a961] hover:text-black"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            VIEW DETAILS
          </motion.button>
        </div>
      </Link>
    </motion.div>
  );
}
