import MarkdownParser from '@/components/Markdown'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'
import styles from '../layout.module.scss'

export const revalidate = 10

type Props = {
  params: {
    slug: string
  }
}

const fetchData = async (slug: string) => {
  const res = await fetch(`${process.env.TORTACMS_HOST}/api/page/${slug}`)
  if (res.status !== 200) {
    return null
  }
  const data = await res.json()
  if (!data.categories.includes('docs')) {
    return null
  }
  return data
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const data = await fetchData(props.params.slug)
  if (!data) {
    return {
      title: "tortaCMS - Page not found",
      description: "This page does not exist, check if the URL is correct"
    }
  }
  return {
    title: data.title + ' - tortaCMS Docs',
    description: data.summary
  }
}

const DocPage = async (props: Props) => {
  const data = await fetchData(props.params.slug)
  console.log(data)
  if (!data) {
    return notFound()
  }
  return (
    <>
      <h1 className={styles.bigHeader}>{data.title}</h1>
      <MarkdownParser source={data.content} />
    </>
  )
}

export default DocPage
