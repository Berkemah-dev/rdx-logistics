import React, { useEffect } from 'react'
import { PageHero } from '../components/layout/PageHero'
import { ContactInfoCards } from '../components/contact/ContactInfoCards'
import { RFQForm } from '../components/contact/RFQForm'
import { DepartmentDirectory } from '../components/contact/DepartmentDirectory'

export const ContactPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Contact & Request a Quote | RDX Logistics'
  }, [])

  return (
    <div className="flex flex-col w-full">
      <PageHero
        tag="Commercial Inquiries"
        title="Hubungi & Minta Penawaran"
        highlightTitle="Tarif"
        description="Terhubung langsung dengan tim direksi logistik dan spesialis kepabeanan PPJK kami. Dapatkan penawaran tarif freight, konsultasi rute, atau kerja sama operasional."
        breadcrumbCurrent="Contact & RFQ"
      />
      <ContactInfoCards />

      {/* Main Dual Contact & Form Section - Fresh Light Slate Canvas */}
      <section className="py-20 bg-[#f4f7fc] border-b border-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left RFQ Form */}
            <div className="lg:col-span-7">
              <RFQForm />
            </div>

            {/* Right Departments & Why Us */}
            <div className="lg:col-span-5">
              <DepartmentDirectory />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
