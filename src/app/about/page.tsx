import { CONTACT, BRAND } from "@/lib/constants";

export default function AboutPage() {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-black via-[#0a0a0a] to-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1920&h=600&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <div className="mb-8 flex justify-center">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent"></div>
          </div>
          <p className="mb-6 text-xs tracking-[0.3em] text-[#c9a961] uppercase" style={{ fontFamily: "var(--font-lora)" }}>
            Our Story
          </p>
          <h1 className="mb-4 text-5xl font-bold text-white md:text-6xl lg:text-7xl" style={{ fontFamily: "var(--font-playfair)" }}>
            ABOUT <span className="text-[#c9a961]">US</span>
          </h1>
          <p className="text-base text-gray-400" style={{ fontFamily: "var(--font-lora)" }}>
            Your trusted real estate partner in Hyderabad
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Agent Photo Placeholder */}
            <div className="flex items-center justify-center">
              <div className="relative h-[500px] w-full max-w-md overflow-hidden border border-[#c9a961]/20">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="mb-6 flex justify-center">
                        <div className="h-32 w-32 border border-[#c9a961] flex items-center justify-center">
                          <svg className="h-20 w-20 text-[#c9a961]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-sm font-semibold tracking-wider text-[#c9a961] uppercase" style={{ fontFamily: "var(--font-playfair)" }}>
                        Your Photo Here
                      </p>
                      <p className="text-xs text-gray-500 mt-2">Professional Agent Photo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Agent Info */}
            <div className="flex flex-col justify-center">
              <div className="mb-8 h-px w-16 bg-gradient-to-r from-[#c9a961] to-transparent"></div>
              <p className="mb-4 text-xs tracking-[0.3em] text-[#c9a961] uppercase" style={{ fontFamily: "var(--font-lora)" }}>
                Excellence in Service
              </p>
              <h2 className="mb-8 text-4xl font-bold text-white md:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>
                Welcome to<br /><span className="text-[#c9a961]">{BRAND.name}</span>
              </h2>
              <p className="mb-6 text-base leading-relaxed text-gray-400" style={{ fontFamily: "var(--font-lora)" }}>
                With years of experience in the Hyderabad real estate market, we specialize in connecting discerning buyers with their dream properties. 
                Our commitment to transparency, professionalism, and personalized service has made us a trusted name in the industry.
              </p>
              <p className="mb-8 text-base leading-relaxed text-gray-400" style={{ fontFamily: "var(--font-lora)" }}>
                Whether you're looking for a luxury apartment, a spacious villa, a premium plot, or commercial space, 
                we offer expert guidance throughout your property journey. From initial consultation to final documentation, 
                we're with you every step of the way.
              </p>

              {/* RERA ID */}
              <div className="mb-8 border-l-2 border-[#c9a961] bg-[#0a0a0a] p-6">
                <p className="text-xs font-semibold tracking-widest text-[#c9a961] uppercase mb-2" style={{ fontFamily: "var(--font-playfair)" }}>
                  RERA Registration
                </p>
                <p className="text-sm text-gray-400" style={{ fontFamily: "var(--font-lora)" }}>
                  {CONTACT.reraId}
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-400">
                  <svg className="h-5 w-5 text-[#c9a961]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span className="text-sm" style={{ fontFamily: "var(--font-lora)" }}>
                    <a href={`tel:${CONTACT.phone}`} className="hover:text-[#c9a961] transition-colors">+91 {CONTACT.phone}</a>
                  </span>
                </div>
                <div className="flex items-center gap-4 text-gray-400">
                  <svg className="h-5 w-5 text-[#c9a961]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span className="text-sm" style={{ fontFamily: "var(--font-lora)" }}>
                    <a href={`mailto:${CONTACT.email}`} className="hover:text-[#c9a961] transition-colors">{CONTACT.email}</a>
                  </span>
                </div>
                <div className="flex items-start gap-4 text-gray-400">
                  <svg className="mt-1 h-5 w-5 flex-shrink-0 text-[#c9a961]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm leading-relaxed" style={{ fontFamily: "var(--font-lora)" }}>
                    {CONTACT.address.full}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="bg-[#0a0a0a] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <div className="mb-8 flex justify-center">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent"></div>
            </div>
            <p className="mb-6 text-xs tracking-[0.3em] text-[#c9a961] uppercase" style={{ fontFamily: "var(--font-lora)" }}>
              Our Reach
            </p>
            <h2 className="text-4xl font-bold text-white md:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Areas We <span className="text-[#c9a961]">Serve</span>
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {["Narsingi", "Gachibowli", "HITEC City", "Financial District", "Kokapet", "Manikonda", "Kondapur", "Madhapur"].map((area) => (
              <div key={area} className="border border-[#c9a961]/20 bg-black p-6 text-center transition-all hover:border-[#c9a961]">
                <p className="text-sm font-semibold tracking-wider text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                  {area}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <div className="mb-8 flex justify-center">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent"></div>
            </div>
            <p className="mb-6 text-xs tracking-[0.3em] text-[#c9a961] uppercase" style={{ fontFamily: "var(--font-lora)" }}>
              Our Advantages
            </p>
            <h2 className="text-4xl font-bold text-white md:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>
              Why Work <span className="text-[#c9a961]">With Us?</span>
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="border border-[#c9a961]/20 bg-[#0a0a0a] p-8 text-center transition-all hover:border-[#c9a961]">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center border border-[#c9a961]">
                  <svg className="h-8 w-8 text-[#c9a961]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 text-sm font-semibold tracking-widest text-[#c9a961] uppercase" style={{ fontFamily: "var(--font-playfair)" }}>
                Local Expertise
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed" style={{ fontFamily: "var(--font-lora)" }}>
                Deep knowledge of Hyderabad's real estate market and emerging localities
              </p>
            </div>

            <div className="border border-[#c9a961]/20 bg-[#0a0a0a] p-8 text-center transition-all hover:border-[#c9a961]">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center border border-[#c9a961]">
                  <svg className="h-8 w-8 text-[#c9a961]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 text-sm font-semibold tracking-widest text-[#c9a961] uppercase" style={{ fontFamily: "var(--font-playfair)" }}>
                Verified Properties
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed" style={{ fontFamily: "var(--font-lora)" }}>
                All listings personally inspected and verified for authenticity
              </p>
            </div>

            <div className="border border-[#c9a961]/20 bg-[#0a0a0a] p-8 text-center transition-all hover:border-[#c9a961]">
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center border border-[#c9a961]">
                  <svg className="h-8 w-8 text-[#c9a961]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z"/>
                  </svg>
                </div>
              </div>
              <h3 className="mb-4 text-sm font-semibold tracking-widest text-[#c9a961] uppercase" style={{ fontFamily: "var(--font-playfair)" }}>
                End-to-End Support
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed" style={{ fontFamily: "var(--font-lora)" }}>
                Complete assistance from property search to registration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-b from-black via-[#0a0a0a] to-black py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="mb-8 flex justify-center">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#c9a961] to-transparent"></div>
          </div>
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl" style={{ fontFamily: "var(--font-playfair)" }}>
            Let's Find Your<br /><span className="text-[#c9a961]">Perfect Property</span>
          </h2>
          <p className="mb-12 text-base text-gray-400" style={{ fontFamily: "var(--font-lora)" }}>
            Get in touch today for a personalized consultation
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${CONTACT.phone}`}
              className="border border-[#c9a961] bg-[#c9a961] px-10 py-4 text-xs font-medium tracking-widest text-black transition-all duration-300 hover:bg-transparent hover:text-[#c9a961]"
              style={{ fontFamily: "var(--font-lora)" }}
            >
              CALL NOW
            </a>
            <a
              href="/contact"
              className="border border-white px-10 py-4 text-xs font-medium tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-black"
              style={{ fontFamily: "var(--font-lora)" }}
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
