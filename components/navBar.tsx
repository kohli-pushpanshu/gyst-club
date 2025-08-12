'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = ['Home', 'Gallery', 'Courses', 'Activities', 'About Us', 'Contact Us']

  return (
    <nav className="w-full shadow-md bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image src="/CLUB.png" alt="Gyst Club Logo" width={50} height={50} />
            <span className="ml-2 text-xl font-semibold text-gray-800 dark:text-white">GYST Club</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s/g, '-')}`}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white font-medium transition duration-200"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 dark:text-gray-300 hover:text-blue-600 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s/g, '-')}`}
                className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white font-medium px-2"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default NavBar
