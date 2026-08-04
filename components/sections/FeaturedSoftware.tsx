"use client";

import { FiCpu, FiClock, FiSettings, FiMail } from "react-icons/fi";

export default function FeaturedSoftware() {
  return (
    <section id="software" className="py-24 bg-white dark:bg-[#0a192f] text-gray-900 dark:text-white">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Software</h2>
          <p className="text-gray-600 dark:text-blue-200 max-w-2xl mx-auto text-lg">
            Developed custom solutions to automate complex engineering workflows and increase productivity.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">
          
          <div className="w-full lg:w-1/2">
            <h3 className="text-4xl font-bold text-accent mb-6">GeoModels Batch Runner</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              A comprehensive Python desktop application designed to automate geotechnical numerical modeling in PLAXIS. It enables batch execution of models (especially useful for seismic cases), scheduling, monitoring, and automated notifications.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="p-3 bg-accent/20 rounded-lg mr-4 text-accent">
                  <FiCpu className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Batch Execution</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Run large numbers of PLAXIS 2D/3D models sequentially without manual intervention.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-accent/20 rounded-lg mr-4 text-accent">
                  <FiClock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Smart Scheduling</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Automate PC shutdown or sleep after models finish running to save power.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-accent/20 rounded-lg mr-4 text-accent">
                  <FiMail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Live Notifications</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Receive email alerts with GUI screenshots updating you on the model's progress.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 bg-accent/20 rounded-lg mr-4 text-accent">
                  <FiSettings className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Custom Commands</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Inject user-defined Python commands into the workflow seamlessly.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <div className="relative rounded-2xl overflow-hidden border border-gray-700 shadow-2xl shadow-accent/20 group w-full">
              <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-[#0a192f] via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity z-10" />
              {/* Using a placeholder for the screenshot provided by user */}
              <img 
                src="/geomodels-screenshot.jpg" 
                alt="GeoModels Batch Runner UI" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/1200x800/1e293b/475569?text=GeoModels+Batch+Runner+Screenshot';
                }}
              />
            </div>

            <a 
              href="https://www.mediafire.com/file/rriymtr286i7pns/Geomodels_Batch_Runner_Setup.rar/file" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 flex items-center justify-center gap-2 px-10 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-colors shadow-lg active:scale-95 w-full sm:w-auto"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </a>
            <p className="mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
              File Size: 63.5 MB
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
