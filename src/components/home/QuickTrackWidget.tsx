import React, { useState } from 'react'
import { Search, Ship, CheckCircle2, Clock, MapPin, X, ArrowRight } from 'lucide-react'

export const QuickTrackWidget: React.FC = () => {
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
    <div className="relative w-full max-w-xl">
      {/* Sleek Minimal Fresh Tracking Bar */}
      <form
        onSubmit={handleTrack}
        className="flex items-center bg-white rounded-xl border border-[#dce4ef] p-1.5 shadow-md focus-within:border-[#c8102e] transition-colors"
      >
        <div className="flex items-center pl-3 pr-2 text-[#8a99ae]">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          placeholder="Lacak shipment dengan B/L, Kontainer, atau No. Job..."
          className="w-full bg-transparent text-[#0f1f3d] placeholder-[#8a99ae] text-xs sm:text-sm focus:outline-none py-1.5 font-medium"
        />
        <button
          type="submit"
          disabled={isSearching}
          className="px-5 py-2.5 rounded-lg bg-[#c8102e] hover:bg-[#a30b23] text-white text-xs font-bold tracking-wide transition-all shrink-0 flex items-center gap-1.5 cursor-pointer disabled:opacity-70 shadow-sm"
        >
          {isSearching ? (
            <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <>
              <span>Lacak</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </form>

      {/* Subtle sample trigger */}
      <div className="flex items-center gap-2 mt-2 px-1 text-xs text-[#64748b]">
        <span>Contoh nomor:</span>
        <button
          type="button"
          onClick={() => {
            setTrackingNumber('RDX-88291-JKT')
            setShowResult(true)
          }}
          className="text-[#c8102e] hover:underline font-semibold transition-colors cursor-pointer"
        >
          RDX-88291-JKT
        </button>
      </div>

      {/* Clean Tracking Result Card */}
      {showResult && (
        <div className="absolute top-full mt-3 left-0 right-0 z-40 bg-white border border-[#e1e7f1] rounded-2xl p-5 shadow-[0_16px_40px_rgba(15,31,61,0.12)] animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-start justify-between pb-3 border-b border-[#edf1f7]">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#0f1f3d] bg-[#f1f5fb] px-2.5 py-0.5 rounded border border-[#dce4ef]">
                  {trackingNumber || 'RDX-88291-JKT'}
                </span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  In Transit — On Schedule
                </span>
              </div>
              <p className="text-xs text-[#64748b] mt-1">
                FCL Ocean Freight • 40ft High Cube Container
              </p>
            </div>
            <button
              onClick={() => setShowResult(false)}
              className="text-[#8a99ae] hover:text-[#0f1f3d] p-1 rounded-lg hover:bg-[#f1f5fb] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Stepper Status */}
          <div className="py-4 grid grid-cols-3 gap-2 text-center text-xs">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 flex items-center justify-center mb-1.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="font-bold text-[#0f1f3d]">Tanjung Priok, ID</span>
              <span className="text-[10px] text-[#64748b]">Departed • Apr 18</span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-[#fef2f2] text-[#c8102e] border border-[#fecaca] flex items-center justify-center mb-1.5 shadow-sm animate-pulse">
                <Ship className="w-4 h-4" />
              </div>
              <span className="font-bold text-[#0f1f3d]">Singapore Strait</span>
              <span className="text-[10px] text-[#c8102e] font-semibold">In Transit • Sea</span>
            </div>

            <div className="flex flex-col items-center opacity-60">
              <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 border border-slate-200 flex items-center justify-center mb-1.5">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="font-bold text-[#0f1f3d]">Rotterdam, NL</span>
              <span className="text-[10px] text-[#64748b]">ETA • May 04</span>
            </div>
          </div>

          <div className="mt-2 pt-3 border-t border-[#edf1f7] flex items-center justify-between text-xs">
            <span className="text-[#64748b] flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              Update satelit 24 menit lalu
            </span>
            <a
              href="https://www.rdx-interlog.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c8102e] hover:underline font-bold text-xs flex items-center gap-1"
            >
              Customer Portal →
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
