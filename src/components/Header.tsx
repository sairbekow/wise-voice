'use client'

import * as React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import { useTranslation } from 'next-i18next'
import CreateButton from '../ui/CreateButton'
import AuthButton from '../ui/AuthButton'
import { useEffect, useState } from 'react'

export default function Header() {
  const { t } = useTranslation()

  const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) return <></>;

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
