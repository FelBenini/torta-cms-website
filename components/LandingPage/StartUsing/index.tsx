'use client'
import styles from './styles.module.scss'
import React, {useState, useEffect} from 'react'
import Image from 'next/image'

const StartUsing = () => {
  const [colors, setColors] = useState({
    primary: '',
    secondary: '',
    third: '',
    bg: ''
  })
  const [src, setSrc] = useState('/torta-afternoon.svg')
  const [title, setTitle] = useState('tonight')

  useEffect(() => {
    const time = new Date(Date.now())
    console.log('use effect')
    if (time.getHours() < 13) {
      setSrc('/torta-day.svg')
      setColors({
        primary: '#EC9C1D',
        secondary: '#EB7619',
        third: '#D76B13',
        bg: '#72430B65'
      })
      setTitle('this morning')
    } else if (time.getHours() < 19) {
      setSrc('/torta-afternoon.svg')
      setColors({
        primary: '#FF456B',
        secondary: '#F31168',
        third: '#CA1D5A',
        bg: '#8E113E65'
      })
      setTitle('this afternoon')
    } else {
      setSrc('/torta-night.svg')
      setColors({
        primary: '#2AB1EB',
        secondary: '#0D5AD9',
        third: '#1F8ACC',
        bg: '#122A4A'
      })
      setTitle('tonight')
    }
  }, [])
  return (
    <section className={styles.startUsignSection} style={{background: `radial-gradient(${colors.bg} 0%, transparent 70%)`}}>
      <div className={styles.container}>
        <div>
          <h1>Start using tortaCMS<br/><b style={{color: colors.primary, filter: `drop-shadow(0px 0px 12px ${colors.third}79)`}}>{title}</b></h1>
          <button style={{background: `linear-gradient(to top left, ${colors.primary}, ${colors.secondary})`}}>See the Installation Guide</button>
        </div>
        <div className={styles.tortaLogo}>
        <Image src={src} alt='tortaCMS logo' layout='fill' />
      </div>
      </div>
    </section>
  )
}

export default StartUsing