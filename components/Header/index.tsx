'use client'
import React from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { FiSearch } from 'react-icons/fi'
import { BsTwitter, BsGithub } from 'react-icons/bs'

const Header = () => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
  }
  return (
    <header className={styles.header}>
      <nav>
        <div>
          <Link href='/docs'>Docs</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/about'>About</Link>
          <Link href='/themes'>Themes</Link>
        </div>
        <Link id={styles.headerLogo} href='/'>
          <h5><Image src='/torta-b&w.svg' alt='torta cms icon in grayscale' width={48} height={48} /> tortaCMS</h5>
        </Link>
        <div>
          <form onSubmit={handleSearch}>
            <input type='text' placeholder='Search the website...' />
            <button type='submit'><FiSearch color='#BEB8C3' size={20} /></button>
          </form>
          <BsTwitter size={28} />
          <BsGithub size={28} />
        </div>
      </nav>
    </header>
  )
}

export default Header