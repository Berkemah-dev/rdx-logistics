import React from 'react'
import { ShieldCheck, Award, CheckCircle2, Building2 } from 'lucide-react'
import { SectionTag } from '../common/SectionTag'

export const CompanyStory: React.FC = () => {
  const highlights = [
    'Fully Licensed Custom Brokerage (PPJK No. Registered in Indonesia)',
    'Direct Electronic Data Interchange (EDI) with Indonesian Customs & Excise',
    'Certified cargo handling protocols across major international ocean carriers',
    'Comprehensive multimodal transit liability & marine cargo insurance options',
  ]

  return (
    <section className="py-20 bg-white border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <SectionTag icon={Building2} variant="red">
              About RDX Logistics
            </SectionTag>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1f3d] tracking-tight leading-tight">
              Global Freight Solutions Built on{' '}
              <span className="text-[#c8102e]">
                Precision & Reliability
              </span>
            </h2>

            <p className="text-[#334155] text-base leading-relaxed">
              Founded on the bedrock of efficiency, compliance, and transparent communication,{' '}
              <strong className="text-[#0f1f3d]">PT. Radix International Logistics (RDX Logistics)</strong>{' '}
              has developed into one of Indonesia’s premier international freight forwarders and customs brokerages.
            </p>

            <p className="text-[#64748b] text-sm leading-relaxed">
              We specialize in navigating the nuances of Indonesian maritime, air, and border regulations. Through our integrated digital systems, certified customs specialists, and premier carrier allocations, we guarantee smooth transit for businesses of all scales—from growing export champions to multinational conglomerates.
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#fef2f2] text-[#c8102e] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs sm:text-sm text-[#334155] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-[#f8fafd] border border-[#e1e7f1] shadow-[0_10px_30px_rgba(15,31,61,0.06)] relative">
              <div className="flex items-center justify-between pb-6 border-b border-[#edf1f7]">
                <span className="text-xs font-mono font-bold text-[#c8102e] uppercase tracking-wider">
                  Operational Standard
                </span>
                <ShieldCheck className="w-6 h-6 text-[#c8102e]" />
              </div>

              <div className="space-y-5 py-6">
                <div>
                  <span className="text-xs text-[#8a99ae] uppercase tracking-wider font-semibold">
                    Legal Identity
                  </span>
                  <h4 className="text-lg font-bold text-[#0f1f3d] mt-1">
                    PT. Radix International Logistics
                  </h4>
                  <p className="text-xs text-[#64748b] mt-1 leading-relaxed">
                    Incorporated under Indonesian commercial law as an international multimodal freight forwarder.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#e1e7f1] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#64748b]">Customs Clearance License:</span>
                    <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">PPJK Certified</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#64748b]">Primary Hub:</span>
                    <span className="font-semibold text-[#0f1f3d]">Jakarta (Tanjung Priok & CGK)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[#64748b]">Coverage:</span>
                    <span className="font-semibold text-[#0f1f3d]">120+ International Trade Corridors</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#edf1f7] flex items-center justify-between text-xs">
                <span className="text-[#64748b]">Accredited Agency Network</span>
                <span className="text-[#0f1f3d] font-bold flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-500" /> Global Alliances
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
