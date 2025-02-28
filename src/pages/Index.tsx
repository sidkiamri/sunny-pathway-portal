
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-solar-dark">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section with split layout like the image */}
        <section className="min-h-[80vh] flex flex-col md:flex-row">
          {/* Left side - Dark */}
          <div className="w-full md:w-1/2 bg-solar-dark text-white p-8 md:p-16 flex items-center justify-center">
            <div className="max-w-lg mx-auto">
              <div className="mb-6 animate-fade-in">
                <div className="inline-flex items-center space-x-2 text-red-500 font-medium">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  <span>AI SOLUTIONS</span>
                </div>
              </div>
              
              <h1 className="text-5xl font-bold mb-6 animate-fade-in delay-100">
                Intelligent Future
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 animate-fade-in delay-200">
                Transforming industries with cutting-edge artificial intelligence solutions.
              </p>
              
              <Link to="/about" className="inline-block px-8 py-3 bg-white text-solar-dark rounded-md font-medium button-hover solar-transition animate-fade-in delay-300">
                Explore AI
              </Link>
            </div>
          </div>
          
          {/* Right side - Light */}
          <div className="w-full md:w-1/2 bg-white text-solar-dark p-8 md:p-16 flex items-center justify-center">
            <div className="max-w-lg mx-auto">
              <div className="mb-6 animate-fade-in">
                <div className="inline-flex items-center space-x-2 text-yellow-500 font-medium">
                  <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                  <span>SOLAR TECH</span>
                </div>
              </div>
              
              <h1 className="text-5xl font-bold mb-6 animate-fade-in delay-100">
                Solar Future
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 animate-fade-in delay-200">
                Revolutionary solar-powered vehicles for a sustainable tomorrow.
              </p>
              
              <Link to="/tools" className="inline-block px-8 py-3 bg-solar-dark text-white rounded-md font-medium button-hover solar-transition animate-fade-in delay-300">
                Discover Solar
              </Link>
            </div>
          </div>
        </section>
        
        {/* Tools Highlight Section - OPTIMIZED */}
        <section className="py-24 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Advanced Solar Tools
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Explore our innovative solutions designed to optimize your solar energy systems.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Shade Map Tool - Updated with more relevant image */}
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300 animate-fade-in h-full">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src="/lovable-uploads/cd83c23b-79b1-46ac-885b-8f6fcf9364f4.png" 
                    alt="3D roof model with shade analysis overlay" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Shade Map</h3>
                    <p className="text-gray-200">
                      Optimize panel placement with detailed shade analysis
                    </p>
                  </div>
                </div>
                <div className="p-6 flex flex-col h-[calc(100%-56.25%)]">
                  <p className="text-gray-600 dark:text-gray-300 mb-auto">
                    Our advanced shade mapping tool helps you identify the perfect spots for solar panel installation by analyzing sun exposure throughout the day and seasons.
                  </p>
                  <Link 
                    to="/tools/shade-map" 
                    className="inline-flex items-center text-solar-dark dark:text-solar-accent font-medium hover:underline mt-6 group"
                  >
                    <span>Explore Shade Map</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              
              {/* Solar Simulator Tool - Updated with more relevant image */}
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow duration-300 animate-fade-in delay-100 h-full">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581084349663-5199d32c0db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Solar panel installation with data visualization overlay" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Solar Simulator</h3>
                    <p className="text-gray-200">
                      Design and simulate your ideal solar energy system
                    </p>
                  </div>
                </div>
                <div className="p-6 flex flex-col h-[calc(100%-56.25%)]">
                  <p className="text-gray-600 dark:text-gray-300 mb-auto">
                    Calculate potential energy generation, cost savings, and ROI with our comprehensive solar system design and simulation tool.
                  </p>
                  <Link 
                    to="/tools/solar-simulator" 
                    className="inline-flex items-center text-solar-dark dark:text-solar-accent font-medium hover:underline mt-6 group"
                  >
                    <span>Try Solar Simulator</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/tools" 
                className="inline-block px-8 py-4 bg-solar-dark text-white rounded-md font-medium button-hover solar-transition hover:bg-opacity-90 transition-all animate-fade-in"
              >
                View All Tools
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
