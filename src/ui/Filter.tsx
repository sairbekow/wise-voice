'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useLaw } from '@/store/useLaw'
import { useTranslation } from 'next-i18next'

export default function Filter() {
  const {t} = useTranslation()
  const { filter, setFilter } = useLaw()

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(
      event.target.value as '' | 'likes' | 'views' | 'newest' | 'oldest'
    )
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{t('filter')}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filter}
          label="filter"
          onChange={handleChange}
        >
          <MenuItem value={'views'}>{t('views')}</MenuItem>
          <MenuItem value={'likes'}>{t('likes')}</MenuItem>
          <MenuItem value={'oldest'}>{t('oldest')}</MenuItem>
          <MenuItem value={'newest'}>{t('newest')}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
