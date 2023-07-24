import About from '@/components/LandingPage/About'
import HeroSection from '../components/LandingPage/HeroSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className='darkened'>
        <About />
      </div>
    </>
  )
}
