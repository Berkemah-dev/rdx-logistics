import React, { useState } from 'react'
import { CalendarCheck, Truck, Ship, FileCheck2, CheckCircle2, Info } from 'lucide-react'
import { SectionTag } from '../common/SectionTag'

export const ShipmentRouteSimulator: React.FC = () => {
  const [activeStep, setActiveStep] = useState(2)

  const steps = [
    {
      step: 0,
      name: 'Booking',
      status: 'Order Confirmed',
      icon: CalendarCheck,
      details: 'Shipping space secured with carrier, equipment reserved, and initial documentation verified.',
      docs: ['Shipping Instruction (SI)', 'Booking Confirmation', 'Proforma Invoice'],
      sla: 'Same day (within 4 hours)',
    },
    {
      step: 1,
      name: 'Pickup & Origin',
      status: 'Cargo Collected',
      icon: Truck,
      details: 'Container stuffed at supplier factory or CFS warehouse, weighed (VGM verified), and sealed.',
      docs: ['Delivery Order (DO)', 'Packing List', 'VGM Certificate'],
      sla: '24 - 48 Hours',
    },
    {
      step: 2,
      name: 'Transit',
      status: 'Global Movement',
      icon: Ship,
      details: 'Vessel departure, maritime passage, automatic GPS transponder tracking, and transshipment monitoring.',
      docs: ['Master Bill of Lading (MBL)', 'House B/L', 'Air Waybill (AWB)'],
      sla: 'According to route schedule',
    },
    {
      step: 3,
      name: 'Customs (PPJK)',
      status: 'Clearance & Inspection',
      icon: FileCheck2,
      details: 'Customs declaration submission via electronic EDI, tax & duty calculation, and release approval (SPPB).',
      docs: ['Pemberitahuan Impor Barang (PIB)', 'SPPB Customs Release', 'Tax Payment Receipt (BPN)'],
      sla: '24 - 72 Hours (Green Line)',
    },
    {
      step: 4,
      name: 'Delivery',
      status: 'Door Handover',
      icon: CheckCircle2,
      details: 'Final discharge from container yard, bonded transport to consignee warehouse, and empty container return.',
      docs: ['Proof of Delivery (POD)', 'Container Return Interchange', 'Final Invoice'],
      sla: 'Completed & Closed',
    },
  ]

  const current = steps[activeStep]
  const CurrentIcon = current.icon

  return (
    <section className="py-20 lg:py-24 bg-white border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionTag icon={Ship} variant="red" className="mb-4">
            Process Transparency
          </SectionTag>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1f3d] tracking-tight">
            Shipment Route <span className="text-[#c8102e]">Monitoring Workflow</span>
          </h2>
          <p className="mt-4 text-base text-[#64748b] font-normal leading-relaxed">
            Click each milestone below to examine our end-to-end cargo handling protocols and documentation control.
          </p>
        </div>

        {/* Stepper Progress Bar */}
        <div className="relative mb-12">
          {/* Connector Line */}
          <div className="hidden sm:block absolute top-7 left-12 right-12 h-1 bg-[#e2e8f0] -z-0">
            <div
              className="h-full bg-[#c8102e] transition-all duration-500 rounded-full"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 relative z-10">
            {steps.map((s, idx) => {
              const Icon = s.icon
              const isPassed = idx <= activeStep
              const isCurrent = idx === activeStep
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`flex flex-col items-center text-center p-3 rounded-2xl transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-white border-2 border-[#c8102e] shadow-md -translate-y-1'
                      : 'hover:bg-[#f8fafd] border border-transparent'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all mb-2 ${
                      isCurrent
                        ? 'bg-[#c8102e] text-white shadow-md shadow-[#c8102e]/30 scale-105'
                        : isPassed
                        ? 'bg-[#fef2f2] text-[#c8102e] border border-[#fecaca]'
                        : 'bg-[#f1f5fb] text-[#8a99ae] border border-[#e2e8f0]'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-xs font-bold tracking-wide ${
                      isCurrent ? 'text-[#0f1f3d]' : 'text-[#64748b]'
                    }`}
                  >
                    {s.name}
                  </span>
                  <span className="text-[10px] text-[#8a99ae] mt-0.5">
                    {s.status}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Selected Stage Detail Panel - Fresh Slate Card */}
        <div className="p-8 rounded-3xl bg-[#f8fafd] border border-[#e1e7f1] shadow-[0_8px_30px_rgba(15,31,61,0.06)] relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#e2e8f0]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#fef2f2] border border-[#fecaca] flex items-center justify-center text-[#c8102e]">
                <CurrentIcon className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#c8102e]">
                  Milestone Phase 0{current.step + 1}
                </span>
                <h3 className="text-2xl font-bold text-[#0f1f3d] mt-0.5">
                  {current.name} — {current.status}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#e1e7f1] text-xs text-[#334155] shadow-sm">
              <Info className="w-4 h-4 text-blue-600" />
              <span>Standard SLA: <strong>{current.sla}</strong></span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            <div className="lg:col-span-7">
              <h4 className="text-xs font-bold text-[#0f1f3d] uppercase tracking-wider mb-2">
                Operational Description
              </h4>
              <p className="text-sm text-[#64748b] leading-relaxed">
                {current.details}
              </p>
            </div>

            <div className="lg:col-span-5">
              <h4 className="text-xs font-bold text-[#0f1f3d] uppercase tracking-wider mb-2">
                Key Documentation Managed
              </h4>
              <div className="space-y-2">
                {current.docs.map((doc, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-[#e1e7f1] text-xs text-[#334155] font-medium shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
