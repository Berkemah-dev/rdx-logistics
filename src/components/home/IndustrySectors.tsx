import React from 'react'
import {
  Wrench,
  AlertTriangle,
  HeartPulse,
  Cpu,
  ThermometerSnowflake,
  Sparkles,
  Layers,
  ArrowRight,
} from 'lucide-react'
import { SectionTag } from '../common/SectionTag'
import { Link } from 'react-router-dom'

export const IndustrySectors: React.FC = () => {
  const sectors = [
    {
      title: 'Industrial & Machinery',
      desc: 'Heavy equipment, breakbulk cargo, project logistics, and oversized manufacturing machinery with specialized routing.',
      img: '/images/manu.jpg',
      icon: Wrench,
      tag: 'Heavy Cargo',
    },
    {
      title: 'Dangerous Goods (DG)',
      desc: 'Certified hazardous material logistics compliant with IMO, IATA-DGR, and Indonesian maritime safety regulations.',
      img: '/images/dg.jpg',
      icon: AlertTriangle,
      tag: 'Hazmat Certified',
    },
    {
      title: 'Medical & Healthcare',
      desc: 'GDP-compliant cold-chain pharmaceutical freight, medical devices, and temperature-logged sterile healthcare shipments.',
      img: '/images/medic.jpg',
      icon: HeartPulse,
      tag: 'Pharma Cold-Chain',
    },
    {
      title: 'Electronics & High-Tech',
      desc: 'High-value electronics, sensitive semiconductors, secure tamper-evident handling, and expedited air transport.',
      img: '/images/elec.jpg',
      icon: Cpu,
      tag: 'High-Value Security',
    },
    {
      title: 'Perishables & F&B',
      desc: 'Controlled-atmosphere reefers and rapid customs clearance for agriculture, seafood, and fresh food products.',
      img: '/images/industri.jpg',
      icon: ThermometerSnowflake,
      tag: 'Temperature Controlled',
    },
    {
      title: 'Cosmetics & Personal Care',
      desc: 'Fragile personal care goods, temperature protection, specialized packaging, and rapid retail replenishment distribution.',
      img: '/images/cosm.jpg',
      icon: Sparkles,
      tag: 'Retail & FMCG',
    },
  ]

  return (
    <section className="relative py-20 lg:py-24 bg-white border-b border-[#e2e8f0] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionTag icon={Layers} variant="red" className="mb-4">
            Customer Sectors
          </SectionTag>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1f3d] tracking-tight">
            Industry-Specific <span className="text-[#c8102e]">Logistics Solutions</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#64748b] leading-relaxed font-normal">
            End-to-end global supply chain operations engineered for the regulatory and temperature demands of industries that move the world.
          </p>
        </div>

        {/* 6 Sectors Cards Grid - Clean Fresh Card Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon
            return (
              <div
                key={idx}
                className="group relative rounded-2xl bg-white border border-[#e1e7f1] overflow-hidden shadow-[0_4px_16px_rgba(15,31,61,0.05)] hover:shadow-[0_16px_36px_rgba(15,31,61,0.1)] hover:border-[#c8102e]/30 transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
              >
                {/* Image Header with Tag */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={sec.img}
                    alt={sec.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f3d]/60 via-transparent to-black/20" />
                  <div className="absolute top-3 right-3 z-10">
                    <span className="text-[10px] font-bold text-[#0f1f3d] bg-white/95 border border-[#e2e8f0] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {sec.tag}
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex flex-col flex-1 justify-between bg-white">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#fef2f2] text-[#c8102e] border border-[#fecaca] flex items-center justify-center mb-3 group-hover:bg-[#c8102e] group-hover:text-white transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg font-bold text-[#0f1f3d] mb-2 group-hover:text-[#c8102e] transition-colors">
                      {sec.title}
                    </h3>

                    <p className="text-xs text-[#64748b] leading-relaxed line-clamp-3 mb-4">
                      {sec.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#edf1f7]">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c8102e] group-hover:text-[#0f1f3d] transition-colors"
                    >
                      <span>Inquire {sec.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
