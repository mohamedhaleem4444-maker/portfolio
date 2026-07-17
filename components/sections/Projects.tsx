"use client";

import { FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Greater Cairo Metro Line 4",
    category: "Design & Construction",
    description: "Monitoring analysis, shoring system design check, and installation of diaphragm walls and barrettes for Elarish Station.",
    tags: ["PLAXIS 2D", "Diaphragm Walls", "Monitoring"]
  },
  {
    title: "Slope stability of Luxor – Safaga High Speed Railway",
    category: "Design Engineering",
    description: "Slope stability analysis and design for the Luxor-Safaga high-speed railway infrastructure.",
    tags: ["Slope Stability", "Railway", "Geotechnical Design"]
  },
  {
    title: "Juliana Port Seeds Silos",
    category: "Project Management",
    description: "Project management for tower shoring system design, 750 piles using segmental casing, and dewatering installation.",
    tags: ["Segmental Casing", "Dewatering", "Piling"]
  },
  {
    title: "Fouihat Complex",
    category: "Execution & Design",
    description: "Design and implementation of secant piles wall shoring system and installation of 1000 structure retaining piles.",
    tags: ["Secant Piles", "Shoring System"]
  },
  {
    title: "Damietta & Sokhna Ports",
    category: "Site Execution",
    description: "Implementation of major diaphragm walls and barrettes for port infrastructure.",
    tags: ["Barrettes", "Marine Works"]
  },
  {
    title: "Benghazi Commercial Center",
    category: "Geotechnical Engineering",
    description: "Geotechnical design and execution supervision for the new commercial center in Benghazi.",
    tags: ["Foundation Design", "Commercial", "Execution"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary/50 dark:bg-secondary-dark/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-700 dark:text-gray-300">A selection of major infrastructure projects across Egypt and Libya.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full group">
              <div className="h-48 bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 z-10" />
                <img 
                  src={`/project-${index + 1}.png`} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 bg-white/90 dark:bg-black/80 text-xs font-bold rounded-full text-primary dark:text-accent">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
