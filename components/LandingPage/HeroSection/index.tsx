import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { FiArrowRight } from 'react-icons/fi'

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.titleContainer}>
        <div className={styles.logoContainer}><Image src='/torta-logo.svg' layout='fill' alt='torta cms logo pie icon' /></div>
        <h1>tortaCMS</h1>
      </div>
      <h4>The headless CMS that got your back(end)!</h4>
      <div className={styles.inline}>
        <button className={styles.getStartedButton}>Get Started <FiArrowRight size={20} style={{ marginLeft: 7 }} /></button>
        <span className={styles.gitHubButton}>
          <button><FaStar color='#FC9904' size={24} style={{ marginRight: 10 }} /> Give us a Star on GitHub <BsGithub style={{ marginLeft: 10 }} size={24} /></button>
        </span>
      </div>
      <p>Build your blog with <b>tortaCMS</b> and your favorite <b>framework</b></p>
    </section>
  )
}

export default HeroSection