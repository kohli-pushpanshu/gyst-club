"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button1 } from "@/components/ui/button"

interface SlideData {
  title: string
  button: {
    text: string
    href: string
  }
  src: string
}

interface CarouselProps {
  slides: SlideData[]
}

export default function Carousel({ slides }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [screenWidth, setScreenWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024)

  // Update screen width on resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const getSlidePosition = (index: number) => {
    const totalSlides = slides.length
    const angle = (360 / totalSlides) * (index - currentIndex)

    // Set radius based on screen size
    let radius = 200
    if (screenWidth >= 1024) {
      radius = 350 // Desktop
    } else if (screenWidth >= 768) {
      radius = 270 // Tablet
    } else {
      radius = 180 // Mobile
    }

    // Calculate position in 3D space
    const x = Math.sin((angle * Math.PI) / 180) * radius
    const z = Math.cos((angle * Math.PI) / 180) * radius

    // Adjust appearance
    let opacity = 0.3
    let scale = 0.7
    let zIndex = 1

    if (index === currentIndex) {
      opacity = 1
      scale = 1
      zIndex = 10
    } else if (
      index === (currentIndex + 1) % totalSlides ||
      index === (currentIndex - 1 + totalSlides) % totalSlides
    ) {
      opacity = 0.6
      scale = 0.8
      zIndex = 5
    }

    return {
      transform: `translateX(${x}px) translateZ(${z}px) scale(${scale})`,
      opacity,
      zIndex,
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* 3D Carousel Container */}
      <div className="relative h-[400px] md:h-[500px] mb-8 overflow-hidden">
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          {slides.map((slide, index) => {
            const position = getSlidePosition(index)
            return (
              <div
                key={index}
                className="absolute transition-all duration-700 ease-in-out cursor-pointer"
                style={position}
                onClick={() => goToSlide(index)}
              >
                <div className="relative w-[250px] h-[300px] md:w-[300px] md:h-[360px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={slide.src}
                    alt={slide.title}
                    width={300}
                    priority={index === 0}
                    height={360}
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 250px, (max-width: 1024px) 300px, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Content overlay - only show on active slide */}
                  {index === currentIndex && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                      <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{slide.title}</h3>
                      <Link href={slide.button.href}>
                        <Button1
                          variant="secondary"
                          size="sm"
                          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30"
                        >
                          {slide.button.text}
                        </Button1>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 mb-6">
        <Button1 variant="outline" size="icon" onClick={prevSlide} className="rounded-full bg-transparent">
          <ChevronLeft className="h-4 w-4" />
        </Button1>

        <Button1 variant="outline" size="icon" onClick={nextSlide} className="rounded-full bg-transparent">
          <ChevronRight className="h-4 w-4" />
        </Button1>
      </div>

      <div className="text-center text-sm text-gray-500 md:hidden">Tap images to navigate</div>
    </div>
  )
}
