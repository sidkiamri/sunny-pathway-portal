
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      {/* Tools Highlight Section - Optimized */}
      <section className="py-24 px-4 min-h-screen flex items-center justify-center">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
              Advanced Solar Tools
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in delay-100">
              Explore our innovative solutions designed to optimize your solar energy systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Shade Map Tool */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300 animate-fade-in transform hover:-translate-y-1">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1501854140801-50d01698950b" 
                  alt="Aerial view of landscape" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-3">Shade Map</h3>
                  <p className="text-gray-200 text-lg">
                    Optimize panel placement with detailed shade analysis
                  </p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                  Our advanced shade mapping tool helps you identify the perfect spots for solar panel installation by analyzing sun exposure throughout the day and seasons.
                </p>
                <Link 
                  to="/tools/shade-map" 
                  className="inline-flex items-center text-solar-dark dark:text-solar-accent font-medium hover:underline text-lg group"
                >
                  <span>Explore Shade Map</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            {/* Solar Simulator Tool */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-300 animate-fade-in delay-100 transform hover:-translate-y-1">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
                  alt="Solar panel with code overlay" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-3">Solar Simulator</h3>
                  <p className="text-gray-200 text-lg">
                    Design and simulate your ideal solar energy system
                  </p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                  Calculate potential energy generation, cost savings, and ROI with our comprehensive solar system design and simulation tool.
                </p>
                <Link 
                  to="/tools/solar-simulator" 
                  className="inline-flex items-center text-solar-dark dark:text-solar-accent font-medium hover:underline text-lg group"
                >
                  <span>Try Solar Simulator</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Link 
              to="/tools" 
              className="inline-block px-10 py-4 bg-solar-dark text-white rounded-md font-medium button-hover solar-transition animate-fade-in delay-200 text-lg hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              View All Tools
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
