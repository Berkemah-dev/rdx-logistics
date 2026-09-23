import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { SectionTag } from '../common/SectionTag'

interface PageHeroProps {
  tag: string
  title: string
  highlightTitle?: string
  description: string
  breadcrumbCurrent: string
  bgPattern?: 'grid' | 'radial' | 'mesh'
}

export const PageHero: React.FC<PageHeroProps> = ({
  tag,
  title,
  highlightTitle,
  description,
  breadcrumbCurrent,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#f8fafd] to-[#f4f7fc] pt-16 pb-20 border-b border-[#e2e8f0]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#64748b] mb-6">
          <Link to="/" className="hover:text-[#0f1f3d] transition-colors font-medium">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="text-[#c8102e] font-semibold">{breadcrumbCurrent}</span>
        </nav>

        {/* Content */}
        <div className="max-w-3xl">
          <SectionTag variant="red" className="mb-4">
            {tag}
          </SectionTag>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f1f3d] tracking-tight leading-[1.15] mb-5">
            {title}{' '}
            {highlightTitle && (
              <span className="text-[#c8102e]">
                {highlightTitle}
              </span>
            )}
          </h1>
          <p className="text-base sm:text-lg text-[#64748b] leading-relaxed font-normal">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
