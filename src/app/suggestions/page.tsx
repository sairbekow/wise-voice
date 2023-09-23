'use client'
import LawCard from '@/components/LawCard'
import { useLaw } from '@/store/store'
import Loader from '@/ui/Loader'
import SearchInput from '@/ui/SearchInput'
import { Box } from '@mui/material'
import Link from 'next/link'
import React, { useEffect } from 'react'

const Suggestions = () => {
  const { fetchLaws, laws, loading, search } = useLaw()

  const filteredItems = laws.filter(
    (item) => item.title.includes(search) || item.content.includes(search)
  )

  useEffect(() => {
    fetchLaws()
  }, [])

  return (
    <div>
      <SearchInput />
      {loading ? (
        <Box display={'flex'} justifyContent={'center'} mt={30}>
          <Loader />
        </Box>
      ) : (
        <div>
          {filteredItems.map((item) => (
            <LawCard {...item} key={item.id}/>
          ))}
        </div>
      )}
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

export default Suggestions
