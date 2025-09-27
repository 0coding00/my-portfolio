"use client";

import { useState, useRef, useEffect } from "react";
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

import project1img1 from "../assets/project1img1.png";
import project1img2 from "../assets/project1img2.png";
import project1img3 from "../assets/project1img3.png";

import project2img1 from "../assets/project2img1.png";
import project2img2 from "../assets/project2img2.png";
import project2img3 from "../assets/project2img3.png";

import project3img1 from "../assets/project3img1.png";
import project3img2 from "../assets/project3img2.png";
import project3img3 from "../assets/project3img3.png";
import Image from "next/image";

export default function Projects() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const slideRef = useRef(null);

  // drag state for live swipe effect
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(null);
  const mouseMoveRef = useRef(null);

  // image preview modal
  const [previewImg, setPreviewImg] = useState(null);

  // Autoplay controls
  const autoplayInterval = 3000; // ms between slides
  const pauseAfterInteraction = 5000; // ms to pause after user interacts
  const isPausedRef = useRef(false);
  const interactionTimerRef = useRef(null);
  const autoplayTimerRef = useRef(null);

  // Projects data (converted from your MUI content)
  const projects = [
    {
      id: 0,
      title: "Project 1: Flash Taxi",
      icon: <Target className="w-8 h-8 text-white" />,
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
      icon: <BarChart3 className="w-8 h-8 text-white" />,
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
      icon: <User className="w-8 h-8 text-white" />,
      description:
        "Mini game with timers and leaderboard, responsive and lightweight.",
      technologies: "React.js, JavaScript, Tailwind CSS",
      images: [project3img1, project3img2, project3img3],
      github: "https://github.com/0coding00/Quiz_app.git",
      features: ["Timed quizzes", "Score tracking", "Simple responsive UI"],
      color: "purple-500",
    },
  ];

  const minSwipeDistance = 50;

  // pause autoplay for a bit when user interacts
  const pauseInteraction = () => {
    isPausedRef.current = true;
    if (interactionTimerRef.current) clearTimeout(interactionTimerRef.current);
    interactionTimerRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, pauseAfterInteraction);
  };

  // ---- Touch handlers with live drag effect ----
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
    // determine swipe threshold and move slides
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
    finishDrag(-distance * -1); // keep same sign as previous logic (start - end)

    // snap back animation
    setIsDragging(false);
    setDragX(0);
    startXRef.current = null;
    setTouchStart(null);
    setTouchEnd(null);
  };

  // ---- Mouse drag (desktop) ----
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
    // store refs to remove if needed
    mouseMoveRef.current = { onMove, onUp };
  };

  // click arrows / indicators still pause autoplay and change slides
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

  // setup autoplay
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

  // close preview on Esc
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setPreviewImg(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // clear timers on unmount and mouse listeners
  useEffect(() => {
    return () => {
      if (interactionTimerRef.current)
        clearTimeout(interactionTimerRef.current);
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      if (mouseMoveRef.current) {
        window.removeEventListener("mousemove", mouseMoveRef.current.onMove);
        window.removeEventListener("mouseup", mouseMoveRef.current.onUp);
      }
    };
  }, []);

  const current = projects[activeSlide];

  // visual transform for live drag. scale and rotate are subtle but visible.
  const cardStyle = {
    transform: `translateX(${dragX}px) rotate(${dragX / 80}deg)`,
    transition: isDragging
      ? "none"
      : "transform 350ms cubic-bezier(0.22, 1, 0.36, 1)",
  };

  // parallax for thumbnails (smaller movement)
  const imgParallax = (index) => ({
    transform: `translateX(${dragX * (0.05 * (index + 1))}px)`,
    transition: isDragging
      ? "none"
      : "transform 350ms cubic-bezier(0.22, 1, 0.36, 1)",
  });

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <main className="container mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-black text-[2.2rem] sm:text-[3rem] md:text-[3.8rem] lg:text-[4.5rem] leading-[0.9] mb-1 text-black uppercase tracking-[-0.02em]">
            MY PROJECTS
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Swipeable Project Card (kept shape & style) */}
          <div className="relative">
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-slate-200 hover:bg-slate-50 rounded-full flex items-center justify-center transition-all shadow-sm"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-slate-200 hover:bg-slate-50 rounded-full flex items-center justify-center transition-all shadow-sm"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>

            <div
              ref={slideRef}
              className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onMouseEnter={pauseInteraction}
              onMouseDown={onMouseDown}
              // prevent image drag ghost on desktop
              onDragStart={(e) => e.preventDefault()}
              style={cardStyle}
            >
              <div className="p-6 h-120">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 bg-${current.color} rounded-full flex items-center justify-center shadow`}
                  >
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-slate-700 h-10">Project</span>
                </div>

                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {current.title}
                </h3>

                <p className="text-slate-600 mb-3 h-10">
                  {current.description}
                </p>

                <div className="mb-4">
                  <div className="text-sm font-medium text-slate-700 mb-1 h-10">
                    Technologies
                  </div>
                  <div className="text-sm text-slate-600 h-10">
                    {current.technologies}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium text-slate-700 mb-2">
                    Images from the project
                  </div>
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {current.images.map((img, idx) => (
                      <div
                        key={idx}
                        style={imgParallax(idx)}
                        className="transform transition-transform"
                      >
                        <AnimatePresence>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              // ignore if we recently dragged (sensitivity: 8px)
                              if (Math.abs(dragX) < 8) {
                                const url =
                                  typeof img === "string"
                                    ? img
                                    : img?.src ?? img;
                                setPreviewImg(url);
                              }
                            }}
                            className="p-0 m-0 bg-transparent border-0"
                          >
                            <Image
                              src={img}
                              alt={`proj-${current.id}-img-${idx}`}
                              className="w-[150px] sm:w-[200px] md:w-[240px] rounded-lg shadow cursor-pointer"
                              unoptimized
                            />
                            <motion.p
                              initial={{ opacity: 0.2 }}
                              animate={{
                                opacity: [0.2, 1, 0.2],
                              }}
                              transition={{
                                duration: 1.6,
                                repeat: Infinity,
                                repeatType: "loop",
                                ease: "easeInOut",
                              }}
                            >
                              click to preview{" "}
                            </motion.p>
                          </button>
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <a
                    href={current.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm underline text-slate-700"
                  >
                    Source code
                  </a>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300  ${
                    index === activeSlide
                      ? ` bg-${current.color} scale-125`
                      : "bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right - Dynamic details (kept shape) */}
          <div className="space-y-8 ">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-16 bg-gradient-to-br from-black to-gray-500 rounded-2xl flex items-center justify-center shadow">
                {current.icon}
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-2 text-slate-800">
                  {current.title}
                </h2>
                <p className="text-slate-600 text-base">
                  {current.description}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {current.features.map((feat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 transform transition-all duration-300 hover:translate-x-2"
                >
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span className="text-slate-700 text-base">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image preview modal (tailwind) */}
        {previewImg && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
            onClick={() => setPreviewImg(null)}
          >
            <div
              className="max-w-4xl w-full px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute right-6 top-6 bg-white rounded-full p-2 shadow"
                onClick={() => setPreviewImg(null)}
                aria-label="close"
              >
                ✕
              </button>
              <img
                src={previewImg}
                alt="preview"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
