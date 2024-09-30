// app/components/Footer.tsx
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons

export default function Footer() {
    return (
      <footer className="bg-purple-600 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
              <ul className="text-gray-200">
                <li><a href="/about" className="hover:underline">Our Mission</a></li>
                <li><a href="/about" className="hover:underline">Our Vision</a></li>
                <li><a href="/about" className="hover:underline">Our Values</a></li>
              </ul>
            </div>
  
            {/* Column 2 */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Admissions</h3>
              <ul className="text-gray-200">
                <li><a href="/how-to-apply" className="hover:underline">How to Apply</a></li>
                <li><a href="/tuition" className="hover:underline">Tuition Fees</a></li>
                <li><a href="/contact" className="hover:underline">Contact Admissions</a></li>
              </ul>
            </div>
  
            {/* Column 3 */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Academics</h3>
              <ul className="text-gray-200">
                <li><a href="/academics" className="hover:underline">Curriculum</a></li>
                <li><a href="/academics" className="hover:underline">Programs Offered</a></li>
                <li><a href="/academics" className="hover:underline">Extracurricular Activities</a></li>
              </ul>
            </div>
  
            {/* Column 4 */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <p className="text-gray-200 mb-2">P.O Box 12345, Nanyuki, Kenya</p>
              <p className="text-gray-200 mb-2">Phone: +254 700 123 456</p>
              <p className="text-gray-200 mb-2">Email: info@riverbreezeschool.ac.ke</p>
            </div>
          </div>
  
          {/* Social Media Links */}
          <div className="flex justify-center mt-6">
            <a href="https://facebook.com" className="text-gray-200 mx-2 hover:text-white"><FaFacebook size={24} /></a>
            <a href="https://twitter.com" className="text-gray-200 mx-2 hover:text-white"><FaTwitter size={24} /></a>
            <a href="https://instagram.com" className="text-gray-200 mx-2 hover:text-white"><FaInstagram size={24} /></a>
            <a href="https://linkedin.com" className="text-gray-200 mx-2 hover:text-white"><FaLinkedin size={24} /></a>
          </div>
  
          {/* Copyright Section */}
          <div className="text-center text-gray-200 mt-8">
            <p>&copy; {new Date().getFullYear()} River Breeze School. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
}
