import React from 'react'
import { BadgePercent, ShieldCheck, HeartHandshake } from 'lucide-react'

export const WhyPartnerWithUs: React.FC = () => {
  const points = [
    {
      icon: BadgePercent,
      title: 'Competitive & Transparent Rates',
      desc: 'Direct volume carrier agreements allow us to pass on significant freight savings without hidden demurrage or administrative surcharges.',
    },
    {
      icon: ShieldCheck,
      title: 'Expert Customs Brokerage (PPJK)',
      desc: 'Our in-house certified customs brokers minimize port red-line dwell times through pre-clearance audits and accurate HS classification.',
    },
    {
      icon: HeartHandshake,
      title: 'Dedicated Account Management',
      desc: 'Direct access to senior freight coordinators who monitor your cargo milestones, providing real-time proactive status reports.',
    },
  ]

  return (
    <section className="py-20 bg-[#f4f7fc] border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#e1e7f1] shadow-[0_8px_30px_rgba(15,31,61,0.06)]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#c8102e] bg-[#fef2f2] px-3 py-1 rounded-full border border-[#fecaca]">
              Value Proposition
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0f1f3d] mt-3">
              Why Global Shippers Partner With Us
            </h3>
            <p className="text-[#64748b] text-sm mt-2 font-normal">
              Combining Indonesian maritime mastery with international freight standards and transparent billing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {points.map((pt, idx) => {
              const Icon = pt.icon
              return (
                <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-[#f8fafd] border border-[#edf1f7] hover:border-[#c8102e]/30 hover:bg-white transition-all shadow-sm">
                  <div className="w-14 h-14 rounded-2xl bg-[#fef2f2] border border-[#fecaca] flex items-center justify-center text-[#c8102e] mb-5 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold text-[#0f1f3d] mb-2">
                    {pt.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
