import React from 'react'
import styles from './styles.module.scss'


const FrameworksSection = () => {
  return (
    <section className={styles.frameworkSection}>
      <h3>Build your frontend with your<br/>favorite framework</h3>
      <div className={styles.slider}>
        <div className={styles.content}>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>
      </div>
    </section>
  )
}

export default FrameworksSection