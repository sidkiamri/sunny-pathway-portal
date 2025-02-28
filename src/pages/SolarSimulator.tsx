
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Sun, Battery, Zap, PlusCircle, MinusCircle, Check } from 'lucide-react';

// Sample data for energy production chart
const monthlyData = [
  { name: 'Jan', value: 350 },
  { name: 'Feb', value: 380 },
  { name: 'Mar', value: 500 },
  { name: 'Apr', value: 580 },
  { name: 'May', value: 620 },
  { name: 'Jun', value: 650 },
  { name: 'Jul', value: 670 },
  { name: 'Aug', value: 630 },
  { name: 'Sep', value: 550 },
  { name: 'Oct', value: 480 },
  { name: 'Nov', value: 390 },
  { name: 'Dec', value: 320 }
];

const SolarSimulator = () => {
  const [panelCount, setPanelCount] = useState(20);
  const [efficiency, setEfficiency] = useState(22);
  const [angle, setAngle] = useState(30);
  const [orientation, setOrientation] = useState('south');
  
  // Calculate estimated production based on inputs
  const calculateProduction = () => {
    const baseProduction = 5000; // Base annual production in kWh
    const efficiencyFactor = efficiency / 20; // Normalize efficiency around 20%
    const panelFactor = panelCount / 10; // Scale based on panel count
    
    // Adjust based on angle and orientation
    let orientationFactor = 1;
    if (orientation === 'south') orientationFactor = 1;
    else if (orientation === 'east' || orientation === 'west') orientationFactor = 0.85;
    else orientationFactor = 0.7;
    
    // Angle modifier (30° is typically optimal in many locations)
    const angleFactor = 1 - Math.abs(angle - 30) / 60;
    
    return Math.round(baseProduction * efficiencyFactor * panelFactor * orientationFactor * angleFactor);
  };
  
  const annualProduction = calculateProduction();
  
  // Calculate savings based on production
  const calculateSavings = () => {
    const electricityRate = 0.15; // $0.15 per kWh
    return Math.round(annualProduction * electricityRate);
  };
  
  const annualSavings = calculateSavings();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="py-12">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Solar System Simulator
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Design and simulate your rooftop solar PV system to calculate potential energy generation and savings.
              </p>
            </div>
          </section>
          
          {/* Simulator Interface */}
          <section className="py-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Controls */}
                <div className="lg:col-span-2 p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-700">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    System Configuration
                  </h2>
                  
                  <div className="space-y-8">
                    {/* Number of Panels */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Number of Solar Panels
                      </label>
                      <div className="flex items-center">
                        <button 
                          onClick={() => setPanelCount(Math.max(1, panelCount - 1))}
                          className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                          <MinusCircle className="h-5 w-5" />
                        </button>
                        <div className="flex-1 text-center text-2xl font-semibold">
                          {panelCount}
                        </div>
                        <button 
                          onClick={() => setPanelCount(panelCount + 1)}
                          className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                          <PlusCircle className="h-5 w-5" />
                        </button>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="100"
                        value={panelCount}
                        onChange={(e) => setPanelCount(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-solar-accent"
                      />
                    </div>
                    
                    {/* Panel Efficiency */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Panel Efficiency (%)
                      </label>
                      <div className="flex items-center">
                        <button 
                          onClick={() => setEfficiency(Math.max(15, efficiency - 1))}
                          className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                          <MinusCircle className="h-5 w-5" />
                        </button>
                        <div className="flex-1 text-center text-2xl font-semibold">
                          {efficiency}%
                        </div>
                        <button 
                          onClick={() => setEfficiency(Math.min(30, efficiency + 1))}
                          className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                          <PlusCircle className="h-5 w-5" />
                        </button>
                      </div>
                      <input
                        type="range"
                        min="15"
                        max="30"
                        value={efficiency}
                        onChange={(e) => setEfficiency(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-solar-accent"
                      />
                    </div>
                    
                    {/* Panel Angle */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Panel Angle (degrees)
                      </label>
                      <div className="flex items-center">
                        <button 
                          onClick={() => setAngle(Math.max(0, angle - 5))}
                          className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                          <MinusCircle className="h-5 w-5" />
                        </button>
                        <div className="flex-1 text-center text-2xl font-semibold">
                          {angle}°
                        </div>
                        <button 
                          onClick={() => setAngle(Math.min(90, angle + 5))}
                          className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        >
                          <PlusCircle className="h-5 w-5" />
                        </button>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="90"
                        step="5"
                        value={angle}
                        onChange={(e) => setAngle(Number(e.target.value))}
                        className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-solar-accent"
                      />
                    </div>
                    
                    {/* Orientation */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Roof Orientation
                      </label>
                      <div className="grid grid-cols-2 gap-3">
                        {['south', 'east', 'west', 'north'].map((dir) => (
                          <button
                            key={dir}
                            onClick={() => setOrientation(dir)}
                            className={`py-2 px-4 text-center rounded-md capitalize ${
                              orientation === dir
                                ? 'bg-solar-accent text-white'
                                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                            } solar-transition`}
                          >
                            {dir}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Results */}
                <div className="lg:col-span-3 p-6 lg:p-8">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                    Energy Production
                  </h2>
                  
                  {/* Chart */}
                  <div className="h-72 my-8 animate-fade-in">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={monthlyData.map(item => ({
                          ...item,
                          value: item.value * (annualProduction / 5000) / 12
                        }))}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#DEB992" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#DEB992" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#DEB992" 
                          fillOpacity={1} 
                          fill="url(#colorValue)" 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                  
                  {/* Summary Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                    {/* Annual Production */}
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-center animate-fade-in">
                      <Sun className="h-8 w-8 text-solar-accent mx-auto mb-2" />
                      <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Annual Production
                      </h3>
                      <p className="text-3xl font-bold">
                        {annualProduction.toLocaleString()} kWh
                      </p>
                    </div>
                    
                    {/* Annual Savings */}
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-center animate-fade-in delay-100">
                      <Zap className="h-8 w-8 text-solar-accent mx-auto mb-2" />
                      <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Annual Savings
                      </h3>
                      <p className="text-3xl font-bold">
                        ${annualSavings.toLocaleString()}
                      </p>
                    </div>
                    
                    {/* CO2 Offset */}
                    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 text-center animate-fade-in delay-200">
                      <Battery className="h-8 w-8 text-solar-accent mx-auto mb-2" />
                      <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                        CO2 Offset
                      </h3>
                      <p className="text-3xl font-bold">
                        {Math.round(annualProduction * 0.7).toLocaleString()} kg
                      </p>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <div className="text-center mt-8">
                    <button className="px-8 py-3 bg-solar-dark text-white rounded-md font-medium button-hover solar-transition inline-flex items-center">
                      <span>Create Detailed Report</span>
                      <Check className="ml-2 h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Features */}
          <section className="py-16 mt-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Simulator Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 animate-fade-in">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-solar-accent/10 rounded-full flex items-center justify-center mr-3">
                    <Sun className="h-5 w-5 text-solar-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Precise Energy Modeling
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Advanced algorithms calculate energy production based on panel specifications, location, and environmental factors.
                </p>
              </div>
              
              {/* Feature 2 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 animate-fade-in delay-100">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-solar-accent/10 rounded-full flex items-center justify-center mr-3">
                    <Battery className="h-5 w-5 text-solar-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Battery Storage Integration
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Model battery storage systems to optimize energy usage and further reduce your electricity bills.
                </p>
              </div>
              
              {/* Feature 3 */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 animate-fade-in delay-200">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-solar-accent/10 rounded-full flex items-center justify-center mr-3">
                    <Zap className="h-5 w-5 text-solar-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Financial Analysis
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Detailed ROI calculations, including payback period, lifetime savings, and financing options.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SolarSimulator;
