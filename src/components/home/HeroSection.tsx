import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Globe, Anchor } from 'lucide-react'

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[72vh] lg:min-h-[78vh] flex items-center justify-start overflow-hidden">
      {/* Container Ship Background with Clean Professional Contrast */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/cargo-hero.jpg"
          alt="RDX Logistics Global Container Ship at Sea"
          className="w-full h-full object-cover object-center lg:object-[center_35%] filter brightness-[0.88] contrast-[1.05]"
        />
        {/* Deep Corporate Navy gradient overlay ensuring high contrast for typography */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1428]/95 via-[#0f1f3d]/80 to-transparent lg:w-3/5" />
        {/* Soft bottom blend towards RDX corporate navy #0a1428 */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a1428] via-transparent to-[#0a1428]/40" />
      </div>

      {/* Main Content: Clean, Fresh, Elegant & Well-Proportioned */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
        <div className="max-w-2xl space-y-5">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse" />
            <span>International Freight Forwarders & Customs PPJK</span>
          </div>

          {/* Headline - Fresh, Authoritative & Legible */}
          <h1 className="text-3xl sm:text-4xl lg:text-[50px] font-extrabold text-white tracking-tight leading-[1.16]">
            Deliver Your Cargo{' '}
            <span className="text-[#f87171]">Safely</span>
            <br />
            Across the World.
          </h1>

          {/* Narrative aligned with B2B Enterprise & Job-Finance Capabilities */}
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal max-w-xl">
            Your premier gateway connecting Indonesia to global trade lanes. End-to-end sea, air, and land freight forwarding with transparent job costing, licensed PPJK customs clearance, and real-time shipment visibility.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-lg bg-[#c8102e] hover:bg-[#a30b23] text-white text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-[#c8102e]/30 hover:shadow-[#c8102e]/40 transition-all flex items-center gap-2 group"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="px-6 py-3 rounded-lg bg-white hover:bg-slate-100 text-[#0f1f3d] text-xs sm:text-sm font-bold tracking-wide shadow-md transition-all"
            >
              Explore Services
            </Link>
          </div>

          {/* Minimal Trust Indicator Row */}
          <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-white/90">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#f87171]" />
              <span className="font-medium">Licensed PPJK Broker</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-[#f87171]" />
              <span className="font-medium">120+ Global Ports</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Anchor className="w-4 h-4 text-[#f87171]" />
              <span className="font-medium">EDI Port Direct Manifest</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
