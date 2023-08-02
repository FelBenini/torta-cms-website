import React from 'react'
import styles from './styles.module.scss'
import MarkdownParser from '@/components/Markdown'
import Image from 'next/image'

export const revalidate = 10

export async function generateMetadata() {
  const res = await fetchContent()
  return {
    title: res.title,
    description: res.summary
  }
}

const fetchContent = async () => {
  const res = await fetch(`${process.env.TORTACMS_HOST}/api/page/About-tortaCMS`)
  const json = await res.json()
  return json
}

const About = async () => {
  const post = await fetchContent()
  return (
    <section className={styles.aboutSection}>
      <div>
        <h2>{post.title}</h2>
        <Image src={post.backgroundImage} width={400} height={150} alt='tortaCMS logo' style={{margin: '1.5rem auto', display: 'block'}}/>
        <MarkdownParser source={post.content} />
      </div>
    </section>
  )
}

export default About