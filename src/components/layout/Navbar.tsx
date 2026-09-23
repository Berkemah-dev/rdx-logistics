import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { User, Menu, X, ArrowUpRight, Phone, Shield } from 'lucide-react'
import { cn } from '../../lib/utils'

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact & RFQ', href: '/contact' },
  ]

  return (
    <>
      {/* Top micro-bar for enterprise contact */}
      <div className="hidden lg:block bg-[#0f1f3d] py-2 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-white/90 font-medium">
              <Shield className="w-3.5 h-3.5 text-[#ef4444]" />
              PT. Radix International Logistics — Licensed Custom Brokerage (PPJK)
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">Operational Hub: Jakarta, Indonesia</span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="tel:02138873060"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#ef4444]" />
              <span className="font-semibold text-white">(021) 3887-3060</span>
            </a>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">Mon - Fri: 09:00 - 18:00 WIB</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar - Fresh White Corporate Style */}
      <header
        className={cn(
          'sticky top-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b border-[#e2e8f0]',
          scrolled
            ? 'shadow-[0_4px_20px_rgba(15,31,61,0.08)] py-3'
            : 'py-4'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/images/logo.png"
              alt="RDX Logistics"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:flex flex-col border-l border-[#e2e8f0] pl-3">
              <span className="text-xs font-bold tracking-wider uppercase text-[#0f1f3d]">
                Logistics
              </span>
              <span className="text-[10px] text-[#64748b] tracking-wide font-medium">
                International Freight
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-[#f4f7fc] p-1 rounded-full border border-[#e2e8f0]">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200',
                    isActive
                      ? 'bg-[#c8102e] text-white shadow-sm'
                      : 'text-[#334155] hover:text-[#0f1f3d] hover:bg-white'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Right Action: Customer Portal */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://www.rdx-interlog.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold bg-[#0f1f3d] hover:bg-[#1e293b] text-white transition-all duration-200 shadow-sm group"
            >
              <User className="w-3.5 h-3.5 text-[#f87171] group-hover:scale-110 transition-transform" />
              <span>Customer Portal</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#f4f7fc] border border-[#e2e8f0] text-[#0f1f3d] hover:bg-[#e2e8f0] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#e2e8f0] px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'block px-4 py-3 rounded-lg text-sm font-semibold transition-colors',
                    isActive
                      ? 'bg-[#fef2f2] text-[#c8102e]'
                      : 'text-[#334155] hover:bg-[#f4f7fc] hover:text-[#0f1f3d]'
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="pt-3 border-t border-[#e2e8f0]">
              <a
                href="https://www.rdx-interlog.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-bold bg-[#0f1f3d] hover:bg-[#1e293b] text-white shadow-sm"
              >
                <User className="w-4 h-4 text-[#f87171]" />
                Customer Portal Login
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
