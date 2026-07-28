import { FiCheckCircle } from "react-icons/fi";

const designSkills = [
  "PLAXIS 2D / 3D",
  "GeoStudio",
  "Slide",
  "Settle3D",
  "Stone Columns",
  "Liquefaction",
  "Tunnel Design",
  "Retaining Structures",
  "Rock Engineering",
  "Numerical Analysis"
];

const constructionSkills = [
  "Project Management",
  "Pile Installation",
  "Secant Walls",
  "Diaphragm Walls",
  "Barrettes",
  "Site Supervision",
  "Quality Assurance",
  "Planning",
  "Equipment Management",
  "Contractor Coordination"
];

export default function DualCareer() {
  return (
    <section id="dual-career" className="py-24 bg-white dark:bg-secondary-dark/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Dual Career Expertise</h2>
          <p className="text-gray-700 dark:text-gray-300">Bridging the gap between theory and practice.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Design Card */}
          <div className="glass p-10 rounded-2xl border-t-4 border-t-primary shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-6">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold">Geotechnical Design</h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {designSkills.map((skill, index) => (
                <li key={index} className="flex items-center text-gray-700 dark:text-gray-300 font-medium">
                  <FiCheckCircle className="text-accent mr-3 flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Construction Card */}
          <div className="glass p-10 rounded-2xl border-t-4 border-t-accent shadow-xl hover:shadow-2xl transition-shadow">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mr-6">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold">Construction & Execution</h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {constructionSkills.map((skill, index) => (
                <li key={index} className="flex items-center text-gray-700 dark:text-gray-300 font-medium">
                  <FiCheckCircle className="text-primary mr-3 flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
