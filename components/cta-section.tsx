"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export function CTASection() {
  const features = [
    {
      title: "Proven Track Record",
      description:
        "Years of experience delivering results that transform agricultural productivity",
    },
    {
      title: "Scientific Approach",
      description:
        "Data-driven solutions backed by rigorous laboratory testing and research",
    },
    {
      title: "Comprehensive Support",
      description:
        "From soil testing to ongoing agronomic consultation, we're with you every step",
    },
    {
      title: "Quality Assurance",
      description:
        "MBS-certified processes ensuring consistent product quality and performance",
    },
  ]

  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Generate dynamic mailto with user info
    const mailToLink = `mailto:info@waitholdingsltd.com?subject=${encodeURIComponent(
      `Message from ${formData.name || "Someone"}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name || ""}\nEmail: ${formData.email || ""}\n\nMessage:\n${formData.message || ""}`
    )}`

    // Open default email client
    window.location.href = mailToLink

    // Reset the form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-muted/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Why Recommend Us */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-balance">
              Why You Should Recommend Us
            </h2>

            <div className="space-y-6 mb-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-7 h-7 flex-shrink-0 flex items-center justify-center mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-lg">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2"
            >
              Partner With Us <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>

          {/* Right: Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card className="shadow-lg rounded-2xl border border-muted-foreground/20 backdrop-blur-md">
              <CardContent className="pt-6 px-8">
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>

                {/* Contact Info */}
                <div className="space-y-5">

                  {/* LOCATION */}
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Thames+Lunzu+Blantyre+Malawi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-pointer hover:opacity-80 transition"
                  >
                    <ContactItem
                      icon={MapPin}
                      title="Our Location"
                      subtitle={
                        <>
                          WAIT Holdings Ltd<br />
                          Along M1 Road<br />
                          P.O. Box 245<br />
                          Lunzu<br />
                          Blantyre
                        </>
                      }
                    />
                  </a>
                    
                  {/* PHONE */}
                  <a
                    href="tel:+265997906959"
                    className="block cursor-pointer hover:opacity-80 transition"
                  >
                    <ContactItem
                      icon={Phone}
                      title="Phone"
                      subtitle="+265 997 906 959"
                    />
                  </a>
                    
                  {/* EMAIL */}
                  <a
                    href="mailto:info@waitholdingsltd.com"
                    className="block cursor-pointer hover:opacity-80 transition"
                  >
                    <ContactItem
                      icon={Mail}
                      title="Email"
                      subtitle="info@waitholdingsltd.com"
                    />
                  </a>
                    
                </div>

                {/* Contact Form */}
                {/* <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-semibold mb-4 text-lg">Request a Consultation</h4>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Send Message
                    </Button>
                  </form>
                </div> */}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Contact Item Component
function ContactItem({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: React.ElementType
  title: string
  subtitle: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
    </div>
  )
}
