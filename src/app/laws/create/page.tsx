'use client'
import { useLaw } from '@/store/useLaw'
import { Button, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'

const CreateLaw = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const [titleKg, setTitleKg] = useState('')
  const [contentKg, setContentKg] = useState('')
  const [titleRu, setTitleRu] = useState('')
  const [contentRu, setContentRu] = useState('')

  const { addRule } = useLaw()

  return (
    <Box component={'div'} display={'flex'} justifyContent={'center'}>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        minWidth={400}
        rowGap={2}
      >
        <Typography>{t('add-post')}</Typography>
        <TextField
          id="outlined-controlled"
          label={t('title') + ' kg'}
          fullWidth
          value={titleKg}
          onChange={(event) => setTitleKg(event.target.value)}
        />
        <TextField
          id="outlined-controlled"
          label={t('title') + ' ru'}
          fullWidth
          value={titleRu}
          onChange={(event) => setTitleRu(event.target.value)}
        />
        <TextField
          id="outlined-controlled"
          label={t('description') + ' kg'}
          fullWidth
          multiline
          value={contentKg}
          onChange={(event) => setContentKg(event.target.value)}
        />
        <TextField
          id="outlined-controlled"
          label={t('description') + ' ru'}
          fullWidth
          multiline
          value={contentRu}
          onChange={(event) => setContentRu(event.target.value)}
        />
        <Button
          variant="contained"
          size="medium"
          fullWidth
          onClick={() => {
            addRule(7, titleKg, contentKg, titleRu, contentRu)
            router.push('/')
          }}
        >
          {t('send')}
        </Button>
      </Box>
    </Box>
  )
}

export default CreateLaw
