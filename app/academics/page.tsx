// app/academics/page.tsx
'use client';

import { FaBook, FaFutbol } from 'react-icons/fa'; // Import icons

export default function AcademicsPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Academia Section */}
        <div className="bg-purple-800 text-white p-6 rounded-3xl shadow-lg border">
          <div className="flex items-center mb-4"> {/* Align icon and header horizontally */}
            <FaBook className="text-5xl mr-4" /> {/* Academia icon, larger size */}
            <h2 className="text-3xl font-bold text-yellow-400">Academia</h2> {/* Header with yellow color */}
          </div>
          <p className="text-lg text-gray-200 text-center"> {/* Lightened text */}
            Our academic programs are designed to foster intellectual growth and personal development, ensuring that students are well-prepared for future success.
          </p>
        </div>

        {/* Extra Curricular Section */}
        <div className="bg-sky-400 text-white p-6 rounded-3xl shadow-lg border">
          <div className="flex items-center mb-4"> {/* Align icon and header horizontally */}
            <FaFutbol className="text-5xl mr-4" /> {/* Extra Curricular icon, larger size */}
            <h2 className="text-3xl font-bold text-red-700">Extra-Curricular</h2> {/* Header with maroon color */}
          </div>
          <p className="text-lg text-gray-200 text-center"> {/* Lightened text */}
            We offer a wide range of extra-curricular activities, from sports to arts, that help students build teamwork, leadership, and social skills.
          </p>
        </div>
      </div>
    </div>
  );
}
