
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Clock, MapPin, Sun, ArrowRight, ChevronDown } from 'lucide-react';

const ShadeMap = () => {
  const [date, setDate] = useState('2023-06-21');
  const [time, setTime] = useState('12:00');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="py-12 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-left">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Shade Map
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Advanced shade analysis tool to optimize solar panel placement and maximize energy production.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="px-8 py-3 bg-solar-dark text-white rounded-md font-medium button-hover solar-transition flex items-center justify-center">
                    <span>Start Analysis</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button className="px-8 py-3 border border-gray-300 dark:border-gray-600 rounded-md font-medium hover:bg-gray-50 dark:hover:bg-gray-800 solar-transition flex items-center justify-center">
                    <span>View Demo</span>
                  </button>
                </div>
              </div>
              
              <div className="relative rounded-xl overflow-hidden shadow-xl animate-fade-in-right">
                <div className="bg-gray-200 dark:bg-gray-800 aspect-[4/3] flex items-center justify-center">
                  <div className="relative w-full h-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/40"></div>
                    <img
                      src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
                      alt="Bird's eye view of landscape"
                      className="w-full h-full object-cover animate-scale-in"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3/4 h-3/4 border-2 border-white/30 rounded-lg grid grid-cols-8 grid-rows-6">
                        {Array.from({ length: 48 }).map((_, i) => (
                          <div 
                            key={i} 
                            className="border border-white/20 flex items-center justify-center"
                            style={{ 
                              backgroundColor: `rgba(255, ${Math.floor(Math.max(100, 255 - i * 8))}, 0, ${Math.min(0.7, 0.2 + (i % 8) * 0.02 + (Math.floor(i / 8) % 6) * 0.03)})` 
                            }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/80 dark:bg-black/80 backdrop-blur-sm p-4 flex flex-wrap justify-between items-center gap-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                      <select 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        className="bg-transparent border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:border-solar-accent py-1"
                      >
                        <option value="2023-03-21">Mar 21 (Spring)</option>
                        <option value="2023-06-21">Jun 21 (Summer)</option>
                        <option value="2023-09-21">Sep 21 (Fall)</option>
                        <option value="2023-12-21">Dec 21 (Winter)</option>
                      </select>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                      <select 
                        value={time} 
                        onChange={(e) => setTime(e.target.value)} 
                        className="bg-transparent border-b border-gray-300 dark:border-gray-600 focus:outline-none focus:border-solar-accent py-1"
                      >
                        <option value="08:00">8:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                        <option value="18:00">6:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Sun className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-sm font-medium">84% Sun Exposure</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Features */}
          <section className="py-16 border-t border-gray-200 dark:border-gray-800">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              How Shade Map Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300 relative overflow-hidden group animate-fade-in">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full -translate-x-1/3 -translate-y-1/3 transition-transform group-hover:scale-110"></div>
                <div className="relative">
                  <div className="flex items-center justify-center w-12 h-12 bg-solar-accent/10 rounded-full mb-6">
                    <MapPin className="h-6 w-6 text-solar-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Upload Your Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Enter your address or upload a satellite image of your property to get started.
                  </p>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300 relative overflow-hidden group animate-fade-in delay-100">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full -translate-x-1/3 -translate-y-1/3 transition-transform group-hover:scale-110"></div>
                <div className="relative">
                  <div className="flex items-center justify-center w-12 h-12 bg-solar-accent/10 rounded-full mb-6">
                    <Sun className="h-6 w-6 text-solar-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Analyze Sun Path</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our algorithms calculate sun exposure throughout the day and year based on your location.
                  </p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300 relative overflow-hidden group animate-fade-in delay-200">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full -translate-x-1/3 -translate-y-1/3 transition-transform group-hover:scale-110"></div>
                <div className="relative">
                  <div className="flex items-center justify-center w-12 h-12 bg-solar-accent/10 rounded-full mb-6">
                    <ChevronDown className="h-6 w-6 text-solar-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Get Recommendations</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Receive detailed reports and optimal placement suggestions for your solar panels.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          {/* CTA */}
          <section className="py-16 my-8 bg-solar-dark text-white rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-solar-dark to-transparent"></div>
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-12 grid-rows-6 h-full">
                {Array.from({ length: 72 }).map((_, i) => (
                  <div key={i} className="border border-white/5"></div>
                ))}
              </div>
            </div>
            
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
                Ready to optimize your solar setup?
              </h2>
              <p className="text-xl text-gray-300 mb-8 animate-fade-in delay-100">
                Start your shade analysis today and maximize your energy production.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in delay-200">
                <button className="px-8 py-4 bg-white text-solar-dark rounded-md font-medium button-hover solar-transition">
                  Start Free Analysis
                </button>
                <button className="px-8 py-4 border border-white/70 rounded-md font-medium hover:bg-white/10 solar-transition">
                  Learn More
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ShadeMap;
