"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import clsx from "clsx"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "MlimiFert", href: "#mlimifert" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Technology", href: "#technology" },
  { name: "Impact", href: "#impact" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("#home")
  const [hovered, setHovered] = useState<string | null>(null)
  const [showHeader, setShowHeader] = useState(true)

  const lastScrollY = useRef(0)
  const headerHeight = 96

  // ---------------- Scroll behavior ----------------
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 40)
      setShowHeader(currentY <= lastScrollY.current || currentY < 120)
      lastScrollY.current = currentY
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // ---------------- Active section detection ----------------
  useEffect(() => {
    const sections = [
      "home",
      ...navigation.map((item) => item.href.replace("#", "")),
    ]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: "-50% 0px -50% 0px" }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  // ---------------- Scroll to section ----------------
  const handleScrollTo = (href: string) => {
    const id = href.replace("#", "")
    const element = document.getElementById(id)
    if (!element) return
    const top = element.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: top - headerHeight, behavior: "smooth" })
    setMenuOpen(false)
  }

  return (
    <motion.header
      initial={false}
      animate={{
        y: showHeader ? 0 : -110,
        paddingTop: scrolled ? 6 : 12,
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed top-0 z-[999] w-full backdrop-blur-md bg-white/70 shadow-md"
    >
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          layout
          className={clsx("grid grid-cols-3 items-center h-[72px] transition-all rounded-2xl")}
        >
          {/* LOGO */}
          <motion.a
            href="#home"
            className="flex items-center"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
            }}
            animate={{ scale: scrolled ? 0.95 : 1 }}
            transition={{ duration: 0.25 }}
          >
            <Image
              src="/images/logo.png"
              alt="WAIT HOLDINGS"
              width={96}
              height={48}
              priority
              className="h-10 w-auto object-contain"
            />
          </motion.a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex justify-center gap-10 relative">
            {navigation.map((item) => {
              const isActive = active === item.href
              const isHover = hovered === item.href
              return (
                <button
                  key={item.name}
                  onClick={() => handleScrollTo(item.href)}
                  onMouseEnter={() => setHovered(item.href)}
                  onMouseLeave={() => setHovered(null)}
                  className={clsx(
                    "relative text-sm font-medium transition-colors",
                    isActive || isHover
                      ? "text-green-600"
                      : "text-gray-700 hover:text-green-600"
                  )}
                >
                  {item.name}
                  {(isActive || isHover) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-green-600"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* CTA + MOBILE MENU BUTTON */}
          <div className="flex items-center justify-end gap-2">
            <Button className="hidden md:inline-flex rounded-full px-6 py-2 bg-gradient-to-r from-green-600 to-green-500 shadow-md hover:shadow-lg transition-all duration-300">
              Book Consultation
            </Button>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden rounded-xl border border-gray-300 p-2 z-[1000]"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </motion.div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden bg-white/95 backdrop-blur-md rounded-b-2xl shadow-lg mt-2 overflow-hidden z-[998]"
            >
              <div className="flex flex-col gap-4 px-6 py-4">
                {navigation.map((item) => {
                  const isActive = active === item.href
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleScrollTo(item.href)}
                      className={clsx(
                        "text-sm font-medium text-left w-full transition-colors",
                        isActive
                          ? "text-green-600 underline underline-offset-4"
                          : "text-gray-700 hover:text-green-600"
                      )}
                    >
                      {item.name}
                    </button>
                  )
                })}
                <Button className="w-full rounded-full mt-2 bg-green-600 hover:bg-green-500 text-white">
                  Book Consultation
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
