'use client';

import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle,
  Target,
  Users,
  Calendar,
  TrendingUp,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  User,
} from "lucide-react";
import {
  Box,
  Paper,
  Typography,
  IconButton,
  Button,
  Stack,
  Modal,
} from "@mui/material";

import project1img1 from "../assets/project1img1.png";
import project1img2 from "../assets/project1img2.png";
import project1img3 from "../assets/project1img3.png";

import project2img1 from "../assets/project2img1.png";
import project2img2 from "../assets/project2img2.png";
import project2img3 from "../assets/project2img3.png";

import project3img1 from "../assets/project3img1.png";
import project3img2 from "../assets/project3img2.png";
import project3img3 from "../assets/project3img3.png";

export default function Projects() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const slideRef = useRef(null);

  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(null);
  const mouseMoveRef = useRef(null);

  const [previewImg, setPreviewImg] = useState(null);

  const autoplayInterval = 3000;
  const pauseAfterInteraction = 5000;
  const isPausedRef = useRef(false);
  const interactionTimerRef = useRef(null);
  const autoplayTimerRef = useRef(null);

  // helper map for your color tokens -> hex (adjust to theme if you want)
  const colorMap = {
    "yellow-500": "#f59e0b",
    "gray-500": "#6b7280",
    "purple-500": "#7c3aed",
  };

  const projects = [
    {
      id: 0,
      title: "Project 1: Flash Taxi",
      icon: <Target size={20} color="#fff" />,
      description:
        "Responsive website with manager, driver, and user dashboards, accurate maps, and clean UX design.",
      technologies:
        "React.js, JavaScript, TypeScript, Tailwind CSS, MUI, Shadcn, Node.js, React Query, SPA, Animation, Redux, API Integration",
      images: [project1img1, project1img2, project1img3],
      github: "https://github.com/0coding00/Taxi.git",
      features: [
        "Manager / Driver / User dashboards",
        "Accurate maps & routing",
        "Clean UX and responsive",
      ],
      color: "yellow-500",
    },
    {
      id: 1,
      title: "Project 2: Food Ordering Website",
      icon: <BarChart3 size={20} color="#fff" />,
      description:
        "Responsive website with manager and user dashboards, add/edit meals, authentication and a simple, usable UX.",
      technologies:
        "React.js, JavaScript, CSS, MUI, Node.js, React Query, SPA, Redux, API Integration",
      images: [project2img1, project2img2, project2img3],
      github: "https://github.com/0coding00/restaurantFullProject.git",
      features: [
        "Add / Edit meals",
        "Authentication",
        "Manager & user dashboards",
      ],
      color: "gray-500",
    },
    {
      id: 2,
      title: "Project 3: Quiz Fun App",
      icon: <User size={20} color="#fff" />,
      description: "Mini game with timers and leaderboard, responsive and lightweight.",
      technologies: "React.js, JavaScript, Tailwind CSS",
      images: [project3img1, project3img2, project3img3],
      github: "https://github.com/0coding00/Quiz_app.git",
      features: ["Timed quizzes", "Score tracking", "Simple responsive UI"],
      color: "purple-500",
    },
  ];

  const minSwipeDistance = 50;

  const pauseInteraction = () => {
    isPausedRef.current = true;
    if (interactionTimerRef.current) clearTimeout(interactionTimerRef.current);
    interactionTimerRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, pauseAfterInteraction);
  };

  // Touch handlers
  const onTouchStart = (e) => {
    pauseInteraction();
    setTouchEnd(null);
    const x = e.targetTouches[0].clientX;
    setTouchStart(x);
    startXRef.current = x;
    setIsDragging(true);
    setDragX(0);
  };

  const onTouchMove = (e) => {
    if (startXRef.current == null) return;
    const x = e.targetTouches[0].clientX;
    setTouchEnd(x);
    const delta = x - startXRef.current;
    setDragX(delta);
  };

  const finishDrag = (distance) => {
    if (distance < -minSwipeDistance) {
      setActiveSlide((s) => (s + 1) % projects.length);
    } else if (distance > minSwipeDistance) {
      setActiveSlide((s) => (s - 1 + projects.length) % projects.length);
    }
  };

  const onTouchEnd = () => {
    if (startXRef.current == null) return;
    const end = touchEnd ?? startXRef.current;
    const distance = end - startXRef.current;
    finishDrag(-distance * -1);

    setIsDragging(false);
    setDragX(0);
    startXRef.current = null;
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Mouse drag (desktop)
  const onMouseDown = (e) => {
    pauseInteraction();
    startXRef.current = e.clientX;
    setIsDragging(true);
    setDragX(0);

    const onMove = (ev) => {
      const delta = ev.clientX - startXRef.current;
      setDragX(delta);
    };

    const onUp = (ev) => {
      const distance = ev.clientX - startXRef.current;
      finishDrag(-distance * -1);
      setIsDragging(false);
      setDragX(0);
      startXRef.current = null;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    mouseMoveRef.current = { onMove, onUp };
  };

  const nextSlide = () => {
    pauseInteraction();
    setActiveSlide((s) => (s + 1) % projects.length);
  };

  const prevSlide = () => {
    pauseInteraction();
    setActiveSlide((s) => (s - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index) => {
    pauseInteraction();
    setActiveSlide(index);
  };

  useEffect(() => {
    if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);

    autoplayTimerRef.current = setInterval(() => {
      if (!isPausedRef.current) {
        setActiveSlide((s) => (s + 1) % projects.length);
      }
    }, autoplayInterval);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setPreviewImg(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    return () => {
      if (interactionTimerRef.current) clearTimeout(interactionTimerRef.current);
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      if (mouseMoveRef.current) {
        window.removeEventListener("mousemove", mouseMoveRef.current.onMove);
        window.removeEventListener("mouseup", mouseMoveRef.current.onUp);
      }
    };
  }, []);

  const current = projects[activeSlide];

  const cardStyle = {
    transform: `translateX(${dragX}px) rotate(${dragX / 80}deg)`,
    transition: isDragging ? "none" : "transform 350ms cubic-bezier(0.22, 1, 0.36, 1)",
  };

  const imgParallax = (index) => ({
    transform: `translateX(${dragX * (0.05 * (index + 1))}px)`,
    transition: isDragging ? "none" : "transform 350ms cubic-bezier(0.22, 1, 0.36, 1)",
  });

  // small helper to get real src (handles imported images or string urls)
  const srcOf = (img) => (typeof img === "string" ? img : img?.src ?? img);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "white", color: "text.primary" }}>
      <Box component="main" sx={{ maxWidth: 1200, mx: "auto", px: 3, py: 8 }}>
        {/* Hero */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 900,
              fontSize: { xs: "2.2rem", sm: "3rem", md: "3.8rem", lg: "4.5rem" },
              lineHeight: 0.9,
              mb: 0.5,
              textTransform: "uppercase",
              letterSpacing: "-0.02em",
            }}
          >
            MY PROJECTS
          </Typography>
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: { lg: "1fr 1fr" }, gap: 6, alignItems: "start" }}>
          {/* Left - Slide area */}
          <Box sx={{ position: "relative" }}>
            <IconButton
              onClick={prevSlide}
              aria-label="Previous slide"
              sx={{
                position: "absolute",
                left: 16,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                boxShadow: 1,
                "&:hover": { bgcolor: "background.default" },
              }}
            >
              <ChevronLeft size={20} />
            </IconButton>

            <IconButton
              onClick={nextSlide}
              aria-label="Next slide"
              sx={{
                position: "absolute",
                right: 16,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                bgcolor: "background.paper",
                border: "1px solid",
                borderColor: "divider",
                boxShadow: 1,
                "&:hover": { bgcolor: "background.default" },
              }}
            >
              <ChevronRight size={20} />
            </IconButton>

            <Paper
              ref={slideRef}
              elevation={1}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onMouseEnter={pauseInteraction}
              onMouseDown={onMouseDown}
              onDragStart={(e) => e.preventDefault()}
              sx={{
                borderRadius: 2,
                overflow: "hidden",
                border: "1px solid",
                borderColor: "grey.100",
                bgcolor: "background.paper",
                ...cardStyle,
              }}
            >
              <Box sx={{ p: 4, height: 480, display: "flex", flexDirection: "column" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      bgcolor: colorMap[current.color],
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: 3,
                    }}
                  >
                    <CheckCircle size={18} color="#fff" />
                  </Box>
                  <Typography sx={{ color: "text.secondary" }}>Project</Typography>
                </Box>

                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {current.title}
                </Typography>

                <Typography sx={{ color: "text.secondary", mb: 2, minHeight: 48 }}>
                  {current.description}
                </Typography>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    Technologies
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {current.technologies}
                  </Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                    Images from the project
                  </Typography>
                  <Box sx={{ display: "flex", gap: 2, overflowX: "auto", pb: 1 }}>
                    {current.images.map((img, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          minWidth: { xs: 140, sm: 180, md: 220 },
                          borderRadius: 2,
                          overflow: "hidden",
                          boxShadow: 2,
                          cursor: "pointer",
                          transform: imgParallax(idx).transform,
                          transition: imgParallax(idx).transition,
                        }}
                      >
                        <AnimatePresence>
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              if (Math.abs(dragX) < 8) {
                                setPreviewImg(srcOf(img));
                              }
                            }}
                            sx={{
                              p: 0,
                              display: "block",
                              minWidth: 0,
                              bgcolor: "transparent",
                              boxShadow: "none",
                              textTransform: "none",
                            }}
                          >
                            <Box
                              component="img"
                              src={srcOf(img)}
                              alt={`proj-${current.id}-img-${idx}`}
                              sx={{
                                width: "100%",
                                height: { xs: 90, sm: 120, md: 140 },
                                objectFit: "cover",
                                display: "block",
                              }}
                            />
                            <motion.p
                              initial={{ opacity: 0.2 }}
                              animate={{ opacity: [0.2, 1, 0.2] }}
                              transition={{ duration: 1.6, repeat: Infinity }}
                              style={{ margin: 6, fontSize: 12, color: "rgba(0,0,0,0.6)" }}
                            >
                              click to preview
                            </motion.p>
                          </Button>
                        </AnimatePresence>
                      </Box>
                    ))}
                  </Box>
                </Box>

                <Box sx={{ mt: "auto" }}>
                  <Button
                    href={current.github}
                    target="_blank"
                    rel="noreferrer"
                    sx={{ textTransform: "none", fontSize: 14 }}
                  >
                    Source code
                  </Button>
                </Box>
              </Box>
            </Paper>

            {/* indicators */}
            <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 3 }}>
              {projects.map((_, index) => {
                const active = index === activeSlide;
                return (
                  <Box
                    key={index}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    sx={{
                      width: active ? 12 : 8,
                      height: active ? 12 : 8,
                      borderRadius: "50%",
                      bgcolor: active ? colorMap[current.color] : "grey.300",
                      transform: active ? "scale(1.15)" : "none",
                      transition: "all 200ms",
                      cursor: "pointer",
                    }}
                  />
                );
              })}
            </Box>
          </Box>

          {/* Right - Details */}
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Box sx={{ display: "flex", gap: 3, alignItems: "center", mb: 1 }}>
              <Box
                sx={{
                  width: 80,
                  height: 64,
                  borderRadius: 3,
                  bgcolor: "linear-gradient(180deg, #000 0%, #6b7280 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: 3,
                }}
              >
                {current.icon}
              </Box>

              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  {current.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {current.description}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              {current.features.map((feat, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    transition: "transform 200ms",
                    "&:hover": { transform: "translateX(8px)" },
                  }}
                >
                  <CheckCircle size={18} />
                  <Typography sx={{ color: "text.primary" }}>{feat}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* Preview Modal */}
        <Modal open={Boolean(previewImg)} onClose={() => setPreviewImg(null)}>
          <Box
            onClick={() => setPreviewImg(null)}
            sx={{
              position: "fixed",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "rgba(0,0,0,0.6)",
              p: 2,
              zIndex: 1300,
            }}
          >
            <Box
              onClick={(e) => e.stopPropagation()}
              sx={{
                maxWidth: "90%",
                width: "100%",
                borderRadius: 2,
                boxShadow: 6,
                position: "relative",
              }}
            >
              <IconButton
                onClick={() => setPreviewImg(null)}
                aria-label="close preview"
                sx={{
                  position: "absolute",
                  right: 16,
                  top: 16,
                  bgcolor: "background.paper",
                }}
              >
                ✕
              </IconButton>

              <Box
                component="img"
                src={previewImg ?? ""}
                alt="preview"
                sx={{ width: "100%", height: "auto", borderRadius: 1, display: "block" }}
              />
            </Box>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
}
