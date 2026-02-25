import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import Problem from '@/components/Problem'
import Workflow from '@/components/Workflow'
import EducationScenario from '@/components/EducationScenario'
import Demo from '@/components/Demo'
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
      <Workflow />
      <EducationScenario />
      <Demo />
      <Results />
      <WhoItsFor />
      <WhatsIncluded />
      <Founder />
      <FinalCTA />
    </main>
  )
}
