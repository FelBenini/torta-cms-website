import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.titleContainer}>
        <div className={styles.logoContainer}><Image src='/torta-logo.svg' layout='fill' alt='torta cms logo pie icon' /></div>
        <h1>tortaCMS</h1>
      </div>
      <h4>The headless CMS that got your back(end)!</h4>
      <div className={styles.inline}>
        <Link className={styles.getStartedButton} href='/docs/quick-start'>
          Get Started <FiArrowRight size={20} style={{ marginLeft: 7 }} />
        </Link>
        <a href='https://github.com/FelBenini/torta-cms' className={styles.gitHubButton} target='blank'>
          <button><FaStar color='#FC9904' size={24} style={{ marginRight: 10 }} /> Give us a Star on GitHub <BsGithub style={{ marginLeft: 10 }} size={24} /></button>
        </a>
      </div>
      <p>Build your blog with <b>tortaCMS</b> and your favorite <b>framework</b></p>
      <div id='frameworksSection' className={styles.frameworks}>
        <Image src='/frameworks/react.svg' alt='React logo' width={32} height={32}/>
        <Image src='/frameworks/nextjs.svg' alt='Next' width={26} height={26}/>
        <Image src='/frameworks/remix.svg' alt='Remix' width={24} height={24}/>
        <Image src='/frameworks/gatsby.svg' alt='Gatsby' width={28} height={28}/>
        <Image className={styles.svelte} src='/frameworks/vue.svg' alt='Vue' width={26} height={26}/>
        <Image src='/frameworks/nuxt.svg' alt='Nuxt' width={32} height={32}/>
        <Image className={styles.angular} src='/frameworks/angular.svg' alt='Angular' width={32} height={32}/>
        <Image className={styles.svelte} src='/frameworks/svelte.svg' alt='Svelte' width={28} height={28}/>
        <Image className={styles.svelte} src='/frameworks/solid.svg' alt='Solid' width={28} height={28}/>
        <Image src='/frameworks/astro.svg' alt='Astro' width={28} height={28}/>
      </div>
    </section>
  )
}

export default HeroSection