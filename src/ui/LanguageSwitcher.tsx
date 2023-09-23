'use client'
import React from 'react'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useTranslation } from 'next-i18next'

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation()
  const [language, setlanguage] = React.useState('kg')

  const handleChange = (event: SelectChangeEvent) => {
    setlanguage(event.target.value as string)
    i18n.changeLanguage(event.target.value)
  }

  return (
    <Box sx={{ minWidth: 70, ml: 2 }}>
      <FormControl variant="standard">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={language}
          label="Language"
          onChange={handleChange}
          size="small"
          sx={{
            border: 'none',
          }}
        >
          <MenuItem value={'kg'}>Kg</MenuItem>
          <MenuItem value={'en'}>En</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
