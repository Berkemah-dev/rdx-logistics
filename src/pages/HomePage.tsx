import React, { useEffect } from 'react'
import { HeroSection } from '../components/home/HeroSection'
import { TrackShipmentBar } from '../components/home/TrackShipmentBar'
import { InfiniteMarquee } from '../components/common/InfiniteMarquee'
import { CapabilitiesGrid } from '../components/home/CapabilitiesGrid'
import { IndustrySectors } from '../components/home/IndustrySectors'
import { MetricsSection } from '../components/home/MetricsSection'
import { InsightsSection } from '../components/home/InsightsSection'
import { CTABanner } from '../components/home/CTABanner'

export const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'RDX Logistics | International Freight Forwarder & Customs Brokerage'
  }, [])

  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <TrackShipmentBar />
      <InfiniteMarquee />
      <CapabilitiesGrid />
      <IndustrySectors />
      <MetricsSection />
      <InsightsSection />
      <CTABanner />
    </div>
  )
}
