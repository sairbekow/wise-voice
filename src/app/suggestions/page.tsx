'use client'
import Loader from '@/ui/Loader'
import SearchInput from '@/ui/SearchInput'
import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { useDocument } from '@/store/useDocment'
import DocumentCard from '@/components/DocumentCard'

const Suggestions = () => {
  const { fetchDocuments, documents, loading, search } = useDocument()

  const filteredItems = documents.filter(
    (item) => item.titleKg.includes(search) || item.contentKg.includes(search)
  )

  useEffect(() => {
    fetchDocuments()
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
            <DocumentCard {...item} key={item.id}/>
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
