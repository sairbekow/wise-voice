'use client'
import LawCard from '@/components/LawCard'
import { useLaw } from '@/store/store'
import SearchInput from '@/ui/SearchInput'
import Link from 'next/link'
import React from 'react'

const page = () => {
  const { laws } = useLaw()

  return (
    <div>
      <SearchInput />
      <div>
        {laws.map((item) => (
          <LawCard {...item} />
        ))}
      </div>
      {/* <iframe
        width={'100%'}
        height={500}
        src={`https://www.google.com/search?igu=1&ei=&q=${post.title
          .split(' ')
          .join('+')}`}
      ></iframe> */}
    </div>
  )
}

export default page
