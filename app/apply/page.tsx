'use client'

export default function ApplyPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-white bg-cover bg-center" 
         style={{ backgroundImage: "url('/images/apply.jpg')" }}> {/* Add your background image */}
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-center"> {/* Center content */}
        <h1 className="text-4xl font-bold text-purple-600 mb-4">Ready to Apply?</h1> {/* Main header */}
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">2025 Applications Are Open!</h2> {/* Subheader */}
        
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          We are excited to welcome new students for the 2025 academic year! Our programs are designed to foster growth, creativity, and academic excellence. 
          Join us and be part of our vibrant community that supports your journey towards success.
        </p>
        
        <div className="mb-8"> {/* Center button */}
          <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300">
            Apply Now
          </button>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-800">Why Choose Us?</h3>
          <ul className="list-disc list-inside mt-4 text-gray-600">
            <li>Dedicated faculty focused on student success</li>
            <li>Innovative curriculum tailored to individual needs</li>
            <li>Strong community and extracurricular opportunities</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
