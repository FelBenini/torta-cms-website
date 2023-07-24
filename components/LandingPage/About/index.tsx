import React from 'react'
import styles from './styles.module.scss'
import Card from '@/components/3dCard'
import { FiDatabase } from 'react-icons/fi'
import { FaCubes } from 'react-icons/fa'
import { AiOutlineApi } from 'react-icons/ai'
import { PiLightningBold } from 'react-icons/pi'
import { BiGitBranch } from 'react-icons/bi'
import { TbPuzzleFilled } from 'react-icons/tb'

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <Card id='cardAbout'>
        <div className={styles.cardArea}>
          <h5><FiDatabase size={24} /> Use the database you want</h5>
          <h6>Works with SQL and NOSQL databases</h6>
          <h5><FaCubes size={24} /> Build with your favorite framework</h5>
          <h6>Build the frontend of your blog with any framework you want</h6>
          <h5><AiOutlineApi size={24} />JSON API</h5>
          <h6>Build all your blog features with our easy to integrate JSON API</h6>
        </div>
      </Card>
      <div className={styles.description}>
        <h2>What is tortaCMS?</h2>
        <p>tortaCMS is a content management system that makes it easier for developers to bootstrap a full-stack blog! All you need is NodeJS and a database!</p>
        <hr/>
        <div className={styles.listage}>
          <span>
            <span className={styles.icon}><PiLightningBold size={32} /></span>
            <p>Easy to setup</p>
          </span>
          <span>
            <span className={styles.icon}><BiGitBranch size={32} /></span>
            <p>Open Source</p>
          </span>
          <span>
            <span className={styles.icon}><TbPuzzleFilled size={28} /></span>
            <p>Use your favorite database<br/> and framework</p>
          </span>
        </div>
      </div>
    </section>
  )
}

export default About