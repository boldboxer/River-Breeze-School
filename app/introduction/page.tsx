'use client'

import Image from 'next/image';

export default function Introduction() {
  return (
    <div className="min-h-screen flex flex-col justify-between p-4 sm:p-8 bg-purple-600 space-y-12 overflow-hidden"> {/* Added overflow-hidden */}
      
      {/* Upper Part - Introduction Section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:space-x-8">
        {/* Left Side - Introduction Text */}
        <div className="md:w-1/2 text-left mb-8 md:mb-0 max-w-xl"> {/* Added max-w-xl for better readability */}
          <h2 className="text-4xl font-bold text-white mb-6">Introduction to River Breeze School</h2>
          <p className="text-lg text-white">
            River Breeze School is a place of learning, creativity, and community. We strive to provide the best educational environment for all students, encouraging curiosity, passion, and growth.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 flex-shrink-0"> {/* Added flex-shrink-0 */}
          <Image 
            src="/images/student1.jpg"
            alt="River Breeze School"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Lower Part - Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-center md:space-x-8">
        {/* Left Side - Image */}
        <div className="md:w-1/2 mb-8 md:mb-0 flex-shrink-0"> {/* Added flex-shrink-0 */}
          <Image 
            src="/images/student8.jpg"
            alt="Welcome to River Breeze School"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        {/* Right Side - Welcome Text */}
        <div className="md:w-1/2 bg-white p-6 shadow-lg rounded-lg max-w-xl"> {/* Added max-w-xl for better readability */}
          <h3 className="text-2xl font-semibold mb-4">Welcome to River Breeze School</h3>
          <p className="text-lg text-gray-700">
            River Breeze School is committed to nurturing the minds of young learners by providing an environment that fosters creativity, collaboration, and critical thinking. Our school offers a rich and diverse curriculum, aimed at developing the whole child both academically and personally.
          </p>
        </div>
      </div>
    </div>
  );
}
