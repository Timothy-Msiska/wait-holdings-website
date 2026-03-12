"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

export function Carousel() {
  const images = [
    "/images/blend/macadiamia-blend.png",
    "/images/blend/uera1.png",
    "/images/blend/soa-blend.png",
    "/images/blend/tea-blend.png",
    "/images/blend/NPK.jpeg",
    "/images/blend/tobacco-blend.png",
    "/images/blend/can-blend.png",
  ];

  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollPosRef = useRef(0);
  const requestRef = useRef<number | null>(null);

  const tripledImages = [...images, ...images, ...images];

  // Continuous horizontal animation
  useEffect(() => {
    const animate = () => {
      if (scrollRef.current) {
        const velocity = isHovered ? 0 : 1;
        scrollPosRef.current -= velocity;

        // Reset to create infinite loop
        const resetPoint = scrollRef.current.scrollWidth / 3;
        if (Math.abs(scrollPosRef.current) >= resetPoint) {
          scrollPosRef.current = 0;
        }

        scrollRef.current.style.transform = `translate3d(${scrollPosRef.current}px, 0, 0)`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isHovered]);

  return (
    <section className="bg-[#f0f9f7] py-16">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#0c4b48]">
            Blended Fertilizer Manufactured
          </h2>
          <p className="mt-4 text-gray-700 max-w-xl mx-auto">
            Explore our wide range of high-quality fertilizer blends, scientifically formulated to meet Malawi's agricultural needs.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="w-full overflow-hidden rounded-3xl shadow-lg"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ height: 380 }}
        >
          <div
            ref={scrollRef}
            className="flex gap-4 py-4 px-2"
            style={{ width: "max-content", willChange: "transform" }}
          >
            {tripledImages.map((src, i) => (
              <div
                key={i}
                className="shrink-0 w-[380px] h-[380px] flex items-center justify-center bg-white rounded-lg shadow-md"
              >
                <Image
                  src={src}
                  alt={`blend-${i}`}
                  width={380}
                  height={380}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}