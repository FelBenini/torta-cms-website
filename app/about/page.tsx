import React from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import styles from './styles.module.scss'
import Link from 'next/link'
import rehypeHighlight from 'rehype-highlight';

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
        <h2>{post.title}</h2>
        <MDXRemote 
        source={post.content}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: [rehypeHighlight],
          }
        }}
        />
      </div>
    </section>
  )
}

export default About