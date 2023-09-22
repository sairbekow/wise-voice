import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import Sidebar from "./Sidebar";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import SimpleBottomNavigation from "./BottomNavigation";

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  links: [
    { title: "Мыйзамдар", url: "#" },
    { title: "Мыйзам кошуу", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

interface IProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IProps) => {
  const matches = useMediaQuery("(max-width:1280px)");

  return (
    <Grid container spacing={2} gap={1}>
      {!matches && (
        <Grid md={3}>
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            links={sidebar.links}
            social={sidebar.social}
          />
        </Grid>
      )}
      <Grid md={6} gap={1}>{children}</Grid>
      <Grid md={3} gap={1}></Grid>
      {matches && (
        <Grid xs={12} gap={1}>
          <SimpleBottomNavigation />
        </Grid>
      )}
    </Grid>
  );
};

export default Layout;
