import React from 'react'
import { CheckCircle2, Mail, Globe, FileText, TrendingUp } from 'lucide-react'

export const DepartmentDirectory: React.FC = () => {
  const whyUs = [
    'Konsultasi awal HS-Code & estimasi tarif gratis',
    'Jaminan respon komersial dalam 24 jam kerja',
    'Tim PPJK berlisensi resmi di pelabuhan utama Indonesia',
    'Alokasi ruang kontainer Tier-1 dengan pelayaran global',
  ]

  const departments = [
    {
      role: 'International Partnerships & Agency',
      email: 'overseas@rdx-interlog.com',
      icon: Globe,
      desc: 'Aliansi forwarder luar negeri & jaringan agen global',
    },
    {
      role: 'Export / Import Documentation Desk',
      email: 'cs_exim@rdx-interlog.com',
      icon: FileText,
      desc: 'Pengurusan dokumen PIB/PEB, COO, & rilis manifest kepabeanan',
    },
    {
      role: 'Global Commercial Sales & RFQ',
      email: 'quote@rdx-interlog.com',
      icon: TrendingUp,
      desc: 'Permintaan penawaran tarif, tender korporat, & kontrak logistik',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Box 1: Why Clients Choose Us */}
      <div className="p-8 rounded-3xl bg-white border border-[#e1e7f1] shadow-[0_8px_30px_rgba(15,31,61,0.06)]">
        <h4 className="text-xl font-bold text-[#0f1f3d] mb-4">
          Keunggulan Layanan RDX
        </h4>
        <div className="space-y-3.5">
          {whyUs.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[#fef2f2] text-[#c8102e] flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs sm:text-sm text-[#334155] leading-relaxed font-medium">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Box 2: Direct Directory */}
      <div className="p-8 rounded-3xl bg-white border border-[#e1e7f1] shadow-[0_8px_30px_rgba(15,31,61,0.06)]">
        <h4 className="text-xl font-bold text-[#0f1f3d] mb-2">
          Direktori Departemen
        </h4>
        <p className="text-xs text-[#64748b] mb-6 font-normal">
          Hubungi tim spesifik kami untuk korespondensi teknis dan operasional.
        </p>

        <div className="space-y-4">
          {departments.map((dept, idx) => {
            const Icon = dept.icon
            return (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#f8fafd] border border-[#e1e7f1] hover:border-[#c8102e]/30 transition-all space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#fef2f2] text-[#c8102e] border border-[#fecaca] flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <h5 className="text-xs font-bold text-[#0f1f3d]">
                    {dept.role}
                  </h5>
                </div>
                <p className="text-[11px] text-[#64748b] pl-9">
                  {dept.desc}
                </p>
                <div className="pl-9 pt-1">
                  <a
                    href={`mailto:${dept.email}`}
                    className="text-xs font-bold text-[#c8102e] hover:underline inline-flex items-center gap-1"
                  >
                    <Mail className="w-3 h-3" />
                    <span>{dept.email}</span>
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
