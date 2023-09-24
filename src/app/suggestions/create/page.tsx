'use client'
import { useLaw } from '@/store/useLaw'
import { Button, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'

const RaiseLaw = () => {
  const {t} = useTranslation()
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const { addLaw } = useLaw()

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
          label={t('title')}
          fullWidth
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          id="outlined-controlled"
          label={t("description")}
          fullWidth
          multiline
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <Button
          variant="contained"
          size="medium"
          fullWidth
          onClick={() => {
            addLaw(7, title, content)
            router.push('/')
          }}
        >
          {t('send')}
        </Button>
      </Box>
    </Box>
  )
}

export default RaiseLaw
