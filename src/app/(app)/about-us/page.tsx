'use client'
import Image from 'next/image'
import React from 'react'
import Footer from '../../../../components/ui/Footer'

const page = () => {
  return (
    <>
    <div className="bg-white text-black font-sans w-full">
 
      <div className="relative w-full h-[200px] md:h-[200px]">
        <Image
          src="/about.jpg"
          alt="about-us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            About us
          </h2>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default page
