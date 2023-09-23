'use client'
import * as React from 'react'
import LawCard from '@/components/LawCard'
import { useLaw } from '@/store/store'
import Loader from '@/ui/Loader'
import { Box } from '@mui/material'

export default function Home() {
  React.useEffect(() => {
    fetchLaws()
  }, [])

  const { laws, loading, error, fetchLaws } = useLaw()

  console.log(laws)
  return (
    <main>
      {loading ? (
        <Box display={'flex'} justifyContent={'center'}>
          <Loader />
        </Box>
      ) : (
        <div>
          {laws.map((law) => (
            <LawCard {...law} />
          ))}
        </div>
      )}
    </main>
  )
}
