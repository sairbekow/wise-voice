'use client'
import { mainFeaturedPost as post } from "@/app/page";
import { Paper, Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <Paper
        sx={{
          position: "relative",
          backgroundColor: "grey.800",
          color: "#fff",
          mb: 4,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundImage: `url(${post.image})`,
        }}
      >
        {/* Increase the priority of the hero background image */}
        {/* {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />} */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: "rgba(0,0,0,.3)",
          }}
        />
        <Grid container>
          <Grid item md={6}>
            <Box
              sx={{
                position: "relative",
                p: { xs: 3, md: 6 },
                pr: { md: 0 },
              }}
            >
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                {post.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {post.description}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                inventore eligendi officia similique quo nihil minus dolor
                adipisci. Necessitatibus, ducimus! Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Officiis explicabo, voluptas
                laudantium inventore voluptatem vitae. Aperiam quidem
                praesentium, harum sunt soluta optio voluptatibus, molestias
                eveniet, fugiat nesciunt explicabo delectus. Officia.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
      {/* <script
        async
        src="https://cse.google.com/cse.js?cx=31ff4352fbb0e4184"
      ></script>
      <div className="gcse-search"></div> */}
      <iframe width={'100%'} height={500} src={`https://www.google.com/search?igu=1&ei=&q=${post.title.split(' ').join('+')}`}></iframe>
    </>
      );
};

export default page;
