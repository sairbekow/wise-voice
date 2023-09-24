'use client'

import * as React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import CreateButton from '../ui/CreateButton'
import AuthButton from '../ui/AuthButton'
import { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import Image from "next/image"
import { Box } from '@mui/material'
import logoImg from "@/assets/logo.png"

const ToolbarStyled = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  border-bottom: 1px;
  background-color: #fff;
`

export default function Header() {
  const [initialRenderComplete, setInitialRenderComplete] = useState<boolean>(false);

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  if (!initialRenderComplete) return <></>;

  return (
    <React.Fragment>
      <ToolbarStyled >
        <Box>
          <Box sx={{display: "flex", gap: 5, alignItems: 'center'}}>
            <Image src={logoImg} alt="logo" width={50} height={50}/>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="left"
              noWrap
              sx={{ flex: 1, fontWeight: 700 }}
            >
              Демилге
            </Typography>
          </Box>
        </Box>
        <Box sx={{display: "flex", gap: 5, alignItems: 'center'}}>
          <CreateButton />
          <AuthButton />
          <LanguageSwitcher />
        </Box>
      </ToolbarStyled>
    </React.Fragment>
  )
}
