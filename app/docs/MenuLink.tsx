'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import styles from './menulink.module.scss'

const MenuLink = ({title, url}: {
    title: string,
    url: string
}) => {
    const [activeState, setActiveState] = useState(styles.inactive)
    const pathname = usePathname()

    useEffect(() => {
        if (pathname === url) {
            setActiveState(styles.active)
        } else {
            setActiveState(styles.inactive)
        }
    }, [pathname, url])

  return (
    <Link href={url} className={activeState} >{title}</Link>
  )
}

export default MenuLink