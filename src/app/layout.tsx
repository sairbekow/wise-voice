'use client'

import * as React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import Container from '@mui/material/Container'
import Header from '@/components/Header'
import ThemeRegistry from '@/theme/ThemeRegistry'
import '../../next-i18next.config'
import '@/i18n'
import SimpleBottomNavigation from '@/components/BottomNavigation'
import Sidebar from '@/components/Sidebar'
import { Box, Grid, useMediaQuery } from '@mui/material'

interface IProps {
  children: React.ReactNode
}

const sidebar = {
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
}

export default function RootLayout({ children }: IProps) {
  const matches = useMediaQuery('(max-width:1280px)')
  return (
    <html lang="kg">
      <body style={{ height: '100%' }}>
          <React.Suspense fallback={<div>Loading...</div>}>
            <ThemeRegistry>
              <Box
                component={'div'}
                sx={{ display: 'flex', flexDirection: 'column' }}
              >
                <Container maxWidth="lg">
                  <Header />
                  <Grid container spacing={2} gap={1} item={true}>
                    <Grid xs={0} md={2} lg={2} item={true}>
                      {!matches && (
                        <Sidebar
                          description={sidebar.description}
                          social={sidebar.social}
                        />
                      )}
                    </Grid>
                    <Grid
                      xs={12}
                      md={9}
                      lg={9}
                      gap={1}
                      justifyContent="center"
                      item={true}
                    >
                      {children}
                    </Grid>
                    {matches && (
                      <Grid xs={12} gap={1} item={true}>
                        <SimpleBottomNavigation />
                      </Grid>
                    )}
                  </Grid>
                  <Grid
                    xs={12}
                    md={9}
                    lg={9}
                    gap={1}
                    justifyContent="center"
                    item={true}
                  >
                    {children}
                  </Grid>
                  {matches && (
                    <Grid xs={12} gap={1} item={true}>
                      <SimpleBottomNavigation />
                    </Grid>
                  )}
                </Grid>
              </Container>
              {/* <Footer
                title="Footer"
                description="Something here to give the footer a purpose!"
              /> */}
            </Box>
          </ThemeRegistry>
        </React.Suspense>
      </body>
    </html>
  )
}
