"use client"

import Header from "@/components/header"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="relative">
      {/* HEADER */}
      <Header />

      {/* HERO SECTION */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-500 to-blue-500 text-white"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to WAIT Holdings</h1>
        <p className="text-lg md:text-2xl mb-8 text-center max-w-xl">
          We provide top-tier agricultural solutions for modern farmers.
        </p>
        <button className="px-6 py-3 rounded-full bg-white text-green-600 font-semibold hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>

      {/* MLIMIFERT SECTION */}
      <section
        id="mlimifert"
        className="min-h-screen flex flex-col justify-center items-center bg-white text-black px-6 md:px-20"
      >
        <h2 className="text-4xl font-bold mb-6">MlimiFert Products</h2>
        <p className="text-lg md:text-xl mb-8 max-w-3xl text-center">
          MlimiFert offers high-quality fertilizers and solutions to boost your farm productivity.
          Learn about our range of products and sustainable practices that help your crops thrive.
        </p>
        <div className="grid md:grid-cols-3 gap-6 w-full">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <Image
              src="/images/fertilizer1.png"
              alt="Fertilizer A"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-4">Fertilizer A</h3>
            <p className="mt-2 text-sm text-gray-600">
              Perfect for maize and wheat crops.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <Image
              src="/images/fertilizer2.png"
              alt="Fertilizer B"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-4">Fertilizer B</h3>
            <p className="mt-2 text-sm text-gray-600">
              Ideal for leafy vegetables and legumes.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <Image
              src="/images/fertilizer3.png"
              alt="Fertilizer C"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-4">Fertilizer C</h3>
            <p className="mt-2 text-sm text-gray-600">
              Designed for fruit crops and plantations.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-black px-6 md:px-20"
      >
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-lg md:text-xl max-w-3xl text-center">
          WAIT Holdings has been supporting farmers for over 20 years, providing sustainable
          solutions, expert guidance, and high-quality products to maximize farm productivity.
        </p>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="min-h-screen flex flex-col justify-center items-center bg-white text-black px-6 md:px-20"
      >
        <h2 className="text-4xl font-bold mb-6">Our Services</h2>
        <p className="text-lg md:text-xl max-w-3xl text-center">
          We provide advisory, training, and agricultural products to farmers, helping them
          optimize their yield and adopt sustainable practices.
        </p>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section
        id="technology"
        className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-black px-6 md:px-20"
      >
        <h2 className="text-4xl font-bold mb-6">Technology</h2>
        <p className="text-lg md:text-xl max-w-3xl text-center">
          Using modern agricultural technology, we help farmers monitor crop health, soil
          fertility, and maximize productivity with precision farming tools.
        </p>
      </section>

      {/* IMPACT SECTION */}
      <section
        id="impact"
        className="min-h-screen flex flex-col justify-center items-center bg-white text-black px-6 md:px-20"
      >
        <h2 className="text-4xl font-bold mb-6">Our Impact</h2>
        <p className="text-lg md:text-xl max-w-3xl text-center">
          Through our products and training programs, we have improved the yield and income
          of hundreds of farmers, contributing to sustainable agriculture in the region.
        </p>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-black px-6 md:px-20"
      >
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg md:text-xl max-w-3xl text-center mb-4">
          Have questions or want to book a consultation? Reach out to us!
        </p>
        <p className="text-center mb-2">Email: msiskazikani@gmail.com</p>
        <p className="text-center">Phone: 0882761779</p>
      </section>
    </div>
  )
}
