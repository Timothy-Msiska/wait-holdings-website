"use client"

import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const strengths = [
  {
    title: "Advanced Blending Technology",
    description: "State-of-the-art equipment ensures precise mixing and consistent quality across all batches.",
    items: [
      "Automated batching systems",
      "Quality control at every stage",
      "Uniform nutrient distribution",
      "Scalable production capacity",
    ],
  },
  {
    title: "Quality Assurance & Laboratory Support",
    description: "ISO-certified testing facilities with modern analytical instruments.",
    items: [
      "Accredited laboratory facilities",
      "Expert analytical team",
      "Rapid turnaround times",
      "Comprehensive reporting",
    ],
  },
  {
    title: "Supply Chain & Infrastructure",
    description: "Efficient logistics and distribution network across Malawi.",
    items: [
      "Strategic warehouse locations",
      "Reliable delivery systems",
      "Inventory management",
      "Technical field support",
    ],
  },
]

export function TechnologySection() {
  return (
    <section id="technology" className="py-24 bg-gradient-to-b from-background/50 to-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 text-sm uppercase tracking-wide">Key Strengths</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-foreground">
            Built on Scientific Excellence
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Our manufacturing system combines cutting-edge technology with decades of agricultural expertise to deliver precision and quality at every stage.
          </p>
        </motion.div>

        {/* Strength Cards */}
        <div className="space-y-12">
          {strengths.map((strength, index) => {
            const isEven = index % 2 === 0
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`grid md:grid-cols-2 gap-8 items-start`}
              >
                {/* Text Content */}
                <div className={`bg-background/70 p-8 rounded-2xl shadow-lg border-l-4 border-primary`}>
                  <h3 className="text-2xl font-bold mb-3">{strength.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{strength.description}</p>
                </div>

                {/* Items List */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {strength.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-2 bg-background/50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                      whileHover={{ scale: 1.03 }}
                    >
                      <CheckCircle2 className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm sm:text-base text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
