import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a1329] text-slate-400 border-t border-[#1e293b]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1: Brand */}
          <div className="space-y-5">
            <div className="bg-white px-3 py-1.5 rounded-lg inline-flex items-center shadow-sm">
              <img
                src="/images/logo.png"
                alt="RDX Logistics"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              <strong className="text-white">PT. Radix International Logistics</strong> — Your trusted premier gateway connecting Indonesia and international trade with precision customs clearance and multimodal freight forwarding.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/rdx-interlog/?originalSubdomain=id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#c8102e] hover:bg-[#c8102e]/20 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.8v8.37h-2.8v-8.37M7.86 6.5a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#c8102e] hover:bg-[#c8102e]/20 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-[#c8102e] hover:bg-[#c8102e]/20 transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 border-l-2 border-[#c8102e] pl-3">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#c8102e]">•</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#c8102e]">•</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#c8102e]">•</span> Freight Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-[#c8102e]">•</span> Contact & RFQ
                </Link>
              </li>
              <li>
                <a
                  href="https://www.rdx-interlog.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-300"
                >
                  <span className="text-[#c8102e]">•</span> Customer Portal <ArrowUpRight className="w-3 h-3 text-[#c8102e]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 border-l-2 border-[#c8102e] pl-3">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white transition-colors">Ocean Freight (FCL / LCL)</li>
              <li className="hover:text-white transition-colors">Air Freight Expedited</li>
              <li className="hover:text-white transition-colors">Customs Clearance (PPJK)</li>
              <li className="hover:text-white transition-colors">Door-to-Door Multimodal</li>
              <li className="hover:text-white transition-colors">Cold Chain & Pharma Cargo</li>
              <li className="hover:text-white transition-colors">Project & Heavy Lift Cargo</li>
            </ul>
          </div>

          {/* Col 4: Jakarta Office Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 border-l-2 border-[#c8102e] pl-3">
              Headquarters
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#ef4444] shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-300">
                  PT. RADIX INTERNATIONAL LOGISTICS<br />
                  JL. TEH NO. 3C, 3RD FLOOR<br />
                  JAKARTA BARAT, INDONESIA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#ef4444] shrink-0" />
                <a href="tel:02138873060" className="hover:text-white transition-colors font-medium text-slate-200">
                  021 - 38873060
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#ef4444] shrink-0" />
                <a href="mailto:quote@rdx-interlog.com" className="hover:text-white transition-colors text-slate-200">
                  quote@rdx-interlog.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6 bg-[#060d1d] text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} RDX LOGISTICS (PT. Radix International Logistics). All Rights Reserved.</p>
          <div className="flex items-center gap-6 text-slate-400">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">Compliance & PPJK</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
