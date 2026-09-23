import React, { useState } from 'react'
import { Search, Ship, CheckCircle2, Clock, MapPin, X, ArrowRight, ShieldCheck } from 'lucide-react'

export const TrackShipmentBar: React.FC = () => {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [showResult, setShowResult] = useState(false)
  const [isSearching, setIsSearching] = useState(false)

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    if (!trackingNumber.trim()) return

    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
      setShowResult(true)
    }, 450)
  }

  return (
    <div className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-12 mb-8">
      {/* Floating Action Bar - Fresh White Surface */}
      <div className="bg-white border border-[#e1e7f1] rounded-2xl p-4 sm:p-5 shadow-[0_12px_36px_rgba(15,31,61,0.08)]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3 pb-3 border-b border-[#edf1f7]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#fef2f2] text-[#c8102e] border border-[#fecaca] flex items-center justify-center shrink-0">
              <Ship className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0f1f3d] tracking-wide">
                Quick Cargo & Container Tracking
              </h3>
              <p className="text-xs text-[#64748b]">
                Real-time milestone tracking for Ocean, Air, and Multimodal Job Orders
              </p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs text-[#64748b]">
            <span className="flex items-center gap-1.5 font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5" />
              Verified Manifest EDI
            </span>
            <span className="text-slate-300">•</span>
            <button
              type="button"
              onClick={() => {
                setTrackingNumber('RDX-88291-JKT')
                setShowResult(true)
              }}
              className="text-[#c8102e] hover:underline font-semibold cursor-pointer"
            >
              Contoh: RDX-88291-JKT
            </button>
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-2.5">
          <div className="relative flex-1 flex items-center bg-[#f8fafd] border border-[#dce4ef] rounded-xl px-3.5 py-1.5 focus-within:border-[#c8102e] focus-within:bg-white transition-colors">
            <Search className="w-4 h-4 text-[#8a99ae] shrink-0 mr-2.5" />
            <input
              type="text"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              placeholder="Masukkan Nomor B/L, Kontainer, atau Job Order..."
              className="w-full bg-transparent text-[#0f1f3d] placeholder-[#8a99ae] text-xs sm:text-sm py-1.5 focus:outline-none font-medium"
            />
          </div>
          <button
            type="submit"
            disabled={isSearching}
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#c8102e] hover:bg-[#a30b23] text-white text-xs sm:text-sm font-bold tracking-wider uppercase shadow-md shadow-[#c8102e]/20 transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer disabled:opacity-70"
          >
            {isSearching ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <span>Lacak Kargo</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Mobile-only sample trigger */}
        <div className="sm:hidden mt-2 pt-2 border-t border-[#edf1f7] flex justify-between text-xs text-[#64748b]">
          <span>Live milestone lookup</span>
          <button
            type="button"
            onClick={() => {
              setTrackingNumber('RDX-88291-JKT')
              setShowResult(true)
            }}
            className="text-[#c8102e] font-semibold underline"
          >
            Contoh: RDX-88291-JKT
          </button>
        </div>
      </div>

      {/* Floating Result Modal - Fresh Corporate Card */}
      {showResult && (
        <div className="absolute top-full mt-3 left-4 right-4 sm:left-6 sm:right-6 z-50 bg-white border border-[#e1e7f1] rounded-2xl p-6 shadow-[0_20px_50px_rgba(15,31,61,0.12)] animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-start justify-between pb-4 border-b border-[#edf1f7]">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#0f1f3d] bg-[#f1f5fb] px-3 py-1 rounded border border-[#dce4ef]">
                  {trackingNumber || 'RDX-88291-JKT'}
                </span>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  In Transit — On Schedule
                </span>
              </div>
              <p className="text-xs text-[#64748b] mt-1.5">
                Vessel: <strong className="text-[#0f1f3d]">CMA CGM INTEGRITY</strong> • 40ft High Cube Container • General Cargo
              </p>
            </div>
            <button
              onClick={() => setShowResult(false)}
              className="text-[#8a99ae] hover:text-[#0f1f3d] p-1.5 rounded-lg hover:bg-[#f1f5fb] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stepper Status */}
          <div className="py-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div className="flex sm:flex-col items-center gap-3 sm:gap-2 text-left sm:text-center p-3 sm:p-2 rounded-xl bg-[#f8fafd] border border-[#edf1f7] sm:border-0 sm:bg-transparent">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-[#0f1f3d] block">Tanjung Priok, ID</span>
                <span className="text-[11px] text-[#64748b]">Vessel Departed • Apr 18</span>
              </div>
            </div>

            <div className="flex sm:flex-col items-center gap-3 sm:gap-2 text-left sm:text-center p-3 sm:p-2 rounded-xl bg-[#fef2f2] border border-[#fecaca] sm:border-0 sm:bg-transparent">
              <div className="w-10 h-10 rounded-full bg-[#fef2f2] text-[#c8102e] border-2 border-[#c8102e] flex items-center justify-center shrink-0 shadow-sm animate-pulse">
                <Ship className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-[#0f1f3d] block">Singapore Strait</span>
                <span className="text-[11px] text-[#c8102e] font-semibold">Active Maritime Transit</span>
              </div>
            </div>

            <div className="flex sm:flex-col items-center gap-3 sm:gap-2 text-left sm:text-center p-3 sm:p-2 rounded-xl bg-[#f8fafd] border border-[#edf1f7] sm:border-0 sm:bg-transparent opacity-60">
              <div className="w-10 h-10 rounded-full bg-slate-100 text-slate-500 border border-slate-200 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-[#0f1f3d] block">Rotterdam, NL</span>
                <span className="text-[11px] text-[#64748b]">Estimated Arrival • May 04</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[#edf1f7] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-[#64748b] flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              Automatic satellite transponder update • 18 minutes ago
            </span>
            <a
              href="https://www.rdx-interlog.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c8102e] hover:underline font-bold flex items-center gap-1"
            >
              Open Full Documentation in Customer Portal →
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
