export default function Skills() {
  const categories = [
    {
      title: "Geotechnical Software",
      skills: ["PLAXIS 2D", "PLAXIS 3D", "GeoStudio", "Slide", "Settle3D", "StoneC", "AllPile", "LiqSVs"]
    },
    {
      title: "Drafting & Modeling",
      skills: ["Civil 3D", "AutoCAD", "SAFE", "SAP2000"]
    },
    {
      title: "Programming & Automation",
      skills: ["Python", "VBA", "Batch Scripting", "Desktop Software Development"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/30 dark:bg-secondary-dark/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-6 text-primary dark:text-accent border-b border-gray-200 dark:border-gray-800 pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 bg-white/60 dark:bg-black/40 text-sm font-medium rounded-lg text-gray-800 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-gray-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
