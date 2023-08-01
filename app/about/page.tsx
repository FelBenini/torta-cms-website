import React from 'react'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote/rsc'
import styles from './styles.module.scss'
import Link from 'next/link'

export const revalidate = 10

const fetchContent = async () => {
  const res = await fetch(`${process.env.TORTACMS_HOST}/api/page/About-tortaCMS`)
  const json = await res.json()
  return json
}

const components = {
  a: (props: any) => <Link {...props} />
}

const About = async () => {
  const post = await fetchContent()
  return (
    <section className={styles.aboutSection}>
      <div>
        <h1>{post.title}</h1>
        <MDXRemote components={components} source={post.content}/>
      </div>
    </section>
  )
}

export default About