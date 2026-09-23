import React from 'react'
import { Target, Compass, HeartHandshake } from 'lucide-react'

export const MissionVisionValues: React.FC = () => {
  const items = [
    {
      icon: Target,
      title: 'Our Mission',
      desc: 'To empower global commerce by delivering seamless, cost-effective, and regulation-compliant multimodal freight solutions that fuel sustainable commercial growth for our partners in Indonesia and abroad.',
      accent: 'border-blue-500/30',
      tag: 'Commitment',
    },
    {
      icon: Compass,
      title: 'Our Vision',
      desc: 'To establish PT. Radix International Logistics as the premier, tech-forward logistics corridor linking Indonesian industrial and consumer economies to all major international trading hubs with flawless execution.',
      accent: 'border-[#c8102e]/40',
      tag: 'Aspiration',
    },
    {
      icon: HeartHandshake,
      title: 'Our Values',
      desc: 'Radical transparency, zero hidden fees, unwavering regulatory integrity, and uncompromising dedication to cargo safety. We treat every client consignment as our highest corporate priority.',
      accent: 'border-emerald-500/30',
      tag: 'Core Ethos',
    },
  ]

  return (
    <section className="py-20 bg-[#060a24] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#e62040]">
            Corporate Purpose
          </span>
          <h3 className="text-3xl font-extrabold text-white mt-1">
            Mission, Vision & Core Values
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((it, idx) => {
            const Icon = it.icon
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#090f30] border border-white/10 hover:border-white/20 transition-all duration-300 shadow-xl relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#e62040]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 bg-white/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {it.tag}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-3">
                  {it.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                  {it.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
