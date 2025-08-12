'use client'
import Image from 'next/image'
import React from 'react'
import Footer from '../../../../components/ui/Footer'
import { ParallaxScroll } from "../../../../components/ui/parallax-scroll";

const images = [
  "/courses.jpg",
  "/CLUB.png",
  "/gallery.jpg",
  "/character.jpg",
  "/books.jpg"
]

const page = () => {
  return (
    <>
    <div className="bg-white text-black font-sans w-full">
 
      <div className="relative w-full h-[200px] md:h-[200px]">
        <Image
          src="/gallery.jpg"
          alt="GYST Club Banner"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Photo Gallery
          </h2>
        </div>
      </div>

  
      <div className="bg-gray-200 py-16 text-center px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Student Outreach
        </h3>

        <p className="max-w-2xl mx-auto text-gray-700 text-md md:text-lg">
          Connecting youth with timeless knowledge and a modern approach to
          inner transformation.
        </p>
      </div>

      <div>
        <ParallaxScroll images={images} />
      </div>
      
    </div>
    <Footer/>
    </>
  )
}

export default page
