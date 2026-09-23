import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react'

export const CTABanner: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-24 bg-[#f4f7fc] border-b border-[#e2e8f0] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Prestige Enterprise Banner - Aligned with Job-Finance Heading Theme */}
        <div className="relative overflow-hidden p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-r from-[#0f1f3d] via-[#1a2d52] to-[#c8102e] shadow-[0_16px_40px_rgba(15,31,61,0.15)] flex flex-col lg:flex-row items-center justify-between gap-8 isolate">
          {/* Subtle Geometric Background Rings */}
          <div className="absolute -right-20 -top-28 w-96 h-96 rounded-full border border-white/10 pointer-events-none -z-10 shadow-[0_0_0_30px_rgba(255,255,255,0.02),0_0_0_60px_rgba(255,255,255,0.01)]" />

          <div className="max-w-2xl text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-[#fecaca]" />
              <span>Certified Indonesian Freight Forwarder (PPJK)</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to accelerate your cross-border trade?
            </h2>
            <p className="mt-3 text-slate-200 text-sm sm:text-base leading-relaxed">
              Connect with our licensed customs brokers and freight directors today. Receive customized rates, compliant routing plans, and transparent milestone tracking.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto shrink-0 z-10">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-[#fff7f7] text-[#0f1f3d] hover:text-[#c8102e] text-sm font-bold tracking-wide shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <span>Request B2B Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:02138873060"
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white/15 hover:bg-white/25 border border-white/30 text-white text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <PhoneCall className="w-4 h-4 text-[#fecaca]" />
              <span>(021) 3887-3060</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
