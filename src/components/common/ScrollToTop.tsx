import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-7 right-7 z-50 w-12 h-12 rounded-full bg-[#080e2d]/90 backdrop-blur-md border border-white/15 text-white hover:text-white hover:bg-[#c8102e] hover:border-[#c8102e] shadow-xl hover:shadow-2xl hover:shadow-[#c8102e]/40 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 group cursor-pointer animate-in fade-in zoom-in duration-200"
    >
      <ArrowUp className="w-5 h-5 text-slate-200 group-hover:text-white group-hover:-translate-y-0.5 transition-transform" />
    </button>
  )
}
