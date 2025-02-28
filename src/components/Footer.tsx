
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-solar-dark pt-16 pb-12 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12 animate-fade-in">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">SolarTech</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Revolutionizing solar energy solutions for a sustainable future.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition duration-150 ease-in-out">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition duration-150 ease-in-out">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition duration-150 ease-in-out">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition duration-150 ease-in-out">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-3">
              <li><Link to="/solar-panels" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition duration-150 ease-in-out">Solar Panels</Link></li>
              <li><Link to="/batteries" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition duration-150 ease-in-out">Batteries</Link></li>
              <li><Link to="/inverters" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition duration-150 ease-in-out">Inverters</Link></li>
              <li><Link to="/accessories" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition duration-150 ease-in-out">Accessories</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider mb-4">Tools</h3>
            <ul className="space-y-3">
              <li><Link to="/tools/shade-map" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition duration-150 ease-in-out">Shade Map</Link></li>
              <li><Link to="/tools/solar-simulator" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition duration-150 ease-in-out">Solar Simulator</Link></li>
              <li><Link to="/tools/energy-calculator" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition duration-150 ease-in-out">Energy Calculator</Link></li>
              <li><Link to="/tools/roi-calculator" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition duration-150 ease-in-out">ROI Calculator</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                <span className="text-gray-600 dark:text-gray-300">info@solartech.com</span>
              </li>
              <li><Link to="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition duration-150 ease-in-out">Contact Form</Link></li>
              <li><Link to="/support" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition duration-150 ease-in-out">Support</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition duration-150 ease-in-out">Careers</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
            &copy; {new Date().getFullYear()} SolarTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
