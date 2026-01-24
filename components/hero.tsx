"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

export function Hero() {
  const heroSlides = [
    {
      image: "/images/background.png",
      fit: "cover",
      heading: (
        <>
          Innovating Agriculture Through{" "}
          <span className="text-primary">Science</span>
        </>
      ),
      paragraphs: [
        "WAIT Holdings Limited delivers precision fertilizer manufacturing, advanced soil testing, and laboratory services that empower Malawi’s agricultural sector with science-backed solutions.",
      ],
      cta: "Explore Our Services",
    },
    {
      image: "/images/i-mage.png",
      heading: (
        <>
          Boosting Crop Yields with{" "}
          <span className="text-primary">Mlimifert</span>
        </>
      ),
      paragraphs: [
        "Our flagship product, Mlimifert, provides high-performance fertilizer solutions designed to improve soil health, enhance nitrogen efficiency, and maximize crop yields for farmers across Malawi.",
        "Mlimifert is trusted by modern farmers for its consistent quality, efficiency, and positive impact on crop productivity.",
      ],
      cta: "Learn About Mlimifert",
    },
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)

  /* ---------------- Auto Slide ---------------- */

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      handleNext()
    }, 10000)

    return () => clearInterval(interval)
  }, [currentSlide, isPaused])

  /* ---------------- Navigation ---------------- */

  const handleNext = () => {
    setDirection(1)
    setIsPaused(true)
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setIsPaused(true)
    setCurrentSlide((prev) =>
      prev === 0 ? heroSlides.length - 1 : prev - 1
    )
  }

  /* ---------------- Animations ---------------- */

  const slideVariants: Variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  }

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  }

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  }

  const slide = heroSlides[currentSlide]

  return (
    <section
      className="relative min-h-[calc(130vh-96px)] pt-[96px] sm:pt-[112px] flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={slide.image}
            src={slide.image}
            alt=""
            className={`absolute inset-0 h-full w-full ${
              slide.fit === "contain"
                ? "object-contain p-12 sm:p-20"
                : "object-cover"
            }`}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Overlay */}
        <div
          className={`absolute inset-0 ${
            slide.fit === "contain" ? "bg-black/30" : "bg-black/50"
          }`}
        />
      </div>

      {/* Side Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-6 z-20 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-white hover:bg-primary transition"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-6 z-20 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-black/40 text-white hover:bg-primary transition"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <motion.div
              className="max-w-3xl text-white"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.h1
                className="mb-6 text-5xl font-bold sm:text-6xl lg:text-7xl"
                variants={textVariants}
              >
                {slide.heading}
              </motion.h1>

              {slide.paragraphs.map((text, i) => (
                <motion.p
                  key={i}
                  className="mb-6 max-w-2xl text-lg text-gray-200 sm:text-xl"
                  variants={textVariants}
                >
                  {text}
                </motion.p>
              ))}

              <motion.div className="flex gap-4" variants={textVariants}>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  {slide.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-yellow-400"
                >
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
