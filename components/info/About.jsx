'use client';

import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import aboutImage from "../assets/about.png";
  const srcOf = (img) => (typeof img === "string" ? img : img?.src ?? img);

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, md: 8 },
        backgroundColor: "#eee",
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 900,
          fontSize: { xs: "2.2rem", sm: "3rem", md: "3.8rem", lg: "4.5rem" },
          lineHeight: 0.9,
          mb: 10,
          color: "#000",
          textTransform: "uppercase",
          letterSpacing: "-0.02em",
          textAlign: "center",
        }}
      >
        About Me
      </Typography>

      {/* Responsive Row/Column */}
      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="space-around"
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        {/* Text Section */}
        <Grid item xs={12} md={6} sx={{ width: { md: "50%" } }}>
          <Typography
            sx={{
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              lineHeight: 1.8,
              textAlign: { xs: "center", md: "left" },
              color: "black",
            }}
          >
            Fifth-year Information Engineering student at the University of
            Aleppo, specializing in Frontend Development. Experienced in
            building responsive websites using React.js. Passionate about modern
            web development and creating user-friendly interfaces. Specialist in
            problem solving on Codeforces with more than 230 problems solved at
            different levels.
          </Typography>
        </Grid>

        {/* Image Section */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Use Box component="img" for simple responsive images */}
          <Box
            component="img"
            src={srcOf(aboutImage)}
            alt="About Me"
            sx={{
              width: { xs: 220, sm: 260, md: 300 },
              height: "auto",
              display: "block",
              borderRadius: 2,
              objectFit: "cover",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
