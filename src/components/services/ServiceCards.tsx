import React from 'react'
import { Ship, Plane, FileCheck, Warehouse, Network, Package2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SectionTag } from '../common/SectionTag'

export const ServiceCards: React.FC = () => {
  const services = [
    {
      icon: Ship,
      title: 'Ocean Freight (FCL & LCL)',
      desc: 'Comprehensive container shipping solutions supported by direct alliances with premier global shipping lines. Reliable slot allocations and weekly sailings.',
      specs: ['Full Container Load (20ft, 40ft, 40HC)', 'Less than Container Load consolidation', 'Reefer container temperature control', 'Breakbulk & special equipment'],
    },
    {
      icon: Plane,
      title: 'Time-Critical Air Freight',
      desc: 'Expedited air cargo services for high-value and urgent consignments. Direct commercial flights and chartered operations ensuring speed without compromise.',
      specs: ['Airport-to-Airport & Door-to-Door', 'Priority Express & Standard Freight', 'Dangerous Goods & Pharma air handling', 'Flight tracking & milestone alerts'],
    },
    {
      icon: FileCheck,
      title: 'Certified Customs Brokerage (PPJK)',
      desc: 'Expert Indonesian customs clearance. Direct electronic EDI connection with Directorate General of Customs and Excise for rapid, compliant green-line release.',
      specs: ['Accurate HS-code tariff determination', 'Import & Export permits & documentation', 'Bonded zone (Kawasan Berikat) processing', 'Customs tax calculation & pre-audit'],
    },
    {
      icon: Warehouse,
      title: 'Warehousing & Distribution',
      desc: 'Strategically positioned transit and storage facilities equipped with digital inventory management and cross-docking capabilities.',
      specs: ['Short & long-term bonded storage', 'Palletizing, sorting & shrink-wrapping', 'Order fulfillment & inventory tracking', 'First-Mile & Last-Mile delivery'],
    },
    {
      icon: Network,
      title: 'Integrated Supply Chain Solutions',
      desc: 'End-to-end supply chain orchestration reducing total logistics cost and minimizing transit cycle times with single-source accountability.',
      specs: ['Multimodal transport coordination', 'Purchase order (PO) management', 'Vendor milestone tracking', 'Digital KPI reporting & analytics'],
    },
    {
      icon: Package2,
      title: 'Project Cargo & Heavy Lift',
      desc: 'Specialized engineering logistics for oversized, heavy machinery, power plant turbines, and industrial infrastructure projects across the archipelago.',
      specs: ['Route feasibility & bridge surveys', 'Heavy-haul trailers & crane rigging', 'Barge & landing craft (LCT) chartering', 'On-site technical supervision'],
    },
  ]

  return (
    <section className="py-20 lg:py-24 bg-[#f4f7fc] border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionTag icon={Ship} variant="red" className="mb-4">
            Service Portfolio
          </SectionTag>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1f3d] tracking-tight">
            Integrated Logistics <span className="text-[#c8102e]">Solutions</span>
          </h2>
          <p className="mt-4 text-base text-[#64748b] leading-relaxed font-normal">
            Delivering absolute reliability, regulatory compliance, and cargo protection across every phase of your global supply chain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white border border-[#e1e7f1] hover:border-[#c8102e]/40 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_4px_18px_rgba(15,31,61,0.05)] hover:shadow-[0_16px_36px_rgba(15,31,61,0.09)] flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#fef2f2] border border-[#fecaca] flex items-center justify-center text-[#c8102e] mb-6 group-hover:bg-[#c8102e] group-hover:text-white transition-all shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-[#0f1f3d] mb-3 group-hover:text-[#c8102e] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed mb-6">
                    {srv.desc}
                  </p>

                  <div className="space-y-2 border-t border-[#edf1f7] pt-4 mb-6">
                    {srv.specs.map((item, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-[#334155]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="pt-4 border-t border-[#edf1f7] flex items-center justify-between text-xs font-bold text-[#c8102e] group-hover:text-[#0f1f3d] transition-colors"
                >
                  <span>Minta Penawaran Layanan</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
