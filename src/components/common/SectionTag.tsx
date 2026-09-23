import React from 'react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '../../lib/utils'

interface SectionTagProps {
  icon?: LucideIcon
  children: React.ReactNode
  variant?: 'red' | 'navy' | 'glass'
  className?: string
}

export const SectionTag: React.FC<SectionTagProps> = ({
  icon: Icon,
  children,
  variant = 'glass',
  className,
}) => {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200',
        variant === 'glass' &&
          'bg-white border border-[#e1e7f1] text-[#0f1f3d] shadow-sm',
        variant === 'red' &&
          'bg-[#fef2f2] border border-[#fecaca] text-[#b91c1c]',
        variant === 'navy' &&
          'bg-[#edf3fc] border border-[#d5e2f5] text-[#0f1f3d]',
        className
      )}
    >
      {Icon && <Icon className="w-3.5 h-3.5 text-[#c8102e]" />}
      <span>{children}</span>
    </div>
  )
}
