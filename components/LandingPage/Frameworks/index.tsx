import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

const frameworks = [
  {name: 'React', src: '/frameworks/react.svg'},
  {name: 'Next', src: '/frameworks/nextjs.svg'},
  {name: 'Remix', src: '/frameworks/remix.svg'},
  {name: 'Gatsby', src: '/frameworks/gatsby.svg'},
  {name: 'Nuxt', src: '/frameworks/nuxt.svg'},
  {name: 'Vue', src: '/frameworks/vue.svg'},
  {name: 'Solid', src: '/frameworks/solid.svg'},
  {name: 'Angular', src: '/frameworks/angular.svg'},
  {name: 'Astro', src: '/frameworks/astro.svg'},
  {name: 'Svelte', src: '/frameworks/svelte.svg'}
]


const FrameworksSection = () => {
  return (
    <section className={styles.frameworkSection}>
      <h3>Build your frontend with your<br/>favorite <b>framework</b></h3>
      <div className={styles.bg}></div>
      <div className={styles.slider}>
        <div className={styles.content}>
          {frameworks.map((framework, index) => {
            return (
              <div key={index} className={styles.card}>
                <Image width={60} height={60} className={styles[framework.name]} alt={framework.name} src={framework.src} />
              </div>
            )
          })}
          {frameworks.map((framework, index) => {
            return (
              <div key={index} className={styles.card}>
                <Image width={60} className={styles[framework.name]} height={60} alt={framework.name} src={framework.src} />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FrameworksSection