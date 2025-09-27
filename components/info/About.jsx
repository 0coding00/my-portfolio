'use client'

import { Box, Typography } from "@mui/material";
import aboutImage from "../assets/about.png";
import Image from "next/image";

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, md: 8 },
        backgroundColor:"#eee"
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
              fontWeight: 900,
              fontSize: { xs: "2.2rem", sm: "3rem", md: "3.8rem", lg: "4.5rem" }, // More aggressive scaling
              lineHeight: 0.9,
              mb: 10,
              color: "#000",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              textAlign:"center"
            }}
      >
        About Me
      </Typography>

      {/* Responsive Row/Column */}
      <div
    className="flex flex-col md:flex-row justify-around items-center gap-10"
      >
        {/* Text Section */}
        <Box sx={{ width:{md:"50%"} }}>
          <Typography
            sx={{
              fontSize: { xs: "0.95rem", md: "1.1rem" },
              lineHeight: 1.8,
              textAlign: { xs: "center", md: "left" }, // center text on small screens
              color:"black"
            }}
          >
            Fifth-year Information Engineering student at the University of
            Aleppo, specializing in Frontend Development. Experienced in
            building responsive websites using React.js. Passionate about modern
            web development and creating user-friendly interfaces. Specialist in
            problem solving on Codeforces with more than 230 problems solved at
            different levels.
          </Typography>
        </Box>

        {/* Image Section */}
        <Box >
          <Image
            component="img"
            src={aboutImage}
            alt="About Me"
            width={300}
            className="flex justify-center items-center m-0"
          />
        </Box>
      </div>
    </Box>
  );
}
