'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

const MenuLink = ({title, url}: {
    title: string,
    url: string
}) => {
    const [activeState, setActiveState] = useState('inactive')
    const pathname = usePathname()

    useEffect(() => {
        if (pathname === url) {
            setActiveState('active')
        } else {
            setActiveState('inactive')
        }
    }, [pathname, url])

  return (
    <Link href={url} className={activeState} >{title}</Link>
  )
}

export default MenuLink