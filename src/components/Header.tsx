'use client'

import * as React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import { useTranslation } from 'next-i18next'
import CreateButton from '../ui/CreateButton'
import AuthButton from '../ui/AuthButton'
import { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'

const ToolbarStyled = styled(Toolbar)`
  margin-bottom: 5px;
  border-bottom: 1px;
  background-color: #fff;
`

export default function Header() {
  const { t } = useTranslation()

  const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) return <></>;

  return (
    <React.Fragment>
      <ToolbarStyled>
        {/* <Button size="small">Subscribe</Button> */}
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="left"
          noWrap
          sx={{ flex: 1 }}
        >
          {t('name')}
        </Typography>
        <CreateButton />
        <AuthButton />
        <LanguageSwitcher />
      </ToolbarStyled>
    </React.Fragment>
  )
}
