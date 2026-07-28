"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const titles = [
  "Geotechnical Design",
  "Deep Foundations",
  "Numerical Analysis",
  "Tunnel Engineering",
  "PLAXIS Expert",
  "Site Execution",
  "Project Management",
  "Python Automation",
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="py-32 pt-48 flex items-center relative overflow-hidden bg-white dark:bg-secondary-dark/30">
      {/* Background Grid & Particles */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-accent font-semibold tracking-wider uppercase mb-4">
              Senior Geotechnical Engineer
            </h2>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 leading-tight">
              Mohamed <br className="hidden md:block" />
              <span className="text-primary dark:text-white">Abd-elhalim</span>
            </h1>
            
            <div className="h-12 mb-8">
              <motion.p 
                key={titleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-2xl md:text-3xl font-medium text-gray-800 dark:text-gray-200"
              >
                {titles[titleIndex]}
              </motion.p>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-lg">
              Bridging the gap between advanced geotechnical design and on-site execution. Specializing in numerical analysis, deep foundations, and Python automation.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="#contact" className="px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors shadow-lg shadow-primary/25">
                Contact Me
              </Link>
              <Link href="#projects" className="px-8 py-4 bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white font-medium rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
                View Projects
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              {/* Fallback placeholder since image might not be present */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent opacity-20 z-10 rounded-full" />
              <img 
                src="/portrait.png" 
                alt="Mohamed Abd-elhalim" 
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Mohamed+Abd-elhalim&size=512&background=0f4c81&color=fff';
                }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
