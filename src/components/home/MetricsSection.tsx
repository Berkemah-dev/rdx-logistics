import React from 'react'
import { Users, Ship, Globe2 } from 'lucide-react'
import { AnimatedCounter } from '../common/AnimatedCounter'

export const MetricsSection: React.FC = () => {
  const metrics = [
    {
      num: 2000,
      suffix: '+',
      title: 'Global Clients',
      desc: 'Trusted by multinational manufacturers, export-import enterprises, and trading partners worldwide.',
      icon: Users,
      step: '01',
    },
    {
      num: 4000,
      suffix: '+',
      title: 'Cargo Shipments',
      desc: 'Documented successful cargo movements across ocean container, air charter, and cross-island road networks.',
      icon: Ship,
      step: '02',
    },
    {
      num: 120,
      suffix: '+',
      title: 'Countries Covered',
      desc: 'Extensive global freight agency agreements guaranteeing reliable destination customs clearance worldwide.',
      icon: Globe2,
      step: '03',
    },
  ]

  return (
    <section className="relative py-20 bg-[#f4f7fc] border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((m, idx) => {
            const Icon = m.icon
            return (
              <div
                key={idx}
                className="relative p-8 rounded-2xl bg-white border border-[#e1e7f1] hover:border-[#c8102e]/40 transition-all duration-300 shadow-[0_4px_18px_rgba(15,31,61,0.05)] hover:shadow-[0_16px_36px_rgba(15,31,61,0.09)] hover:-translate-y-1.5 group"
              >
                {/* Top index & icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-[#8a99ae] tracking-wider">
                    METRIC // {m.step}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-[#fef2f2] text-[#c8102e] border border-[#fecaca] flex items-center justify-center group-hover:bg-[#c8102e] group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Animated Number */}
                <div className="text-5xl sm:text-6xl font-extrabold text-[#0f1f3d] tracking-tight mb-3">
                  <AnimatedCounter value={m.num} suffix={m.suffix} />
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold text-[#0f1f3d] mb-2 group-hover:text-[#c8102e] transition-colors">
                  {m.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed font-normal">
                  {m.desc}
                </p>

                {/* Subtle red accent line at bottom */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-transparent group-hover:bg-[#c8102e] transition-all duration-500 rounded-full" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
