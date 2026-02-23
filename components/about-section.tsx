"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
  const leaders = [
    {
      name: "Mr. Saeed Watson Dinyeloh",
      role: "Chairman",
      photo: "/team/watson.jpeg",
    },
    {
      name: "Mr. Martin Anthony Siwu",
      role: "Non-Executive Director",
      photo: "/team/martin.jpeg",
    },
    {
      name: "Ms. Irene Mlundira",
      role: "Managing Director",
      photo: "/team/irene.jpeg",
    },
    {
      name: "Mr. Tafadzwa Mark Madziwa",
      role: "Executive Finance Director",
      photo: "/team/mark.jpeg",
    },
    {
      name: "Mr. Aasim Iqbal Kushkiwala",
      role: "Executive Production Director",
      photo: "/team/aasim.jpeg",
    },
    {
      name: "Mr. Wellington Yairo",
      role: "Executive Director, Quality Assurance & Supply Chain",
      photo: "/team/yairo.jpeg",
    },
  ]

  // Fade-up + scale animation for cards
  const fadeUp = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  }

  // Hover lift animation for cards
  const hoverCard = {
    hover: { scale: 1.05, y: -5, transition: { duration: 0.3 } },
  }

  // Hover zoom for profile image
  const hoverImage = {
    hover: { scale: 1.15, transition: { duration: 0.4 } }, // slightly zoom-in on hover
  }

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
                We combine{" "}
                <span className="font-medium text-foreground">
                  science, innovation, and local expertise
                </span>{" "}
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
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent" />
          </motion.div>
        </div>

        {/* LEADERSHIP TEAM SECTION */}
        <div className="mt-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h3 className="text-3xl font-bold mb-4">Our Leadership Team</h3>
            <p className="text-muted-foreground text-lg">
              A team of experienced professionals guiding WAIT Holdings with
              strong governance, operational excellence, and a commitment to
              sustainable agricultural growth.
            </p>
          </motion.div>

          {/* LEADER CARDS GRID */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {leaders.map((leader) => (
              <motion.div
                key={leader.name}
                variants={{ ...fadeUp, ...hoverCard }}
                whileHover="hover"
                className="bg-blue-low-opacity p-6 rounded-2xl shadow-lg flex flex-col items-center text-center cursor-pointer"
              >
                {/* PROFILE IMAGE */}
                <motion.div
                  className="w-32 h-32 rounded-2xl overflow-hidden mb-4 bg-gray-200 relative"
                  whileHover={hoverImage.hover} // zoom-in on hover
                >
                  <Image
                    src={leader.photo}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* NAME & ROLE */}
                <h5 className="text-lg font-semibold text-black">{leader.name}</h5>
                <p className="text-sm text-muted-foreground">{leader.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
