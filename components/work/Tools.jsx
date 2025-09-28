"use client";

import React from "react";
import Image from "next/image";
import { Box, Grid, Typography, Paper } from "@mui/material";

// import your icons
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import javascriptIcon from "../assets/javascript.jpg";
import typescriptIcon from "../assets/typescript.png";
import nextjsIcon from "../assets/nextjs.png";
import reactIcon from "../assets/react.png";
import tailwindIcon from "../assets/tailwind.png";
import reduxIcon from "../assets/redux.png";
import zodIcon from "../assets/zod.png";
import githubIcon from "../assets/github.jpg";
import gitlabIcon from "../assets/gitlab.png";
import firebaseIcon from "../assets/firebase.png";
import mongodbIcon from "../assets/mongodb.png";
import nodejsIcon from "../assets/nodejs.png";

export default function SkillsSection() {
  const tools = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: javascriptIcon },
    { name: "TypeScript", icon: typescriptIcon },
    { name: "Next.js", icon: nextjsIcon },
    { name: "React", icon: reactIcon },
    { name: "Tailwind CSS", icon: tailwindIcon },
    { name: "Redux", icon: reduxIcon },
    { name: "Zod", icon: zodIcon },
    { name: "GitHub", icon: githubIcon },
    { name: "GitLab", icon: gitlabIcon },
    { name: "Firebase", icon: firebaseIcon },
    { name: "MongoDB", icon: mongodbIcon },
    { name: "Node.js", icon: nodejsIcon },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 3, md: 8 },
        backgroundColor: "background.default",
      }}
      aria-labelledby="skills-heading"
    >
      <Typography
        id="skills-heading"
        variant="h4"
        sx={{ fontWeight: 800, mb: { xs: 4, md: 6 } }}
      >
        Skills
      </Typography>

      <Grid
        container
        spacing={{ xs: 3, sm: 4, md: 6 }}
        alignItems="center"
        justifyContent="center"
      >
        {tools.map((t) => {
          const src = t.icon?.src ?? t.icon;

          return (
            <Grid
              key={t.name}
              item
              xs={6}
              sm={4}
              md={3}
              lg={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 1.5,
                  width: "100%",
                  maxWidth: 160,
                }}
              >
                <Paper
                  elevation={0}
                  role="img"
                  aria-label={t.name}
                  tabIndex={0}
                  sx={{
                    width: 72,
                    height: 72,
                    borderRadius: "50%",
                    display: "grid",
                    placeItems: "center",
                    border: 1,
                    borderColor: "divider",
                    backgroundColor: "transparent",
                    transition: "transform 200ms ease, box-shadow 200ms ease",
                    "&:hover, &:focus": {
                      transform: "translateY(-6px) scale(1.04)",
                      boxShadow: 3,
                    },
                  }}
                >
                  <Box sx={{ width: 44, height: 44, position: "relative" }}>
                    <Image
                      src={src}
                      alt={t.name}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </Paper>

                <Typography
                  variant="body2"
                  align="center"
                  sx={{ color: "text.secondary", fontSize: 13 }}
                >
                  {t.name}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
