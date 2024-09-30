// app/how-to-apply/page.tsx
'use client';

import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa'; // Import plus and minus icons

export default function HowToApplyPage() {
  const [openSection, setOpenSection] = useState<string | null>(null); // State to track the currently open section

  const handleToggle = (section: string) => {
    setOpenSection(openSection === section ? null : section); // Toggle the clicked section
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: How to Apply Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">How to Apply</h2>
          <p className="text-lg text-gray-500 mb-4"> {/* Changed to text-gray-500 */}
            Our application process is simple and streamlined. Follow the steps provided to submit your application for the 2025 academic year.
          </p>
          <p className="text-lg text-gray-500 mb-6"> {/* Changed to text-gray-500 */}
            Ensure that all required documents are submitted along with your application form. For any inquiries, please contact our admissions office.
          </p>
          <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition duration-300">
            Apply Now
          </button>
        </div>

        {/* Right Side: Admission Contact Information */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Admission Contact Information Section */}
          <div className="mb-4 border p-4 rounded-lg">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => handleToggle('admission')}>
              <h3 className="text-lg font-semibold text-gray-700">Admission Contact Information</h3>
              {openSection === 'admission' ? <FaMinus className="text-purple-600" /> : <FaPlus className="text-purple-600" />}
            </div>
            {openSection === 'admission' ? (
              <div className="pl-6 mt-2 text-gray-500"> {/* Changed to text-gray-500 */}
                <p>P.O Box 12345, Nanyuki, Kenya</p>
                <p>P.O Box 67890, Nairobi, Kenya</p>
              </div>
            ) : (
              <p className="pl-6 mt-2 text-gray-400">Click to view admission contact information.</p>
            )}
          </div>
          
          {/* River Breeze 1 Section */}
          <div className="mb-4 border p-4 rounded-lg">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => handleToggle('riverBreeze1')}>
              <h3 className="text-lg font-semibold text-gray-700">River Breeze 1</h3>
              {openSection === 'riverBreeze1' ? <FaMinus className="text-purple-600" /> : <FaPlus className="text-purple-600" />}
            </div>
            {openSection === 'riverBreeze1' && (
              <div className="pl-6 mt-2 text-gray-500"> {/* Changed to text-gray-500 */}
                <p>P.O Box 12345</p>
                <p>Location: Nanyuki, Kenya</p>
              </div>
            )}
          </div>

          {/* River Breeze 2 Section */}
          <div className="mb-4 border p-4 rounded-lg">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => handleToggle('riverBreeze2')}>
              <h3 className="text-lg font-semibold text-gray-700">River Breeze 2</h3>
              {openSection === 'riverBreeze2' ? <FaMinus className="text-purple-600" /> : <FaPlus className="text-purple-600" />}
            </div>
            {openSection === 'riverBreeze2' && (
              <div className="pl-6 mt-2 text-gray-500"> {/* Changed to text-gray-500 */}
                <p>P.O Box 67890</p>
                <p>Location: Nairobi, Kenya</p>
              </div>
            )}
          </div>

          {/* Prospective Pupils & Parents Section */}
          <div className="border p-4 rounded-lg">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => handleToggle('prospective')}>
              <h3 className="text-lg font-semibold text-gray-700">Prospective Pupils & Parents</h3>
              {openSection === 'prospective' ? <FaMinus className="text-purple-600" /> : <FaPlus className="text-purple-600" />}
            </div>
            {openSection === 'prospective' && (
              <div className="pl-6 mt-2 text-gray-500"> {/* Changed to text-gray-500 */}
                <p>Prospective pupils and parents are welcome to visit our school to learn more about our programs and facilities.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
