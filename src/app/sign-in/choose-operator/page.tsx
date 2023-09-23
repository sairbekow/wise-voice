'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Link from 'next/link'
import Image from 'next/image'
import { Routes } from '@/models/routes'
import megacomImg from '@/assets/megacom.png'
import oImg from '@/assets/o.jpg'
import beelineImg from '@/assets/beeline.jpg'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'

const LinkStyled = styled(Link)`
  
`

const ImageStyled = styled(Image)`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;
`
export default function SignIn() {
  return (
    <Container component="main" maxWidth="xs">
      <Typography variant="h4">
        Выбери свой мобильный оператор
      </Typography>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: 15,
        }}
      >
        <LinkStyled href="#">
          <ImageStyled src={megacomImg} alt="megacom"/>
        </LinkStyled>
        <LinkStyled href={Routes.SIGN_IN}>
          <ImageStyled src={oImg}  alt="o!"/>
        </LinkStyled>
        <LinkStyled href="#">
          <ImageStyled src={beelineImg}  alt="beeline"/>
        </LinkStyled>
      </Box>
    </Container>
  )
}
