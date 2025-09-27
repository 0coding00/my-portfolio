'use client'
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

export default function Header() {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        color: "black",
        boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
        borderBottom: "1px solid #e0e0e0",
        px: { xs: 2, md: 8 },
        zIndex: 1100,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          py: { xs: 1, md: 2 },
        }}
      >
        {/* Logo / Name */}
        <Box>
          <Typography
            variant="h5"
            sx={{ fontWeight: 700, lineHeight: 1.2, cursor: "pointer" }}
          >
            Yousef Knifati
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "0.85rem", md: "1rem" },
            }}
          >
            Frontend Developer (NEXT JS)
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box
          component="nav"
          sx={{
            display: "flex",
            gap: { xs: 2, md: 4 },
            mt: { xs: 1, md: 0 },
            flexWrap: "wrap",
          }}
        >
          {["Work", "About", "Contact"].map((item) => (
            <Button
              key={item}
              href={`#${item.toLowerCase()}`}
              sx={{
                color: "black",
                fontWeight: 600,
                textTransform: "none",
                position: "relative",
                fontSize:"1.1rem",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  width: "0%",
                  height: "3px",
                  bottom: 0,
                  left: 0,
                  backgroundColor: "#e840e8",
                  transition: "width 0.3s",
                },
                "&:hover:after": {
                  width: "100%",
                },
              }}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
