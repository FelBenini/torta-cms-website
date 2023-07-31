import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h2><Image src='/torta-b&w.svg' alt='tortaCMS logo' width={80} height={80} />tortaCMS</h2>
      </div>
    </footer>
  )
}

export default Footer