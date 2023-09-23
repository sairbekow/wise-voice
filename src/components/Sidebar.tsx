import * as React from 'react'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { List, ListItem, ListItemText } from '@mui/material'
import { ROUTES } from '@/models/routes'

interface SidebarProps {
  description: string
  social: ReadonlyArray<{
<<<<<<< HEAD
    icon: React.ElementType
    name: string
  }>
  title: string
}

export default function Sidebar(props: SidebarProps) {
  const { description, social, title } = props
=======
    icon: React.ElementType;
    name: string;
  }>;
}

export default function Sidebar(props: SidebarProps) {
  const { description, social } = props;
>>>>>>> 413cc61 (documents started)

  return (
    <Grid item xs={12} md={12} lg={12}>
      <List dense={true}>
        {ROUTES.map((link) => (
          <ListItem sx={{ paddingLeft: 0 }} key={link.url}>
            <Link
              color="inherit"
              key={link.title}
              href={link.url}
              style={{ padding: 0, flexShrink: 0 }}
            >
              <ListItemText primary={link.title} sx={{ fontSize: '24px' }} />
            </Link>
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
      <Link href="/about-us">About us</Link>
    </Grid>
  )
}
