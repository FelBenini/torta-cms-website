import React from 'react'
import styles from './styles.module.scss'
import MarkdownParser from '@/components/Markdown'

export const revalidate = 10

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
        <MarkdownParser source={post.content} />
      </div>
    </section>
  )
}

export default About