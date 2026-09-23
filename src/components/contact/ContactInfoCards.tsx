import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

export const ContactInfoCards: React.FC = () => {
  const cards = [
    {
      icon: MapPin,
      title: 'Visit Headquarters',
      subtitle: 'PT. RADIX INTERNATIONAL LOGISTICS',
      desc: 'JL. TEH NO. 3C, 3RD FLOOR\nJAKARTA BARAT, INDONESIA',
      actionText: 'View on Google Maps',
      actionHref: 'https://maps.google.com/?q=Jakarta+Barat',
    },
    {
      icon: Phone,
      title: 'Call Direct Desk',
      subtitle: '021 - 38873060',
      desc: 'Monday — Friday: 09:00 — 18:00 WIB\nEmergency AOG & Priority support available.',
      actionText: 'Call Phone Number',
      actionHref: 'tel:02138873060',
    },
    {
      icon: Mail,
      title: 'Email Inquiries',
      subtitle: 'quote@rdx-interlog.com',
      desc: 'Official RFQ and commercial correspondence.\nStandard SLA reply within 24 business hours.',
      actionText: 'Send Email Directly',
      actionHref: 'mailto:quote@rdx-interlog.com',
    },
  ]

  return (
    <section className="py-16 bg-white border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, idx) => {
            const Icon = c.icon
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#f8fafd] border border-[#e1e7f1] hover:border-[#c8102e]/40 transition-all duration-300 shadow-[0_4px_16px_rgba(15,31,61,0.05)] hover:shadow-[0_16px_36px_rgba(15,31,61,0.09)] flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#fef2f2] border border-[#fecaca] flex items-center justify-center text-[#c8102e] mb-6 group-hover:bg-[#c8102e] group-hover:text-white transition-all shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0f1f3d] mb-1">
                    {c.title}
                  </h3>
                  <span className="text-sm font-semibold text-[#c8102e] block mb-3">
                    {c.subtitle}
                  </span>
                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed whitespace-pre-line mb-6">
                    {c.desc}
                  </p>
                </div>
                <a
                  href={c.actionHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#0f1f3d] group-hover:text-[#c8102e] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{c.actionText}</span>
                  <span>→</span>
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
