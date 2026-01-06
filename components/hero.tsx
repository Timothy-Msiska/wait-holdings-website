"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const heroSlides = [
    {
      image: "/images/background.png",
      heading: (
        <>
          Innovating Agriculture Through{" "}
          <span className="text-primary">Science</span>
        </>
      ),
      paragraphs: [
        "WAIT Holdings Limited delivers precision fertilizer manufacturing, advanced soil testing, and laboratory services that empower Malawi’s agricultural sector with science-backed solutions."
      ],
      cta: "Explore Our Services",
    },
    {
      image: "/images/bg2-2.png",
      heading: (
        <>
          Boosting Crop Yields with{" "}
          <span className="text-primary">Mlimifert</span>
        </>
      ),
      paragraphs: [
        "Our flagship product, Mlimifert, provides high-performance fertilizer solutions designed to improve soil health, enhance nitrogen efficiency, and maximize crop yields for farmers across Malawi.",
        "Mlimifert is trusted by modern farmers for its consistent quality, efficiency, and positive impact on crop productivity."
      ],
      cta: "Learn About Mlimifert",
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [heroSlides.length])

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
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const slide = heroSlides[currentSlide]

  return (
    <section className="relative min-h-[calc(130vh-96px)] pt-[96px] sm:pt-[112px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.img
            key={slide.image}
            src={slide.image}
            alt={`Hero Slide ${currentSlide + 1}`}
            className="absolute inset-0 h-full w-full object-cover"
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 0.5,
            }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-black/50" />
      </div>

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
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 0.5,
            }}
          >
            <motion.div
              className="max-w-3xl text-white"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Heading */}
              <motion.h1
                className="mb-6 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl"
                variants={textVariants}
              >
                {slide.heading}
              </motion.h1>

              {/* Paragraphs */}
              {slide.paragraphs.map((text, i) => (
                <motion.p
                  key={i}
                  className={`mb-6 max-w-2xl text-lg text-gray-200 sm:text-xl ${
                    i === slide.paragraphs.length - 1 ? "mb-8" : ""
                  }`}
                  variants={textVariants}
                >
                  {text}
                </motion.p>
              ))}

              {/* Buttons */}
              <motion.div
                className="flex flex-col gap-4 sm:flex-row"
                variants={textVariants}
              >
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    {slide.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-black hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition-all duration-300"
                  >
                    Contact Us
                  </Button>
                </motion.div>
              </motion.div>

              {/* Stats */}
              <motion.div
                className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
                variants={containerVariants}
              >
                {[
                  { value: "15+", label: "Years of Excellence" },
                  { value: "500+", label: "Farmers Served" },
                  { value: "50+", label: "Custom Formulations" },
                  { value: "ISO", label: "Certified Quality" },
                ].map((stat, i) => (
                  <motion.div key={i} variants={textVariants}>
                    <div className="mb-2 text-4xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
