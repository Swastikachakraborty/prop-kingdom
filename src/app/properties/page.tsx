"use client";

import { useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

export default function PropertiesPage() {
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    priceRange: "",
    bedrooms: "",
  });

  const filteredProperties = properties.filter((property) => {
    if (filters.location && !property.location.toLowerCase().includes(filters.location.toLowerCase())) {
      return false;
    }
    if (filters.type && property.type !== filters.type) {
      return false;
    }
    if (filters.bedrooms && property.bedrooms !== parseInt(filters.bedrooms)) {
      return false;
    }
    return true;
  });

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=600&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent"></div>
            </div>
            <p className="mb-6 text-xs tracking-[0.3em] text-[#c9a961] uppercase" style={{ fontFamily: "var(--font-lora)" }}>
              Curated Collection
            </p>
            <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl lg:text-7xl" style={{ fontFamily: "var(--font-playfair)" }}>
              OUR <span className="text-[#c9a961]">PROPERTIES</span>
            </h1>
            <p className="text-base text-gray-400" style={{ fontFamily: "var(--font-lora)" }}>
              Browse through our curated collection of premium properties
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 pb-24">

        {/* Filters */}
        <div className="mb-12 border border-[#c9a961]/20 bg-[#0a0a0a] p-8">
          <h3 className="mb-6 text-sm font-semibold tracking-widest text-[#c9a961] uppercase" style={{ fontFamily: "var(--font-playfair)" }}>
            Refine Your Search
          </h3>
          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <label className="mb-3 block text-xs font-medium tracking-wider text-gray-400 uppercase" style={{ fontFamily: "var(--font-lora)" }}>Location</label>
              <input
                type="text"
                placeholder="Enter location..."
                value={filters.location}
                onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                className="w-full border-b border-[#c9a961]/30 bg-transparent px-0 py-2 text-sm text-white placeholder-gray-600 focus:border-[#c9a961] focus:outline-none transition-colors"
                style={{ fontFamily: "var(--font-lora)" }}
              />
            </div>
            <div>
              <label className="mb-3 block text-xs font-medium tracking-wider text-gray-400 uppercase" style={{ fontFamily: "var(--font-lora)" }}>Property Type</label>
              <select
                value={filters.type}
                onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                className="w-full border-b border-[#c9a961]/30 bg-transparent px-0 py-2 text-sm text-white focus:border-[#c9a961] focus:outline-none transition-colors"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                <option value="" className="bg-black">All Types</option>
                <option value="Apartment" className="bg-black">Apartment</option>
                <option value="Villa" className="bg-black">Villa</option>
                <option value="Plot" className="bg-black">Plot</option>
                <option value="Commercial" className="bg-black">Commercial</option>
              </select>
            </div>
            <div>
              <label className="mb-3 block text-xs font-medium tracking-wider text-gray-400 uppercase" style={{ fontFamily: "var(--font-lora)" }}>Bedrooms</label>
              <select
                value={filters.bedrooms}
                onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
                className="w-full border-b border-[#c9a961]/30 bg-transparent px-0 py-2 text-sm text-white focus:border-[#c9a961] focus:outline-none transition-colors"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                <option value="" className="bg-black">Any</option>
                <option value="1" className="bg-black">1 BHK</option>
                <option value="2" className="bg-black">2 BHK</option>
                <option value="3" className="bg-black">3 BHK</option>
                <option value="4" className="bg-black">4+ BHK</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={() => setFilters({ location: "", type: "", priceRange: "", bedrooms: "" })}
                className="w-full border border-[#c9a961]/50 px-4 py-2 text-xs font-medium tracking-wider text-[#c9a961] transition-all hover:border-[#c9a961] hover:bg-[#c9a961] hover:text-black"
                style={{ fontFamily: "var(--font-lora)" }}
              >
                RESET FILTERS
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-sm text-gray-400" style={{ fontFamily: "var(--font-lora)" }}>
            Showing <span className="font-semibold text-[#c9a961]">{filteredProperties.length}</span> {filteredProperties.length === 1 ? 'property' : 'properties'}
          </p>
        </div>

        {/* Properties Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <div className="mb-6 flex justify-center">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent"></div>
            </div>
            <p className="text-base text-gray-400" style={{ fontFamily: "var(--font-lora)" }}>
              No properties found matching your criteria.<br />
              <span className="text-sm text-gray-500">Try adjusting your filters.</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
