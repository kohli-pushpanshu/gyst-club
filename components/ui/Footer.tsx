import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-500 text-black py-8 px-6 text-center">
      <p className="text-sm mb-4">
        COPYRIGHT ©2023, <span className="font-semibold">GYST Club</span>. ALL RIGHTS RESERVED.
      </p>

      <div className="flex justify-center gap-6 text-2xl">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF className="hover:text-blue-500 transition duration-300" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram className="hover:text-pink-500 transition duration-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter className="hover:text-sky-400 transition duration-300" />
        </a>
      </div>
    </footer>
  )
}

export default Footer