import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import Problem from '@/components/Problem'
import Positioning from '@/components/Positioning'
import Workflow from '@/components/Workflow'
import EducationScenario from '@/components/EducationScenario'
import Results from '@/components/Results'
import WhoItsFor from '@/components/WhoItsFor'
import WhatsIncluded from '@/components/WhatsIncluded'
import Founder from '@/components/Founder'
import FinalCTA from '@/components/FinalCTA'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustStrip />
      <Problem />
      <Positioning />
      <Workflow />
      <EducationScenario />
      <Results />
      <WhoItsFor />
      <WhatsIncluded />
      <Founder />
      <FinalCTA />
    </main>
  )
}
