'use client'
import * as React from 'react'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import { Box, Button } from '@mui/material'
import { useLaw } from '@/store/useLaw'
import { MdDelete } from 'react-icons/md'
import { useTranslation } from 'next-i18next'

export default function SearchInput() {
  const { t } = useTranslation()
  const { search, setSearch } = useLaw()

  const handleChange = (event: any) => {
    setSearch(event.target.value)
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <SearchIcon sx={{ color: 'action.active', mr: 1 }} />
      <TextField
        id="input-with-sx"
        variant="standard"
        placeholder={t('search') + '...'}
        size="medium"
        // fullWidth
        value={search}
        onChange={handleChange}
        sx={{ minWidth: 500 }}
      />
      <Button onClick={() => setSearch('')}>
        <MdDelete size={24} />
      </Button>
    </Box>
  )
}
