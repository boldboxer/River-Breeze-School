'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const backgroundImages = [
  '/images/student2.jpg', // Replace with your image paths
  '/images/student3.jpg',
  '/images/student4.jpg',
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div className="flex flex-col min-h-screen"> {/* Flex container to take full height */}
      
      {/* Main Content */}
      <div
        className="flex-grow flex flex-col justify-center items-center relative"
        style={{
          height: '50vh', // Set the height to 50% of the viewport height
          backgroundImage: `url('${backgroundImages[currentImageIndex]}')`, // Use the current image
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay to darken the background image */}
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* This will cover the entire page */}
        
        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center z-10" // Ensure content is above overlay
        >
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight text-white">
            Welcome to River Breeze School
          </h1>
          
          {/* Button to Navigate to Another Page */}
          <Link 
            href="/admissions" // Change this to your target page
            className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg opacity-90 hover:opacity-100 transition duration-300"
          >
            Click Here to Join Us
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
