'use client'

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import profileImage from "../assets/profile.jpg";

export default function Landing() {
  return (
    <Box
      id="landingPage"
      sx={{
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          px: { xs: 2, sm: 4, md: 6, lg: 8 },
          py: { xs: 4, md: 6, lg: 8 },
          gap: { xs: 6, md: 8, lg: 10 },
          flexDirection: { xs: "column", lg: "row" },
          textAlign: "center",
        }}
      >
        {/* Left Side - Text Content */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { lg: "450px" },
            textAlign: { xs: "center", lg: "left" },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#666",
              fontSize: { xs: "0.9rem", sm: "1rem" },
              mb: 2,
              fontWeight: 400,
            }}
          >
            Hey, I'm YOUSEF KNIFATI,
          </Typography>

          <Typography
            component="h1"
            variant="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.2rem", sm: "3rem", md: "3.8rem", lg: "4.5rem" },
              lineHeight: 0.9,
              mb: 1,
              color: "#000",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
            }}
          >
            A{" "}
            <Typography
              component="span"
              sx={{
                color: "#7c3aed", // purple equivalent (you can swap to theme.palette.primary.main)
              fontWeight: 900,
              fontSize: { xs: "2.2rem", sm: "3rem", md: "3.8rem", lg: "4.5rem" },
              lineHeight: 0.9,
              mb: 1,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
              }}
            >
              FRONTEND
            </Typography>{" "}
            DEVELOPER
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "#666",
              fontSize: { xs: "1rem", sm: "1.5rem" },
              lineHeight: 1.6,
              mb: 4,
              maxWidth: "400px",
              mx: { xs: "auto", lg: "0" },
            }}
          >
            Transforming ideas into stunning visuals—UI/UX and brand design
            that captivates, responsive, and delivers results.
          </Typography>

          {/* Contact Button */}
          <Button
            variant="contained"
            endIcon={<ArrowForward />}
            sx={{
              backgroundColor: "#2a2a2a",
              color: "white",
              borderRadius: "25px",
              px: { xs: 3, sm: 4 },
              py: { xs: 1, sm: 1.5 },
              textTransform: "uppercase",
              fontWeight: 600,
              fontSize: { xs: "0.7rem", sm: "0.8rem" },
              letterSpacing: "0.05em",
              "&:hover": { backgroundColor: "#1a1a1a" },
            }}
          >
            CONTACT ME
          </Button>
        </Box>

        {/* Center - Profile Image */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            order: { xs: -1, lg: 0 },
            flexShrink: 0,
            mt: { xs: 4, lg: 0 },
          }}
        >
          {/* Use MUI Box with component="img" for consistent sx styling */}
          <Box
            component="img"
            src={"../assets/profile.jpg"}
            alt="Yousef - UI/UX Designer"
            sx={{
              width: { xs: 200, sm: 250, md: 300, lg: 350 },
              height: { xs: 200, sm: 250, md: 300, lg: 350 },
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
          />
        </Box>

        {/* Right Side - Statistics */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: 3, sm: 4 },
            alignItems: { xs: "center", lg: "flex-end" },
            textAlign: { xs: "center", lg: "right" },
            mt: { xs: 4, lg: 0 },
          }}
        >
          {[
            { value: "2+", label: "Year Experience" },
            { value: "10+", label: "Projects Delivered" },
            { value: "*99%", label: "Client Satisfaction" },
            { value: "3", label: "Clients worldwide" },
          ].map((stat, index) => (
            <Box key={index}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 900,
                  fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                  color: "#000",
                  lineHeight: 1,
                  mb: 0.5,
                }}
              >
                {stat.value}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
