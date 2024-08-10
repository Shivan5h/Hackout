import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-bold mb-4">AgroMitra</h2>
            <p className="text-gray-400">
              Empowering farmers with AI-driven insights for better crop
              management and optimized yields.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contacts" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: info@agromitra.com</p>
            <p className="text-gray-400">Phone: +91 12345 67890</p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <Link href="https://facebook.com" target="_blank" className="hover:text-gray-300">
                <Facebook />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="hover:text-gray-300">
                <Twitter />
              </Link>
              <Link href="https://instagram.com" target="_blank" className="hover:text-gray-300">
                <Instagram />
              </Link>
              
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 mt-8">
          &copy; {new Date().getFullYear()} AgroMitra. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
