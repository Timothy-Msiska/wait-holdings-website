"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import clsx from "clsx"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Technology", href: "#technology" },
  { name: "Impact", href: "#impact" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState("#home")
  const [hovered, setHovered] = useState<string | null>(null)
  const [showHeader, setShowHeader] = useState(true)
  const lastScrollY = useRef(0)
  const headerHeight = 80

  // Hide/show header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setShowHeader(currentY <= lastScrollY.current || currentY < 100)
      lastScrollY.current = currentY
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Detect active section
  useEffect(() => {
    const sections = ["home", ...navigation.map((i) => i.href.replace("#", ""))]
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

  // Smooth scroll
  const handleScrollTo = (href: string) => {
    const id = href.replace("#", "")
    const element = document.getElementById(id)

    if (!element) {
      setTimeout(() => handleScrollTo(href), 50)
      return
    }

    const top = element.getBoundingClientRect().top + window.scrollY - headerHeight
    window.scrollTo({ top, behavior: "smooth" })
    setMenuOpen(false)
  }

  const mailLink =
    "mailto:info@waitholdingsltd.com?subject=Consultation Request&body=Hello Mlimifret Team,%0D%0A%0D%0AI would like to book a consultation.%0D%0A%0D%0AName:%0D%0APhone:%0D%0AService Needed:"

  return (
    <motion.header
      initial={{ y: -120 }}
      animate={{ y: showHeader ? 0 : -120 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-[999] w-full max-w-6xl"
    >
      <motion.div className="relative rounded-3xl bg-white/90 backdrop-blur-md shadow-md">
        <nav className="flex items-center justify-between h-[72px] px-6 md:px-12">

          {/* LOGO */}
          <button onClick={() => handleScrollTo("#home")}>
            <Image
              src="/images/logo.png"
              alt="WAIT HOLDINGS"
              width={130}
              height={60}
              className="h-12 w-auto object-contain"
            />
          </button>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex flex-1 justify-center gap-10">
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
                    "relative text-base font-medium px-2 py-1 transition-colors hover:text-green-700",
                    isActive ? "text-green-700" : "text-gray-700"
                  )}
                >
                  {item.name}

                  {(isActive || isHover) && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 h-[2px] w-full bg-green-700 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* CTA + MOBILE MENU */}
          <div className="flex items-center gap-3">

            {/* DESKTOP CTA */}
            <Button
              asChild
              className="hidden md:inline-flex rounded-full px-8 py-2 bg-gradient-to-r from-green-600 to-green-500 text-white shadow-sm hover:shadow-md transition"
            >
              <a href={mailLink}>Book Consultation</a>
            </Button>

            {/* MOBILE MENU BUTTON */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="rounded-lg border border-gray-300 p-3"
              >
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </nav>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", stiffness: 280, damping: 25 }}
              className="md:hidden bg-white/90 backdrop-blur-md rounded-b-3xl shadow-md px-6 py-6"
            >
              <div className="flex flex-col gap-5">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleScrollTo(item.href)}
                    className={clsx(
                      "text-base text-left py-2 transition hover:text-green-700",
                      active === item.href
                        ? "text-green-700 underline underline-offset-4"
                        : "text-gray-700"
                    )}
                  >
                    {item.name}
                  </button>
                ))}

                {/* MOBILE CTA */}
                <Button
                  asChild
                  className="w-full rounded-full mt-2 bg-green-600 hover:bg-green-500 text-white py-3"
                >
                  <a href={mailLink}>Book Consultation</a>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  )
}