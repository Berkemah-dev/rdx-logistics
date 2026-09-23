import React from 'react'
import { Globe, FileCheck, Shield, Radio, Truck, PackageCheck, ArrowUpRight } from 'lucide-react'
import { SectionTag } from '../common/SectionTag'
import { Link } from 'react-router-dom'

export const CapabilitiesGrid: React.FC = () => {
  const capabilities = [
    {
      icon: Globe,
      title: 'Strengthening Global Trade',
      desc: 'Strategically connecting Indonesian manufacturing and commodities with major global consumer markets via optimized sea and air corridors.',
      tag: 'Global Network',
    },
    {
      icon: FileCheck,
      title: 'Streamlined Customs & PPJK',
      desc: 'Accelerated customs handling with licensed in-house PPJK brokers, automated EDI systems, and expert HS-code classification minimizing port dwell time.',
      tag: 'PPJK Licensed',
    },
    {
      icon: Shield,
      title: 'Transparent Cost & Billing',
      desc: 'Clear job costing with complete separation of modal provision and reimbursable temporary expenses, ensuring zero hidden fees for your procurement.',
      tag: 'Zero Hidden Cost',
    },
    {
      icon: Radio,
      title: 'Live ETD/ETA Tracking',
      desc: 'Proactive milestone updates from vessel departure to terminal arrival. Real-time satellite status keeping supply chain managers informed 24/7.',
      tag: 'Real-Time Visibility',
    },
    {
      icon: Truck,
      title: 'Multimodal Freight Fleet',
      desc: 'Comprehensive door-to-door coordination combining ocean container liners, scheduled air freight, and cross-island bonded trucking.',
      tag: 'Multimodal',
    },
    {
      icon: PackageCheck,
      title: 'End-to-End Compliance Control',
      desc: 'Full supply chain custody from origin factory loading to destination delivery, managing all shipping documents and border permits seamlessly.',
      tag: 'Turnkey Solution',
    },
  ]

  return (
    <section className="relative py-20 lg:py-24 bg-[#f4f7fc] border-b border-[#e2e8f0] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionTag icon={Globe} variant="navy" className="mb-4">
            Global Capabilities
          </SectionTag>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1f3d] tracking-tight">
            Powering <span className="text-[#c8102e]">Global Trade</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748b] font-normal leading-relaxed">
            Integrated logistics infrastructure built for speed, transparent job costing, and total supply chain precision.
          </p>
        </div>

        {/* 6 Capabilities Cards Grid - Clean White Corporate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="group relative p-7 rounded-2xl bg-white border border-[#e1e7f1] hover:border-[#c8102e]/40 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_4px_16px_rgba(15,31,61,0.05)] hover:shadow-[0_14px_35px_rgba(15,31,61,0.1)] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#fef2f2] text-[#c8102e] border border-[#fecaca] flex items-center justify-center group-hover:bg-[#c8102e] group-hover:text-white transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#405474] bg-[#f1f5fb] px-2.5 py-1 rounded-md border border-[#e2e8f0] uppercase tracking-wider">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0f1f3d] mb-2.5 group-hover:text-[#c8102e] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#64748b] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#edf1f7] flex items-center justify-between text-xs text-[#64748b] group-hover:text-[#c8102e] font-medium transition-colors">
                  <span className="font-semibold">Explore Capability</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Link inside Section */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#c8102e] hover:text-[#0f1f3d] transition-colors group"
          >
            <span>Lihat semua layanan freight forwarding & PPJK kepabeanan</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
