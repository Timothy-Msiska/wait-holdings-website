"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import {
  Leaf,
  Sprout,
  TrendingUp,
  ShieldCheck,
  CheckCircle,
  Factory,
} from "lucide-react"

export function MlimifertSection() {
  return (
    <div className="relative overflow-hidden">
      {/* ===== WATERMARK LOGO ===== */}
      <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center">
        <Image
          src="/images/logo-mlimi.png"
          alt="MlimiFert Watermark"
          width={520}
          height={520}
          className="opacity-[0.04]"
          priority
        />
      </div>

      {/* ===== BRAND OVERVIEW ===== */}
      <section className="relative z-10 py-28 bg-[#f7fcfd]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0, 0, 0.2, 1] }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-[#0c0c0c]">
              Mlimi<span className="text-green-900">Fert</span> – Fertilizer Built for Malawi
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              <strong>MlimiFert</strong> is WAIT Holdings’ flagship fertilizer brand,
              developed through scientific formulation and strict quality control to
              meet Malawi’s agricultural needs.
            </p>
          </motion.div>

          {/* ===== PRODUCT SECTION ===== */}
          <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative w-[300px] h-[300px] rounded-2xl bg-white shadow-lg">
                <Image
                  src="/images/tobacco-plants-field.jpg"
                  alt="MlimiFert Product"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-[#0c0c0c]">
                Urea 46%N – High Nitrogen Fertilizer
              </h3>

              <p className="mt-6 text-gray-600 leading-relaxed">
                Designed for fast nitrogen availability, MlimiFert Urea 46%N supports
                vigorous growth, improved photosynthesis, and higher yields.
              </p>

              <ul className="mt-8 space-y-4">
                {productBenefits.map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-primary" />
                    <span className="text-gray-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* ===== CORE VALUES ===== */}
          <div className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NPK BLENDS ===== */}
      <section className="relative z-10 py-28 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-3xl font-bold">
              Tailor-Made NPK Blends Under{" "}
              <span className="text-primary">MlimiFert</span>
            </h3>
            <p className="mt-6 text-gray-600">
              Crop-specific and soil-test-based fertilizer formulations engineered
              for precision nutrition and consistent results.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {mlimifertBlends.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md"
              >
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

/* =====================
   DATA
===================== */

const productBenefits = [
  "Rapid nitrogen availability",
  "Improved photosynthesis efficiency",
  "Enhanced nutrient uptake",
  "Higher yields per hectare",
  "Durable 50kg packaging",
]

const coreValues = [
  { title: "Scientific Formulation", description: "Developed using agronomic science.", icon: Leaf },
  { title: "Sustainable Farming", description: "Protects long-term soil health.", icon: Sprout },
  { title: "Higher Yields", description: "Consistent productivity improvements.", icon: TrendingUp },
  { title: "Quality Assurance", description: "Strict blending and quality control.", icon: ShieldCheck },
]

const mlimifertBlends = [
  { title: "Common NPK Blends", description: "23:21:0+4S, Super D, Compound D.", icon: Factory },
  { title: "Maize Fertilizer", description: "Optimized for Malawi’s staple crop.", icon: Leaf },
  { title: "Legumes & Soya", description: "Balanced nutrition for legumes.", icon: Sprout },
  { title: "Tobacco Blends", description: "Precision nutrient formulations.", icon: ShieldCheck },
  { title: "Horticulture Crops", description: "Vegetables and fruit blends.", icon: TrendingUp },
  { title: "Custom Soil Blends", description: "Soil-test-based formulations.", icon: CheckCircle },
]
