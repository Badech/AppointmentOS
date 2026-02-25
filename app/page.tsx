import Hero from '@/components/Hero'
import HiddenRevenueLeak from '@/components/HiddenRevenueLeak'
import CostOfDoingNothing from '@/components/CostOfDoingNothing'
import Workflow from '@/components/Workflow'
import ExampleScenario from '@/components/ExampleScenario'
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
      <HiddenRevenueLeak />
      <CostOfDoingNothing />
      <Workflow />
      <ExampleScenario />
      <Demo />
      <Results />
      <WhoItsFor />
      <WhatsIncluded />
      <Founder />
      <FinalCTA />
    </main>
  )
}
