"use client";

import { Box, Typography, IconButton, Stack } from "@mui/material";
import { IoMailOpen } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";
import { FaFacebook, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, md: 8 },
        textAlign: "center",
        backgroundColor: "#111", // optional: dark background
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 900,
          fontSize: { xs: "2.2rem", sm: "3rem", md: "3.8rem", lg: "4.5rem" },
          lineHeight: 0.9,
          mb: 10,
          color: "#fff",
          textTransform: "uppercase",
          letterSpacing: "-0.02em",
          textAlign: "center",
        }}
      >
        Contact Me
      </Typography>

      {/* Social Icons */}
      <Stack
        direction="row"
        justifyContent="center"
        spacing={3}
        sx={{ mt: 10, mb: 5 }}
      >
        <IconButton
          component="a"
          href="https://www.facebook.com/yousef.knifati"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "white",
            transition: "0.3s",
            "&:hover": { color: "#1877F2" }, // Facebook blue
          }}
        >
          <FaFacebook size={30} />
        </IconButton>

        <IconButton
          component="a"
          href="https://wa.me/qr/DXBMMRPPFNX5H1"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "white",
            transition: "0.3s",
            "&:hover": { color: "#25D366" }, // WhatsApp green
          }}
        >
          <FaWhatsapp size={30} />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.linkedin.com/in/yousef-knifati-06075828b"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "white",
            transition: "0.3s",
            "&:hover": { color: "#0A66C2" }, // LinkedIn blue
          }}
        >
          <FaLinkedin size={30} />
        </IconButton>

        <IconButton
          component="a"
          href="https://github.com/0coding00"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "white",
            transition: "0.3s",
            "&:hover": { color: "#333" }, // GitHub black
          }}
        >
          <FaGithub size={30} />
        </IconButton>
      </Stack>

      {/* Email */}
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1.5}
        sx={{ py: 2 }}
      >
        <IoMailOpen size={24} />
        <Typography sx={{ color: "white", fontSize: "1rem" }}>
          0coding0101@gmail.com
        </Typography>
      </Stack>

      {/* Phone */}
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1.5}
        sx={{ py: 2 }}
      >
        <IoIosCall size={24} />
        <Typography sx={{ color: "white", fontSize: "1rem" }}>
          Phone Number: 0969909235
        </Typography>
      </Stack>
    </Box>
  );
}
