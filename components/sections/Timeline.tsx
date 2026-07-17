const experiences = [
  {
    company: "Khalifa Holding Group-ASCO Company",
    role: "Project Manager / Senior Geotechnical Engineer",
    date: "June 2024 – Present",
    location: "Libya, Benghazi",
    description: "Establishing the foundation department. Project management and piling works supervision.",
    projects: [
      {
        name: "Fouihat Complex",
        role: "Project Manager",
        details: "Design and Implementation of secant piles wall shoring system and 1000 structure retaining piles.",
      },
      {
        name: "Juliana Port Seeds Silos",
        role: "Project Manager",
        details: "Design of tower shoring system, 750 piles using segmental casing, dewatering installation.",
      },
      {
        name: "Benghazi Commercial Center",
        role: "Project Manager",
        details: "Rock cavitation fulfilling, secant pile wall installation, and artesian wells water sealing.",
      }
    ]
  },
  {
    company: "Hamza & Associates",
    role: "Geotechnical Engineer",
    date: "June 2023 - June 2024",
    location: "Cairo, Egypt",
    description: "Focus on Geotechnical Design Engineering and Numerical Analysis.",
    projects: [
      {
        name: "Taba Airport – Taba City Railway Tunnel",
        role: "Design Engineer",
        details: "NATM preliminary design, geological conditions study, rock bolts, shotcrete design.",
      },
      {
        name: "Greater Cairo Metro Line 4",
        role: "Monitoring & Design",
        details: "Elements monitoring analysis (Strain gauges, Inclinometers) and shoring system design check.",
      },
      {
        name: "Luxor – Safaga High Speed Railway",
        role: "Design Engineer",
        details: "Slope stability evaluation of the cut and fill sections.",
      }
    ]
  },
  {
    company: "BAUER EGYPT",
    role: "Geotechnical Engineer",
    date: "Jan 2021 - June 2023",
    location: "Cairo, Egypt",
    description: "Focus on Construction, Site Management, and Quality Control.",
    projects: [
      {
        name: "Cairo Metro Line 4 – Elarish Station",
        role: "Site Engineer",
        details: "Diaphragm wall and barrettes, impermeable plug injection, slurry wall installation.",
      },
      {
        name: "Damietta & Sokhna Ports",
        role: "Site Engineer",
        details: "Implementation of major diaphragm walls and barrettes.",
      },
      {
        name: "Eldikhela Port",
        role: "Site Engineer",
        details: "Installation of 1000 bored piles and 700m of diaphragm wall.",
      }
    ]
  }
];

export default function Timeline() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-[#050505]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Experience Timeline</h2>
        
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary transform md:-translate-x-1/2 rounded-full" />
          
          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-center mb-24 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              {/* Timeline Dot */}
              <div className="absolute left-[-8px] md:left-1/2 top-8 w-5 h-5 bg-white border-4 border-primary rounded-full transform md:-translate-x-1/2 z-10" />
              
              <div className="w-full md:w-1/2" />
              
              <div className={`w-full md:w-1/2 p-6 md:p-8 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"} ml-6 md:ml-0`}>
                <div className="glass p-8 rounded-2xl hover:shadow-xl transition-shadow relative">
                  <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-4 py-1 rounded-tr-2xl rounded-bl-xl">
                    {exp.date}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-primary dark:text-accent mb-1 pr-24">{exp.company}</h3>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">{exp.role}</h4>
                  <p className="text-sm text-gray-500 mb-6 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {exp.location}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">
                    {exp.description}
                  </p>
                  
                  <div className="space-y-4 border-t border-gray-200 dark:border-gray-800 pt-4">
                    <h5 className="font-bold text-gray-900 dark:text-gray-100 mb-3">Key Projects:</h5>
                    {exp.projects.map((proj, idx) => (
                      <div key={idx} className="bg-white/50 dark:bg-black/20 p-4 rounded-lg">
                        <span className="text-sm font-bold block mb-1 text-primary dark:text-white">{proj.name}</span>
                        <span className="text-xs text-gray-500 block mb-2">{proj.role}</span>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{proj.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
