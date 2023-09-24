import React from 'react'
import PersonIcon from '@mui/icons-material/Person'
import { Button } from '@mui/material'
import Link from 'next/link'
import { Routes } from '@/models/routes'
import { styled } from '@mui/material/styles'

const LinkStyled = styled(Link)`
  width: 100%;
  font-size: 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.primary.main};
`

const AuthButton = () => {
  return (
    <Button
      variant="outlined"
      size="small"
      startIcon={<PersonIcon />}
      sx={{ m: 1 }}
    >
      <LinkStyled href="https://voter-cabinet.srs.kg/faceid/auth.xhtml">Катталуу</LinkStyled>
    </Button>
  )
}

export default AuthButton
