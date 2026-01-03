"use client"

import { Hero } from "@/components/hero"
import { MlimifertSection } from "@/components/mlinifert-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { TechnologySection } from "@/components/technology-section"
import { CropsSection } from "@/components/crops-section"
import { ImpactSection } from "@/components/impact-section"
import { ClientsSection } from "@/components/clients-section"
import { CTASection } from "@/components/cta-section"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

// Primary color for loader
const primaryColor = "#18bef0"

export default function Page() {
  const [loading, setLoading] = useState(true)

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as any } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5, ease: "easeIn" as any } },
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Loader Overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            {/* Simple spinning circle */}
            <motion.div
              className="w-16 h-16 border-4 border-t-primary border-gray-300 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />

            {/* Loading Text */}
            <motion.p
              className="mt-6 text-xl font-semibold text-primary"
              animate={{ opacity: [0, 1, 0], y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              Loading...
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      {!loading && (
        <AnimatePresence mode="wait">
          <motion.main
            key="main-content"
            initial="initial"
            animate="enter"
            exit="exit"
            variants={pageVariants}
            className="relative z-0"
          >
            <Hero />
            <MlimifertSection />
            <AboutSection />
            <ServicesSection />
            <TechnologySection />
            <CropsSection />
            <ImpactSection />
            <ClientsSection />
            <CTASection />
          </motion.main>
        </AnimatePresence>
      )}
    </div>
  )
}
