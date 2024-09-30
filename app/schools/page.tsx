'use client'

import { FaSchool, FaUsers, FaRegFileAlt, FaBookOpen } from 'react-icons/fa'; // Import icons from react-icons
import Image from 'next/image';

export default function Schools() {
  return (
    <div className="min-h-screen flex flex-col p-8 bg-white space-y-12"> {/* Set background to white */}
      
      {/* Top Section with Icons */}
      <div className="flex flex-col md:flex-row justify-around items-center p-4 rounded-lg shadow-md mb-8">
        <div className="flex items-center">
          <FaSchool className="text-purple-600 text-3xl mr-2" /> {/* School icon with larger size */}
          <span className="text-2xl font-semibold">Mustard</span> {/* Increased font size */}
        </div>
        <div className="flex items-center">
          <FaUsers className="text-purple-600 text-3xl mr-2" /> {/* Parents portal icon with larger size */}
          <span className="text-2xl font-semibold">Parents Portal</span> {/* Increased font size */}
        </div>
        <div className="flex items-center">
          <FaRegFileAlt className="text-purple-600 text-3xl mr-2" /> {/* Apply online icon with larger size */}
          <span className="text-2xl font-semibold">Apply Online</span> {/* Increased font size */}
        </div>
        <div className="flex items-center">
          <FaBookOpen className="text-purple-600 text-3xl mr-2" /> {/* Resource portal icon with larger size */}
          <span className="text-2xl font-semibold">Resource Portal</span> {/* Increased font size */}
        </div>
      </div>

      {/* Section for Schools */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* School 1 */}
        <div className="p-6 border rounded-lg shadow-md">
          <Image
            src="/images/school4.jpg" // Adjust this path as needed
            alt="River Breeze Nanyuki 1"
            width={400}
            height={300}
            className="w-full h-[300px] object-cover rounded-lg mb-4" // Ensure equal height
          />
          <h3 className="text-2xl font-semibold text-purple-600 mb-2">River Breeze Nanyuki 1</h3>
          <p className="text-lg text-gray-700">
          River Breeze Nanyuki 1 provides a nurturing environment focused on holistic education, innovative teaching methods, and community engagement, allowing students to thrive both academically and socially.</p>        </div>

        {/* School 2 */}
        <div className="p-6 border rounded-lg shadow-md">
          <Image
            src="/images/school5.jpg" // Adjust this path as needed
            alt="River Breeze Nanyuki 2"
            width={400}
            height={300}
            className="w-full h-[300px] object-cover rounded-lg mb-4" // Ensure equal height
          />
          <h3 className="text-2xl font-semibold text-purple-600 mb-2">River Breeze Nanyuki 2</h3>
          <p className="text-lg text-gray-700">
          River Breeze Nanyuki 2 is dedicated to academic excellence and vibrant community involvement, offering a well-rounded education that encourages creativity and critical thinking among students.          </p>
        </div>

        {/* School 3 */}
        <div className="p-6 border rounded-lg shadow-md">
          <Image
            src="/images/school1.jpg" // Adjust this path as needed
            alt="Junior High School"
            width={400}
            height={300}
            className="w-full h-[300px] object-cover rounded-lg mb-4" // Ensure equal height
          />
          <h3 className="text-2xl font-semibold text-purple-600 mb-2">Junior High School</h3>
          <p className="text-lg text-gray-700">
          Junior High School focuses on shaping future leaders through a balanced curriculum that promotes academic success and personal growth, encouraging students to explore their interests and develop their skills.
          </p>
        </div>
      </div>
    </div>
  );
}
