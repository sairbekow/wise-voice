'use client'
import * as React from 'react'
import LawCard from '@/components/LawCard'
import { useLaw } from '@/store/useLaw'
import Loader from '@/ui/Loader'
import { Box, Typography } from '@mui/material'
import Filter from '@/ui/Filter'
import { insertionSort } from '@/utils/insertionSort'

export default function Home() {
  React.useEffect(() => {
    fetchLaws()
  }, [])

  const { laws, loading, filter, fetchLaws } = useLaw()

  let filteredItems = insertionSort(laws, filter)

  if (filter === 'oldest' || '') filteredItems = laws

  return (
    <main>
      <Typography variant="h2" sx={{ fontWeight: 600, textAlign: "center", fontSize: 36 }}>
        Мыйзамдар
      </Typography>
      {loading ? (
        <Box display={'flex'} justifyContent={'center'} mt={30}>
          <Loader />
        </Box>
      ) : (
        <div>
          <Filter />
          {filteredItems.map((law) => (
            <LawCard {...law} key={law.id} />
          ))}
        </div>
      )}
    </main>
  )
}
