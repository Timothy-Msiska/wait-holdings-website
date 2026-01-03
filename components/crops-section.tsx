"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const crops = [
  { name: "Maize", image: "/images/maize-corn-field.png", description: "Specialized formulations for optimal maize production" },
  { name: "Tobacco", image: "/images/tobacco-plants-field.jpg", description: "Premium blends for high-quality tobacco cultivation" },
  { name: "Tomato", image: "/images/tomato-plants-growing.jpg", description: "Nutrient solutions for vigorous tomato growth" },
  { name: "Irish Potato", image: "/images/potato-plants-field.jpg", description: "Custom formulas for maximum tuber development" },
  { name: "Soya Beans", image: "/images/soybean-plants-field.jpg", description: "Balanced nutrition for legume crops" },
  { name: "Vegetables", image: "/images/vegetable-garden-cabbage-onions.jpg", description: "Versatile solutions for onions, cabbage, and more" },
]

// Simple fade-up animation for cards
const FadeUpCard = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
  >
    {children}
  </motion.div>
)

export function CropsSection() {
  return (
    <section id="crops" className="py-20 bg-background/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeUpCard>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
              Suitable for Different Crops
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Precision formulations tailored to the unique nutritional requirements of various crops
            </p>
          </div>
        </FadeUpCard>

        {/* Crop Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {crops.map((crop, index) => (
            <FadeUpCard key={index}>
              <motion.div whileHover={{ scale: 1.03 }} className="group cursor-pointer h-full">
                <Card className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-primary flex flex-col h-full">
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <img
                      src={crop.image || "/placeholder.svg"}
                      alt={crop.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <CardHeader className="flex-shrink-0">
                    <CardTitle className="text-xl">{crop.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground">{crop.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeUpCard>
          ))}
        </div>
      </div>
    </section>
  )
}
