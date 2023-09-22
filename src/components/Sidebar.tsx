import * as React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { List, ListItem, ListItemText } from "@mui/material";

interface ILink {
  title: string;
  url: string;
}

interface SidebarProps {
  links: ILink[];
  description: string;
  social: ReadonlyArray<{
    icon: React.ElementType;
    name: string;
  }>;
  title: string;
}

export default function Sidebar(props: SidebarProps) {
  const { links, description, social, title } = props;

  return (
    <Grid item xs={12} md={12} lg={12}>
      <List dense={true}>
        {links.map((link) => (
          <ListItem sx={{paddingLeft: 0}}>
            <Link
              color="inherit"
              noWrap
              key={link.title}
              variant="body2"
              href={link.url}
              underline="none"
              sx={{ p: 0, flexShrink: 0 }}
            >
              <ListItemText primary={link.title} />
            </Link>
          </ListItem>
        ))}
      </List>

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        Social
      </Typography>
      {social.map((network) => (
        <Link
          display="block"
          variant="body1"
          href="#"
          key={network.name}
          sx={{ mb: 0.5 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </Link>
      ))}
    </Grid>
  );
}
