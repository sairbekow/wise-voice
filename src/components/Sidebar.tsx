import * as React from 'react'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { Box, List, ListItem, ListItemText } from '@mui/material'
import { NavRoutes } from '@/models/routes'
import { styled } from '@mui/material/styles'

interface SidebarProps {
  social: ReadonlyArray<{ icon: React.ElementType; name: string }>
}

const LinkWrapper = styled(Box)`
  width: 100%;
  padding: 0 10px;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  height: 44px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 3px;
  border-radius: 8px;
  transition: 0.3s;

  &:hover {
    background-color: #fff;
  }
`

const LinkStyled = styled(Link)`
  width: 100%;
  padding: 0 !important;
  flex-shrink: 0;
  font-size: 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.palette.black.main};
`

export default function Sidebar(props: SidebarProps) {
  const { social } = props;

  return (
    <Grid item xs={12} md={12} lg={12}>
      <List>
        {NavRoutes.map((link) => (
          <ListItem sx={{ paddingLeft: 0 }} key={link.url}>
            <LinkWrapper>
              <LinkStyled key={link.title} href={link.url}>
                <ListItemText primary={link.title} sx={{ fontSize: '24px' }} />
              </LinkStyled>
            </LinkWrapper>
          </ListItem>
        ))}
      </List>

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {social.map((network) => (
        <Link href="#" key={network.name} style={{ marginBottom: '0.5px' }}>
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  )
}
