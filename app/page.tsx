import About from '@/components/LandingPage/About'
import HeroSection from '../components/LandingPage/HeroSection'
import Connector from '@/components/Connector'

export const metadata = {
  title: 'tortaCMS',
  description: 'tortaCMS, the headless CMS that got your back(end)',
}

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
