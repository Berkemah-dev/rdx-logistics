import React, { useEffect } from 'react'
import { PageHero } from '../components/layout/PageHero'
import { CompanyStory } from '../components/about/CompanyStory'
import { ServicePillars } from '../components/about/ServicePillars'
import { WhyPartnerWithUs } from '../components/about/WhyPartnerWithUs'
import { MissionVisionValues } from '../components/about/MissionVisionValues'
import { InteractiveWorldMap } from '../components/about/InteractiveWorldMap'
import { CTABanner } from '../components/home/CTABanner'

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'About Us | RDX Logistics (PT. Radix International Logistics)'
  }, [])

  return (
    <div className="flex flex-col w-full">
      <PageHero
        tag="Corporate Overview"
        title="Connecting Indonesian Business to"
        highlightTitle="The World"
        description="Founded on the principles of efficiency, compliance, and transparent communication. PT. Radix International Logistics delivers world-class freight solutions with localized regulatory mastery."
        breadcrumbCurrent="About Us"
      />
      <CompanyStory />
      <ServicePillars />
      <WhyPartnerWithUs />
      <MissionVisionValues />
      <InteractiveWorldMap />
      <CTABanner />
    </div>
  )
}
