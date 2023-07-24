import About from '@/components/LandingPage/About'
import HeroSection from '../components/LandingPage/HeroSection'
import Connector from '@/components/Connector'

export default function Home() {
  return (
    <>
      <HeroSection />
      <Connector start={'frameworksSection'} end='cardAbout' />
      <div className='darkened'>
        <About />
      </div>
    </>
  )
}
