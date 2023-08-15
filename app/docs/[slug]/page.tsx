import MarkdownParser from '@/components/Markdown'
import { notFound } from 'next/navigation'
import React from 'react'

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

const DocPage = async (props: Props) => {
  const data = await fetchData(props.params.slug)
  if (!data) {
    return notFound()
  }
  return (
    <MarkdownParser source={data.content} />
  )
}

export default DocPage