'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useLaw } from '@/store/useLaw'

export default function Filter() {
  const { filter, setFilter } = useLaw()

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(
      event.target.value as '' | 'likes' | 'views' | 'newest' | 'oldest'
    )
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="filter"
          onChange={handleChange}
        >
          <MenuItem value={'views'}>Views</MenuItem>
          <MenuItem value={'likes'}>Likes</MenuItem>
          <MenuItem value={'oldest'}>Oldest</MenuItem>
          <MenuItem value={'newest'}>Newest</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
