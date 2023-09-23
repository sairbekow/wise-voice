'use client'
import * as React from 'react'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'
import { Box } from '@mui/material'

export default function SearchInput() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <SearchIcon sx={{ color: 'action.active', mr: 1 }} />
      <TextField id="input-with-sx" variant='standard' placeholder='Search...' size='medium' fullWidth />
    </Box>
  )
}