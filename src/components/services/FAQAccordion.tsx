import React, { useState } from 'react'
import { ChevronDown, HelpCircle, PhoneCall, Mail } from 'lucide-react'
import { SectionTag } from '../common/SectionTag'
import { Link } from 'react-router-dom'

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      q: 'Bagaimana cara memulai pengiriman dengan RDX Logistics?',
      a: 'Sangat mudah. Kirimkan detail muatan Anda melalui formulir Request for Quote (RFQ) kami atau hubungi helpdesk kami. Spesialis kargo kami akan mengevaluasi spesifikasi barang, merekomendasikan rute optimal, memberikan penawaran tarif transparan, dan menugaskan koordinator job order khusus untuk menangani proses kepabeanan hingga pengiriman.',
    },
    {
      q: 'Dokumen apa saja yang dibutuhkan untuk clearance kepabeanan ekspor/impor?',
      a: 'Dokumen standar umumnya meliputi: Commercial Invoice, Packing List lengkap, Bill of Lading (B/L) atau Air Waybill (AWB), dan Certificate of Origin (COO). Untuk komoditas yang diatur, izin tambahan seperti Persetujuan Impor (PI), Laporan Surveyor (LS), atau sertifikasi BPOM/SNI mungkin diperlukan. Tim PPJK berlisensi kami akan meninjau HS code barang Anda terlebih dahulu untuk memastikan kepatuhan penuh.',
    },
    {
      q: 'Berapa lama estimasi waktu transit pengiriman internasional dari pelabuhan Indonesia?',
      a: 'Waktu transit bervariasi menurut moda dan koridor rute: Pengiriman laut rute Intra-Asia (Singapura, Malaysia, Tiongkok) umumnya memakan waktu 3 hingga 10 hari; rute Eropa dan Amerika Utara berkisar 22 hingga 35 hari. Untuk kebutuhan mendesak, Air Freight Priority kami tiba dalam 2 hingga 5 hari ke seluruh dunia.',
    },
    {
      q: 'Dapatkah saya melacak milestone shipment dan kontainer secara real-time?',
      a: 'Ya. Setiap Job Order memiliki nomor referensi unik. Anda dapat menggunakan Customer Portal atau fitur Quick Track di halaman utama kami untuk memantau status kapal (ETD/ETA), persetujuan kepabeanan (SPPB), hingga serah terima barang (POD) selama 24/7.',
    },
    {
      q: 'Apakah RDX Logistics menangani kargo berbahaya (Dangerous Goods) dan kargo bersuhu khusus?',
      a: 'Ya. Tim kami bersertifikasi standar IATA-DGR dan maritime safety IMO. Kami menangani klasifikasi muatan berbahaya, pengemasan khusus, serta kontainer berpendingin (reefers) cold-chain yang dilengkapi pencatat suhu digital berstandar GDP.',
    },
  ]

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="py-20 lg:py-24 bg-[#f4f7fc] border-b border-[#e2e8f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <SectionTag icon={HelpCircle} variant="red" className="mb-4">
            Common Questions
          </SectionTag>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1f3d] tracking-tight">
            Freight Forwarding <span className="text-[#c8102e]">FAQs</span>
          </h2>
          <p className="mt-4 text-base text-[#64748b] font-normal leading-relaxed">
            Semua informasi penting seputar pengiriman kargo internasional, dokumen kepabeanan, dan kerja sama bersama RDX.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Accordion Column */}
          <div className="lg:col-span-8 space-y-4">
            {faqs.map((f, idx) => {
              const isOpen = openIndex === idx
              return (
                <div
                  key={idx}
                  className={`rounded-2xl bg-white border transition-all duration-200 shadow-sm ${
                    isOpen ? 'border-[#c8102e]/40 shadow-md' : 'border-[#e1e7f1]'
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#0f1f3d] leading-snug">
                      {f.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'bg-[#c8102e] text-white rotate-180'
                          : 'bg-[#fef2f2] text-[#c8102e]'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#64748b] leading-relaxed border-t border-[#edf1f7] pt-4">
                      {f.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Right Fast Support Card - Clean White Card */}
          <div className="lg:col-span-4 p-8 rounded-3xl bg-white border border-[#e1e7f1] shadow-[0_8px_30px_rgba(15,31,61,0.06)] space-y-6">
            <h4 className="text-xl font-bold text-[#0f1f3d]">
              Butuh Konsultasi Langsung?
            </h4>
            <p className="text-xs sm:text-sm text-[#64748b] leading-relaxed">
              Konsultan logistik dan tim PPJK berlisensi kami siap membantu kebutuhan ekspor/impor perusahaan Anda.
            </p>

            <div className="space-y-3 pt-2">
              <a
                href="tel:02138873060"
                className="w-full flex items-center gap-3 p-3.5 rounded-xl bg-[#f8fafd] hover:bg-white border border-[#e1e7f1] text-[#0f1f3d] text-xs font-semibold transition-colors shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-[#fef2f2] text-[#c8102e] border border-[#fecaca] flex items-center justify-center shrink-0">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#8a99ae] block text-[10px]">Call Jakarta Desk:</span>
                  <span className="font-bold text-[#0f1f3d]">(021) 3887-3060</span>
                </div>
              </a>

              <a
                href="mailto:quote@rdx-interlog.com"
                className="w-full flex items-center gap-3 p-3.5 rounded-xl bg-[#f8fafd] hover:bg-white border border-[#e1e7f1] text-[#0f1f3d] text-xs font-semibold transition-colors shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-[#fef2f2] text-[#c8102e] border border-[#fecaca] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[#8a99ae] block text-[10px]">Email Penawaran Tarif:</span>
                  <span className="font-bold text-[#0f1f3d]">quote@rdx-interlog.com</span>
                </div>
              </a>
            </div>

            <div className="pt-2 border-t border-[#edf1f7]">
              <Link
                to="/contact"
                className="w-full block py-3 text-center rounded-xl bg-[#c8102e] hover:bg-[#a30b23] text-white text-xs font-bold tracking-wider uppercase shadow-md shadow-[#c8102e]/20 transition-all"
              >
                Isi Formulir RFQ Resmi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
