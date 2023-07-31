import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h2><Image src='/torta-b&w.svg' alt='tortaCMS logo' width={80} height={80} />tortaCMS</h2>
        <span>
          <BsTwitter size={34} />
          <FaLinkedin size={36} />
          <BsGithub size={34} />
        </span>
      </div>
    </footer>
  )
}

export default Footer