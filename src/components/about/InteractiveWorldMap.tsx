import React, { useState } from 'react'
import { Globe, Radio, Ship, Plane } from 'lucide-react'
import { SectionTag } from '../common/SectionTag'

export const InteractiveWorldMap: React.FC = () => {
  const [activeHub, setActiveHub] = useState<string>('jakarta')

  const hubs = [
    {
      id: 'jakarta',
      name: 'Jakarta (HQ Hub)',
      country: 'Indonesia',
      status: 'Primary Hub — High Volume',
      traffic: 'Very High',
      oceanTransit: 'Tanjung Priok Port',
      airTransit: 'Soekarno-Hatta (CGK)',
      color: '#c8102e',
      x: 745,
      y: 310,
    },
    {
      id: 'singapore',
      name: 'Singapore Hub',
      country: 'Singapore',
      status: 'Active Transshipment Hub',
      traffic: 'High',
      oceanTransit: 'PSA Singapore',
      airTransit: 'Changi (SIN)',
      color: '#2563eb',
      x: 725,
      y: 285,
    },
    {
      id: 'shanghai',
      name: 'East Asia Hub',
      country: 'Shanghai & Ningbo, China',
      status: 'Active Direct Trade Lane',
      traffic: 'Peak Traffic',
      oceanTransit: 'Yangshan Port',
      airTransit: 'Pudong (PVG)',
      color: '#dc2626',
      x: 795,
      y: 200,
    },
    {
      id: 'rotterdam',
      name: 'Europe Gateway',
      country: 'Rotterdam, Netherlands',
      status: 'Active Continental Hub',
      traffic: 'High',
      oceanTransit: 'Port of Rotterdam',
      airTransit: 'Schiphol (AMS)',
      color: '#059669',
      x: 485,
      y: 145,
    },
    {
      id: 'losangeles',
      name: 'North America Hub',
      country: 'Los Angeles / Long Beach, USA',
      status: 'Transpacific Fast Corridor',
      traffic: 'High',
      oceanTransit: 'Port of LA / LB',
      airTransit: 'LAX International',
      color: '#d97706',
      x: 195,
      y: 190,
    },
    {
      id: 'dubai',
      name: 'Middle East Gateway',
      country: 'Jebel Ali, UAE',
      status: 'Active Strategic Corridor',
      traffic: 'High',
      oceanTransit: 'Jebel Ali Port',
      airTransit: 'Dubai International (DXB)',
      color: '#7c3aed',
      x: 605,
      y: 215,
    },
  ]

  const currentHubInfo = hubs.find((h) => h.id === activeHub) || hubs[0]

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#e2e8f0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionTag icon={Globe} variant="red" className="mb-4">
            Global Network Presence
          </SectionTag>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-[#0f1f3d] tracking-tight">
            Worldwide Shipping <span className="text-[#c8102e]">Routes & Hubs</span>
          </h3>
          <p className="mt-3 text-[#64748b] text-sm sm:text-base leading-relaxed">
            Active maritime shipping corridors and priority air cargo frequencies connecting Indonesian trade across 120+ destination countries.
          </p>
        </div>

        {/* Map Container + Status Panel Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive World Map Canvas */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-[#f8fafd] border border-[#e1e7f1] shadow-[0_8px_30px_rgba(15,31,61,0.06)] relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-[#e2e8f0] mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-bold text-[#0f1f3d]">Live Global Shipping Matrix</span>
              </div>
              <span className="text-[11px] text-[#64748b]">Click a hub marker to view route status</span>
            </div>

            {/* SVG Visual World Map with Deep Navy Sea and Crisp Route Lines */}
            <div className="relative w-full aspect-[16/9] bg-[#0f1f3d] rounded-2xl border border-[#1e293b] overflow-hidden flex items-center justify-center">
              <svg
                viewBox="0 0 1000 500"
                className="w-full h-full object-contain filter drop-shadow-md select-none"
              >
                {/* Background grid */}
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="1000" height="500" fill="url(#grid)" />

                {/* Stylized continent vectors */}
                <g fill="#1e294b" opacity="0.8">
                  {/* North America */}
                  <path d="M 120 70 Q 200 60 250 110 T 220 220 T 170 240 T 130 180 Z" />
                  {/* South America */}
                  <path d="M 230 250 Q 280 270 290 350 T 260 440 T 210 330 Z" />
                  {/* Europe */}
                  <path d="M 460 80 Q 520 80 540 140 T 480 180 T 450 120 Z" />
                  {/* Africa */}
                  <path d="M 460 190 Q 540 200 560 280 T 520 400 T 450 300 Z" />
                  {/* Asia */}
                  <path d="M 560 80 Q 740 70 820 150 T 830 260 T 680 250 T 580 160 Z" />
                  {/* Australia */}
                  <path d="M 760 330 Q 850 330 860 410 T 780 430 T 740 370 Z" />
                </g>

                {/* Shipping corridor lines from Jakarta (745, 310) */}
                <g fill="none" strokeWidth="1.5" strokeDasharray="4 4" className="animate-pulse">
                  {/* Jakarta to Singapore */}
                  <path d="M 745 310 Q 735 295 725 285" stroke="#ef4444" opacity="0.8" />
                  {/* Jakarta to Shanghai */}
                  <path d="M 745 310 Q 780 250 795 200" stroke="#ef4444" opacity="0.7" />
                  {/* Jakarta to Dubai */}
                  <path d="M 745 310 Q 660 270 605 215" stroke="#ef4444" opacity="0.6" />
                  {/* Jakarta to Rotterdam */}
                  <path d="M 745 310 Q 600 240 485 145" stroke="#ef4444" opacity="0.5" />
                  {/* Jakarta to Los Angeles */}
                  <path d="M 745 310 Q 450 380 195 190" stroke="#ef4444" opacity="0.5" />
                </g>

                {/* Hub interactive markers */}
                {hubs.map((hub) => {
                  const isSelected = activeHub === hub.id
                  return (
                    <g
                      key={hub.id}
                      className="cursor-pointer transition-all duration-200"
                      onClick={() => setActiveHub(hub.id)}
                    >
                      {/* Pulse circle for selected */}
                      {isSelected && (
                        <circle
                          cx={hub.x}
                          cy={hub.y}
                          r="14"
                          fill={hub.color}
                          opacity="0.3"
                          className="animate-ping"
                        />
                      )}
                      {/* Main node */}
                      <circle
                        cx={hub.x}
                        cy={hub.y}
                        r={isSelected ? 6 : 4.5}
                        fill={hub.color}
                        stroke="#ffffff"
                        strokeWidth={isSelected ? 2 : 1}
                      />
                      {/* Text label */}
                      <text
                        x={hub.x}
                        y={hub.y - 10}
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize={isSelected ? '11' : '9'}
                        fontWeight={isSelected ? 'bold' : 'normal'}
                      >
                        {hub.name.split(' ')[0]}
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>
          </div>

          {/* Right Selected Hub Details Panel - Clean White Card */}
          <div className="lg:col-span-4 p-6 sm:p-8 rounded-3xl bg-[#f8fafd] border border-[#e1e7f1] shadow-[0_8px_30px_rgba(15,31,61,0.06)] space-y-6">
            <div className="flex items-center gap-2 pb-4 border-b border-[#e2e8f0]">
              <Radio className="w-5 h-5 text-[#c8102e]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0f1f3d]">
                Route Intelligence
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: currentHubInfo.color }}
                />
                <h4 className="text-xl font-bold text-[#0f1f3d]">
                  {currentHubInfo.name}
                </h4>
              </div>
              <p className="text-xs text-[#64748b] mt-1 font-medium">
                {currentHubInfo.country}
              </p>
            </div>

            <div className="space-y-3 p-4 rounded-2xl bg-white border border-[#e1e7f1] text-xs">
              <div className="flex justify-between items-center">
                <span className="text-[#64748b]">Route Activity:</span>
                <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {currentHubInfo.status}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#64748b]">Volume Traffic:</span>
                <span className="font-bold text-[#0f1f3d]">
                  {currentHubInfo.traffic}
                </span>
              </div>
              <div className="pt-2 border-t border-[#edf1f7] space-y-2">
                <div className="flex items-center gap-2 text-[#334155]">
                  <Ship className="w-3.5 h-3.5 text-[#c8102e]" />
                  <span>Sea: {currentHubInfo.oceanTransit}</span>
                </div>
                <div className="flex items-center gap-2 text-[#334155]">
                  <Plane className="w-3.5 h-3.5 text-blue-600" />
                  <span>Air: {currentHubInfo.airTransit}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-xs text-[#64748b] block mb-2 font-semibold">
                Quick Select Hub:
              </span>
              <div className="flex flex-wrap gap-2">
                {hubs.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => setActiveHub(h.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      activeHub === h.id
                        ? 'bg-[#c8102e] text-white shadow-sm'
                        : 'bg-white text-[#334155] border border-[#e1e7f1] hover:bg-[#f1f5fb]'
                    }`}
                  >
                    {h.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
