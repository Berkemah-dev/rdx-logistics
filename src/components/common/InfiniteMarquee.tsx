import React from 'react'
import { ShieldCheck, FileCheck, Globe, Truck, Anchor, Plane, Clock, Award } from 'lucide-react'

export const InfiniteMarquee: React.FC = () => {
  const items = [
    { icon: ShieldCheck, text: 'Licensed Custom Brokerage (PPJK)' },
    { icon: Globe, text: '120+ Countries Global Network' },
    { icon: Anchor, text: 'FCL & LCL Ocean Freight' },
    { icon: Plane, text: 'Time-Critical Air Freight' },
    { icon: Truck, text: 'Cross-Island Land Transportation' },
    { icon: FileCheck, text: 'Full Customs Compliance & EDI' },
    { icon: Clock, text: 'Real-Time 24/7 Shipment Visibility' },
    { icon: Award, text: 'End-to-End Cold-Chain Handling' },
  ]

  return (
    <div className="relative w-full overflow-hidden bg-white border-y border-[#e2e8f0] py-4">
      {/* Gradient masks for smooth fade on sides */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="animate-marquee flex items-center gap-6">
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon
          return (
            <div
              key={idx}
              className="flex items-center gap-2.5 whitespace-nowrap px-4 py-2 rounded-full bg-[#f8fafd] border border-[#e1e7f1] text-[#0f1f3d] text-xs font-semibold tracking-wide shadow-sm hover:border-[#c8102e]/40 hover:bg-white transition-all cursor-default"
            >
              <div className="w-5 h-5 rounded-full bg-[#fef2f2] flex items-center justify-center text-[#c8102e]">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <span>{item.text}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
