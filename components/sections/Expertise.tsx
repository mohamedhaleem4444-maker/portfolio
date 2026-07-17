import { FiLayers, FiMap, FiShield, FiTool, FiActivity, FiCompass, FiDatabase } from "react-icons/fi";

export default function Expertise() {
  const expertises = [
    { name: "Foundation Engineering", icon: FiLayers },
    { name: "Ground Improvement", icon: FiMap },
    { name: "Tunnel & Rock Engineering", icon: FiCompass },
    { name: "Retaining Structures", icon: FiShield },
    { name: "Numerical Modelling", icon: FiDatabase },
    { name: "Construction Management", icon: FiTool },
    { name: "Quality Assurance", icon: FiActivity },
  ];

  return (
    <section id="expertise" className="py-24 bg-white dark:bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Engineering Expertise</h2>
          <p className="text-gray-600 dark:text-gray-400">Core competencies that drive project success.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Infographic Central Circle */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-primary/5 border-2 border-primary/20 items-center justify-center z-0">
            <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white shadow-2xl">
              <span className="font-bold text-center text-sm px-2">Complete Geotechnical Lifecycle</span>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 relative z-10">
            {expertises.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className={`glass p-6 rounded-2xl flex flex-col items-center text-center hover:bg-primary hover:text-white transition-all duration-300 group cursor-default
                  ${index === 3 ? "lg:col-start-1 lg:col-span-1" : ""}
                  ${index === 4 ? "lg:col-start-3 lg:col-span-1" : ""}
                  ${index === 5 ? "lg:col-start-1 lg:col-span-1" : ""}
                  ${index === 6 ? "lg:col-start-3 lg:col-span-1" : ""}
                  `}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-white/20 flex items-center justify-center mb-4 transition-colors">
                    <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-sm md:text-base">{item.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
