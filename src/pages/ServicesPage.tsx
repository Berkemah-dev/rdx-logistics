import React, { useEffect } from 'react'
import { PageHero } from '../components/layout/PageHero'
import { ServiceCards } from '../components/services/ServiceCards'
import { ShipmentRouteSimulator } from '../components/services/ShipmentRouteSimulator'
import { FAQAccordion } from '../components/services/FAQAccordion'
import { CTABanner } from '../components/home/CTABanner'

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Freight Forwarding Services | RDX Logistics'
  }, [])

  return (
    <div className="flex flex-col w-full">
      <PageHero
        tag="End-to-End Capabilities"
        title="Comprehensive"
        highlightTitle="Logistics Services"
        description="Delivering absolute reliability, full regulatory customs compliance, and complete visibility across ocean, air, and inland transportation networks."
        breadcrumbCurrent="Services"
      />
      <ServiceCards />
      <ShipmentRouteSimulator />
      <FAQAccordion />
      <CTABanner />
    </div>
  )
}
