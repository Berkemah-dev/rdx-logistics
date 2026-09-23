import React from 'react'
import { Calendar, ArrowRight, Newspaper } from 'lucide-react'
import { SectionTag } from '../common/SectionTag'

export const InsightsSection: React.FC = () => {
  const articles = [
    {
      title: 'Global Container Rates Stabilize After Volatility Spike',
      category: 'Ocean Freight',
      date: 'April 26, 2026',
      img: '/images/news1.jpg',
      desc: 'Freight rates demonstrate early signs of stabilization following peak season fluctuations across major trans-Pacific and Asia-Europe trade lanes.',
    },
    {
      title: 'Port Congestion Eases Across Major Asian Hubs',
      category: 'Port Operations',
      date: 'April 20, 2026',
      img: '/images/news2.jpeg',
      desc: 'Improved vessel scheduling, automated terminal handling, and 24/7 customs processing reduce waiting delays in key Asian maritime hubs.',
    },
    {
      title: 'Shippers Shift Strategy Amid Global Trade Rebalancing',
      category: 'Supply Chain',
      date: 'April 14, 2026',
      img: '/images/news3.jpg',
      desc: 'Multinational enterprises diversify sourcing networks, utilizing multimodal sea-air combinations to navigate evolving trade policies and routes.',
    },
  ]

  return (
    <section className="relative py-20 lg:py-24 bg-white border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <SectionTag icon={Newspaper} variant="red" className="mb-4">
              Industry Intelligence
            </SectionTag>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1f3d] tracking-tight">
              Global <span className="text-[#c8102e]">Logistics Updates</span>
            </h2>
            <p className="mt-3 text-base text-[#64748b] max-w-xl font-normal">
              Market developments, regulatory updates, and supply chain insights curated by RDX trade specialists.
            </p>
          </div>
          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0f1f3d] bg-[#f4f7fc] px-4 py-2 rounded-full border border-[#e2e8f0]">
              Updated Weekly by RDX Research
            </span>
          </div>
        </div>

        {/* 3 Articles Grid - Clean Fresh Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((item, idx) => (
            <article
              key={idx}
              className="group rounded-2xl bg-white border border-[#e1e7f1] overflow-hidden hover:border-[#c8102e]/40 transition-all duration-300 hover:-translate-y-1.5 shadow-[0_4px_16px_rgba(15,31,61,0.05)] hover:shadow-[0_16px_36px_rgba(15,31,61,0.09)] flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-[#c8102e] text-white shadow-md">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-[#8a99ae] mb-3 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#c8102e]" />
                    <span>{item.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0f1f3d] mb-2.5 leading-snug group-hover:text-[#c8102e] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Read More Footer */}
              <div className="px-6 pb-6 pt-3 border-t border-[#edf1f7] flex items-center justify-between text-xs font-bold text-[#c8102e] group-hover:text-[#0f1f3d] transition-colors">
                <span>Read Full Briefing</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
