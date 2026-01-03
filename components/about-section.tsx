"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
              Who We Are
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                <span className="font-semibold text-foreground">
                  WAIT Holdings Limited
                </span>{" "}
                is a forward-thinking agricultural solutions company based in
                Malawi, delivering high-quality fertilizer manufacturing,
                precision blending, and advanced soil and crop laboratory
                testing services.
              </p>

              <p>
                We combine <span className="font-medium text-foreground">science, innovation, and local expertise</span>{" "}
                to help farmers maximize yields, improve soil health, and build
                resilient agricultural systems tailored to Malawi’s diverse
                agro-ecological zones.
              </p>

              <p>
                Our state-of-the-art facilities, data-driven formulations, and
                experienced agricultural scientists allow us to deliver
                customized solutions that enhance productivity while promoting
                long-term sustainability and environmental stewardship.
              </p>

              {/* FEATURE HIGHLIGHTS */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                {[
                  "Science-backed fertilizer formulations",
                  "Advanced soil & crop laboratory analysis",
                  "Sustainable & climate-smart practices",
                  "Farmer-focused advisory services",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: false }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src="/images/Lab-b.jpg"
              alt="Modern agricultural laboratory"
              className="w-full h-full object-cover"
            />

            {/* subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
