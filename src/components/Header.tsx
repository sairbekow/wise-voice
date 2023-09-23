'use client'
import * as React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import { useTranslation } from 'next-i18next'
import SearchInput from '../ui/SearchInput'
import CreateButton from '../ui/CreateButton'
import AuthButton from '../ui/AuthButton'

export default function Header() {
  const { t, i18n } = useTranslation()

  return (
    <React.Fragment>
      <Toolbar
        sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: 5 }}
      >
        {/* <Button size="small">Subscribe</Button> */}
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
          {t('title')}
        </Typography>
        <CreateButton />
        <AuthButton />
        <LanguageSwitcher />
      </Toolbar>
    </React.Fragment>
  )
}
