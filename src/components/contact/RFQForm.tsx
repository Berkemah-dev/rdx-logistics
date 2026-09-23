import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Send, CheckCircle2 } from 'lucide-react'

const formSchema = z.object({
  fullName: z.string().min(2, { message: 'Nama lengkap minimal 2 karakter.' }),
  companyName: z.string().min(2, { message: 'Nama perusahaan wajib diisi untuk RFQ B2B.' }),
  email: z.string().email({ message: 'Masukkan alamat email bisnis yang valid.' }),
  phone: z.string().min(8, { message: 'Masukkan nomor telepon / WhatsApp yang valid.' }),
  serviceType: z.string().min(1, { message: 'Silakan pilih jenis layanan.' }),
  originPort: z.string().optional(),
  destinationPort: z.string().optional(),
  cargoDetails: z.string().optional(),
  message: z.string().min(10, { message: 'Mohon berikan deskripsi kebutuhan minimal 10 karakter.' }),
})

type FormValues = z.infer<typeof formSchema>

export const RFQForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false)
  const [isDetailed, setIsDetailed] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      serviceType: 'ocean-fcl',
      originPort: '',
      destinationPort: '',
      cargoDetails: '',
      message: '',
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log('RFQ Data Submitted:', data)
    setTimeout(() => {
      setSubmitted(true)
      reset()
    }, 600)
  }

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#e1e7f1] shadow-[0_8px_30px_rgba(15,31,61,0.06)] relative">
      {submitted ? (
        <div className="py-16 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-[#0f1f3d]">Permintaan RFQ Berhasil Dikirim</h3>
          <p className="text-sm text-[#64748b] max-w-md mx-auto leading-relaxed">
            Terima kasih telah menghubungi <strong className="text-[#0f1f3d]">PT. Radix International Logistics</strong>. Tim spesialis kargo kami akan meninjau rute dan memberikan estimasi penawaran harga dalam kurun 24 jam kerja.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-6 px-6 py-2.5 rounded-xl bg-[#f4f7fc] hover:bg-[#e2e8f0] text-[#0f1f3d] text-xs font-bold transition-colors cursor-pointer border border-[#e2e8f0]"
          >
            Kirim Permintaan Lain
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#edf1f7] gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#c8102e] bg-[#fef2f2] px-3 py-1 rounded-full border border-[#fecaca]">
                Commercial Consultation
              </span>
              <h3 className="text-2xl font-bold text-[#0f1f3d] mt-2">
                Permintaan Tarif & Konsultasi B2B
              </h3>
            </div>
            {/* Toggle Quick vs Detailed */}
            <div className="flex items-center gap-1 bg-[#f4f7fc] p-1 rounded-xl border border-[#e2e8f0] text-xs">
              <button
                type="button"
                onClick={() => setIsDetailed(false)}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  !isDetailed ? 'bg-[#c8102e] text-white font-bold shadow-sm' : 'text-[#64748b] hover:text-[#0f1f3d]'
                }`}
              >
                Quick Inquiry
              </button>
              <button
                type="button"
                onClick={() => setIsDetailed(true)}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  isDetailed ? 'bg-[#c8102e] text-white font-bold shadow-sm' : 'text-[#64748b] hover:text-[#0f1f3d]'
                }`}
              >
                Detailed B2B RFQ
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-[#0f1f3d] uppercase tracking-wider mb-2">
                Nama Lengkap *
              </label>
              <input
                type="text"
                {...register('fullName')}
                placeholder="Contoh: Budi Santoso"
                className="w-full px-4 py-2.5 rounded-xl bg-[#f8fafd] border border-[#dce4ef] text-[#0f1f3d] text-sm focus:outline-none focus:border-[#c8102e] focus:bg-white transition-colors"
              />
              {errors.fullName && (
                <p className="text-xs text-[#c8102e] mt-1 font-medium">{errors.fullName.message}</p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-xs font-bold text-[#0f1f3d] uppercase tracking-wider mb-2">
                Nama Perusahaan / Organisasi *
              </label>
              <input
                type="text"
                {...register('companyName')}
                placeholder="Contoh: PT. Global Ekspor Mandiri"
                className="w-full px-4 py-2.5 rounded-xl bg-[#f8fafd] border border-[#dce4ef] text-[#0f1f3d] text-sm focus:outline-none focus:border-[#c8102e] focus:bg-white transition-colors"
              />
              {errors.companyName && (
                <p className="text-xs text-[#c8102e] mt-1 font-medium">{errors.companyName.message}</p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-bold text-[#0f1f3d] uppercase tracking-wider mb-2">
                Email Bisnis *
              </label>
              <input
                type="email"
                {...register('email')}
                placeholder="name@company.com"
                className="w-full px-4 py-2.5 rounded-xl bg-[#f8fafd] border border-[#dce4ef] text-[#0f1f3d] text-sm focus:outline-none focus:border-[#c8102e] focus:bg-white transition-colors"
              />
              {errors.email && (
                <p className="text-xs text-[#c8102e] mt-1 font-medium">{errors.email.message}</p>
              )}
            </div>

            {/* WhatsApp / Phone */}
            <div>
              <label className="block text-xs font-bold text-[#0f1f3d] uppercase tracking-wider mb-2">
                Nomor Telepon / WhatsApp *
              </label>
              <input
                type="tel"
                {...register('phone')}
                placeholder="+62 812 3456 7890"
                className="w-full px-4 py-2.5 rounded-xl bg-[#f8fafd] border border-[#dce4ef] text-[#0f1f3d] text-sm focus:outline-none focus:border-[#c8102e] focus:bg-white transition-colors"
              />
              {errors.phone && (
                <p className="text-xs text-[#c8102e] mt-1 font-medium">{errors.phone.message}</p>
              )}
            </div>
          </div>

          {/* Service Selection */}
          <div>
            <label className="block text-xs font-bold text-[#0f1f3d] uppercase tracking-wider mb-2">
              Layanan Utama Yang Diminta *
            </label>
            <select
              {...register('serviceType')}
              className="w-full px-4 py-2.5 rounded-xl bg-[#f8fafd] border border-[#dce4ef] text-[#0f1f3d] text-sm focus:outline-none focus:border-[#c8102e] focus:bg-white transition-colors cursor-pointer"
            >
              <option value="ocean-fcl">Ocean Freight — Full Container Load (FCL)</option>
              <option value="ocean-lcl">Ocean Freight — Less than Container Load (LCL)</option>
              <option value="air-freight">Air Freight Priority / Express</option>
              <option value="ppjk">Customs Clearance PPJK & Documentation</option>
              <option value="multimodal">Door-to-Door Multimodal Forwarding</option>
              <option value="project-cargo">Project Cargo & Heavy Lift</option>
            </select>
          </div>

          {/* Conditional Detailed Fields */}
          {isDetailed && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-[#edf1f7] animate-in fade-in duration-200">
              <div>
                <label className="block text-xs font-bold text-[#0f1f3d] uppercase tracking-wider mb-2">
                  Port of Loading (POL)
                </label>
                <input
                  type="text"
                  {...register('originPort')}
                  placeholder="Contoh: Tanjung Priok (IDJKT)"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#f8fafd] border border-[#dce4ef] text-[#0f1f3d] text-sm focus:outline-none focus:border-[#c8102e] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0f1f3d] uppercase tracking-wider mb-2">
                  Port of Discharge (POD)
                </label>
                <input
                  type="text"
                  {...register('destinationPort')}
                  placeholder="Contoh: Rotterdam (NLRTM) / Los Angeles"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#f8fafd] border border-[#dce4ef] text-[#0f1f3d] text-sm focus:outline-none focus:border-[#c8102e] focus:bg-white"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-[#0f1f3d] uppercase tracking-wider mb-2">
                  Spesifikasi Kargo (Volume / Berat / Container Type)
                </label>
                <input
                  type="text"
                  {...register('cargoDetails')}
                  placeholder="Contoh: 2x 40HC, Komoditas Tekstil, 22.000 KG"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#f8fafd] border border-[#dce4ef] text-[#0f1f3d] text-sm focus:outline-none focus:border-[#c8102e] focus:bg-white"
                />
              </div>
            </div>
          )}

          {/* Message / Requirements */}
          <div>
            <label className="block text-xs font-bold text-[#0f1f3d] uppercase tracking-wider mb-2">
              Kebutuhan / Rincian Pengiriman *
            </label>
            <textarea
              rows={4}
              {...register('message')}
              placeholder="Jelaskan kebutuhan pengiriman Anda, jadwal target keberangkatan, atau izin khusus yang diperlukan..."
              className="w-full px-4 py-3 rounded-xl bg-[#f8fafd] border border-[#dce4ef] text-[#0f1f3d] text-sm focus:outline-none focus:border-[#c8102e] focus:bg-white transition-colors"
            />
            {errors.message && (
              <p className="text-xs text-[#c8102e] mt-1 font-medium">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl bg-[#c8102e] hover:bg-[#a30b23] text-white text-sm font-bold tracking-wider uppercase shadow-md shadow-[#c8102e]/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
          >
            {isSubmitting ? (
              <span>Memproses Permintaan...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Kirim Permintaan Penawaran Tarif</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  )
}
