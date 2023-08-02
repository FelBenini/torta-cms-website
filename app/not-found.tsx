import Link from 'next/link'
import React from 'react'

const NotFoundPage = () => {
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: 'calc(90dvh - 120px)', backgroundColor: '#1C191E',
    backgroundImage:
      `radial-gradient(at 97% 1%, hsla(283, 81%, 50%, 0.2) 0px, transparent 50%),
      radial-gradient(at 52% 0%, hsla(306, 95%, 51%, 0.21) 0px, transparent 50%),
      radial-gradient(at 0% 0%, hsla(283, 81%, 50%, 0.2) 0px, transparent 50%);`  }}>
      <h1 style={{fontWeight: 800, fontSize: '5.5rem'}}>404</h1>
      <h5 style={{opacity: 0.8, marginTop: 4, textAlign: 'center'}}>this page does not exist</h5>
      <Link style={{fontSize: '1.2rem', marginTop: 24}} href='/'>Back To Home</Link>
    </div>
  )
}

export default NotFoundPage