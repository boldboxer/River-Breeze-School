'use client'
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa'; // Importing social icons
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

  return (
    <header className="bg-white text-purple-500">
      {/* Upper Section */}
      <div className="container mx-auto p-4 flex justify-between items-center"> {/* Flex container with space between logo and navigation */}
        {/* Logo Section */}
        <div className="text-2xl font-bold"> {/* Logo stays on the left */}
          <Link href="/">River Breeze School</Link>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden flex items-center ml-4"> {/* Added margin-left for spacing */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} absolute md:static left-0 w-full bg-white md:bg-transparent`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0 ml-auto"> {/* Added ml-auto to push links to the far right */}
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/learning">Learning</Link>
            </li>
            <li>
              <Link href="/admissions">Admissions</Link>
            </li>
            <li>
              <Link href="/apply">Apply</Link>
            </li>
            <li>
              <Link href="/life">Life</Link>
            </li>
            <li>
              <Link href="/holidaywork">Holiday Work</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Lower Section - Contact Info Aligned Left with Social Media Links */}
      <div className="bg-purple-600 text-white p-2 flex flex-col md:flex-row justify-between items-center">
        <div className="container mx-auto flex justify-between items-center">
          {/* Contact Info */}
          <p className="text-center md:text-left">Phone: +123 456 789 | Email: info@riverbreezeschool.com</p>
          
          {/* Social Media Links on the Far Right */}
          <div className="flex space-x-4 mt-2 md:mt-0 ml-auto"> {/* Added ml-auto to push social icons to the far right */}
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-xl" />
            </Link>
            <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-xl" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-xl" />
            </Link>
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
