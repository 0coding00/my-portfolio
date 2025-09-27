'use client'

import { Box, Typography, Button, IconButton } from "@mui/material";
import { Menu as MenuIcon, ArrowForward } from "@mui/icons-material";
import profileImage from "../assets/profile.jpg"; // You'll need to add this image

export default function Landing() {
  return (
    <Box
      id="landingPage"
      sx={{
        backgroundColor: "#f5f5f5",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden", // Prevent horizontal scroll on small screens
      }}
    >

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center", // Center content vertically and horizontally
          px: { xs: 2, sm: 4, md: 6, lg: 8 },
          py: { xs: 4, md: 6, lg: 8 },
          gap: { xs: 6, md: 8, lg: 10 }, // Increased gap for better spacing
          flexDirection: { xs: "column", lg: "row" },
          textAlign: "center", // Default text alignment for mobile
        }}
      >
        {/* Left Side - Text Content */}
        <Box
          sx={{
            flex: 1,
            maxWidth: { lg: "450px" }, // Slightly increased max-width for text
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
            variant="h1"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.2rem", sm: "3rem", md: "3.8rem", lg: "4.5rem" }, // More aggressive scaling
              lineHeight: 0.9,
              mb: 1,
              color: "#000",
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
            }}
          >
            A <span className="text-purple-500">FRONTEND</span> DEVELOPER
          </Typography>



          <Typography
            variant="body1"
            sx={{
              color: "#666",
              fontSize: { xs: "1rem", sm: "1.5rem" },
              lineHeight: 1.6,
              mb: 4,
              maxWidth: "400px", // Slightly increased max-width for description
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
              "&:hover": {
                backgroundColor: "#1a1a1a",
              },
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
            order: { xs: -1, lg: 0 }, // Image comes first on mobile, then in order on desktop
            flexShrink: 0, // Prevent image from shrinking too much
            mt: { xs: 4, lg: 0 }, // Margin top for mobile
          }}
        >
          <img
            component="img"
            src={profileImage}
            alt="Solt - UI/UX Designer"
  className="
    w-[200px] h-[200px] 
    sm:w-[250px] sm:h-[250px] 
    md:w-[300px] md:h-[300px] 
    lg:w-[350px] lg:h-[350px] 
    rounded-full object-cover 
    shadow-[0_20px_40px_rgba(0,0,0,0.1)]
  "
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
            mt: { xs: 4, lg: 0 }, // Margin top for mobile
          }}
        >
          {/* Statistic Item Component */}
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


