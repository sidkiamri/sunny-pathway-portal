
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Sun, Map, CloudSun, Cpu } from 'lucide-react';

const Tools = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow mt-16">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
                Solar Tools & Applications
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in delay-100">
                Powerful tools designed to optimize your solar energy solutions with precision and accuracy.
              </p>
            </div>
          </div>
        </section>

        {/* Split View */}
        <section className="flex flex-col md:flex-row">
          {/* Left Side - Shade Map */}
          <div 
            ref={leftRef}
            className="w-full md:w-1/2 bg-solar-dark text-white py-32 px-8 md:px-16 opacity-0 transition-opacity duration-1000"
          >
            <div className="max-w-md mx-auto">
              <div className="flex items-center mb-6">
                <Map className="h-8 w-8 mr-3 animate-float" />
                <h2 className="text-lg uppercase tracking-wider font-semibold">Shade Analysis</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">Shade Map</h3>
              <p className="text-gray-300 mb-8">
                Advanced shading analysis tool that helps you identify optimal panel placement by visualizing sun exposure throughout the day and seasons.
              </p>
              <Link 
                to="/tools/shade-map" 
                className="inline-block px-8 py-3 border-2 border-white rounded-md font-medium button-hover solar-transition"
              >
                Explore Shade Map
              </Link>
            </div>
          </div>
          
          {/* Right Side - Solar Simulator */}
          <div 
            ref={rightRef}
            className="w-full md:w-1/2 bg-white text-solar-dark py-32 px-8 md:px-16 opacity-0 transition-opacity duration-1000 delay-300"
          >
            <div className="max-w-md mx-auto">
              <div className="flex items-center mb-6">
                <Sun className="h-8 w-8 mr-3 text-solar-accent animate-float" />
                <h2 className="text-lg uppercase tracking-wider font-semibold">Energy Simulation</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">Solar Simulator</h3>
              <p className="text-gray-600 mb-8">
                Design and simulate rooftop solar PV energy generation with precision. Model your system and forecast energy production based on real-world conditions.
              </p>
              <Link 
                to="/tools/solar-simulator" 
                className="inline-block px-8 py-3 bg-solar-dark text-white rounded-md font-medium button-hover solar-transition"
              >
                Design Solar System
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Advanced Solar Technology</h2>
              <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
                Our tools leverage cutting-edge technology to provide you with the most accurate solar planning experience.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300 animate-fade-in">
                <div className="h-12 w-12 bg-solar-accent/10 rounded-md flex items-center justify-center mb-4">
                  <Map className="h-6 w-6 text-solar-accent" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">3D Mapping</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Visualize your roof in three dimensions to accurately assess sun exposure and shading patterns.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300 animate-fade-in delay-100">
                <div className="h-12 w-12 bg-solar-accent/10 rounded-md flex items-center justify-center mb-4">
                  <CloudSun className="h-6 w-6 text-solar-accent" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Weather Data Integration</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Real-time and historical weather data to predict energy generation with high accuracy.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300 animate-fade-in delay-200">
                <div className="h-12 w-12 bg-solar-accent/10 rounded-md flex items-center justify-center mb-4">
                  <Cpu className="h-6 w-6 text-solar-accent" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">AI Optimization</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Advanced algorithms to recommend optimal panel placement and system configuration.
                </p>
              </div>
              
              {/* Feature 4 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300 animate-fade-in delay-300">
                <div className="h-12 w-12 bg-solar-accent/10 rounded-md flex items-center justify-center mb-4">
                  <Sun className="h-6 w-6 text-solar-accent" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Energy ROI Calculation</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Calculate your return on investment based on your specific location and energy costs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tools;
