import React from 'react'
import { Ship, FileCheck, Truck, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export const ServicePillars: React.FC = () => {
  const pillars = [
    {
      icon: Ship,
      title: 'International Freight',
      desc: 'Optimized ocean & air transit routes across global lanes, securing competitive slot allocations and reliable schedule frequencies.',
      features: ['Full Container Load (FCL)', 'Less than Container Load (LCL)', 'Charter & Priority Air Cargo'],
    },
    {
      icon: FileCheck,
      title: 'Customs Brokerage (PPJK)',
      desc: 'Expert handling of import/export customs clearance, tax calculations, tariff classification, and Indonesian regulatory permits.',
      features: ['Direct EDI port submission', 'Pre-clearance documentation audit', 'Bonded zone & facility handling'],
    },
    {
      icon: Truck,
      title: 'Land Transportation',
      desc: 'Comprehensive road and rail logistics connecting maritime ports and airports directly to inland factories and warehouses.',
      features: ['Trailer & container haulage', 'Inter-island trucking network', 'GPS satellite monitored fleet'],
    },
  ]

  return (
    <section className="py-20 bg-[#060a24] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#e62040]">
            Core Foundation
          </span>
          <h3 className="text-3xl font-extrabold text-white mt-1">
            Three Operational Pillars
          </h3>
          <p className="text-slate-400 text-sm mt-2">
            The foundation of our integrated freight forwarding capability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#0a1033] border border-white/10 hover:border-[#c8102e]/50 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#c8102e]/10 border border-[#c8102e]/30 flex items-center justify-center text-[#e62040] mb-6 group-hover:bg-[#c8102e] group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-rose-200 transition-colors">
                    {p.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                    {p.desc}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {p.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/services"
                  className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-[#e62040] group-hover:text-white transition-colors"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
