import { FiAward, FiBookOpen } from "react-icons/fi";

const certifications = [
  "English Course with 12 Levels at Future Company, Aldoki City (Certified)",
];

const standards = [
  "Eurocode 7",
  "FHWA (Federal Highway Administration)",
  "ASTM (American Society for Testing and Materials)"
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-secondary/30 dark:bg-secondary-dark/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            
            <div>
              <div className="flex items-center mb-8">
                <div className="p-3 bg-primary/10 rounded-lg mr-4 text-primary">
                  <FiAward className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Certifications & Languages</h3>
              </div>
              <ul className="space-y-4">
                <li className="glass p-4 rounded-xl flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">Arabic</h4>
                    <p className="text-sm text-gray-500">Native / Mother Tongue</p>
                  </div>
                </li>
                <li className="glass p-4 rounded-xl flex items-start">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">English</h4>
                    <p className="text-sm text-gray-500">Fluent</p>
                  </div>
                </li>
                {certifications.map((cert, idx) => (
                  <li key={idx} className="glass p-4 rounded-xl flex items-start">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 mr-3 flex-shrink-0" />
                    <p className="font-medium text-gray-800 dark:text-gray-200 text-sm">{cert}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center mb-8">
                <div className="p-3 bg-accent/10 rounded-lg mr-4 text-accent">
                  <FiBookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Engineering Standards</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Awareness and application of international design standards in daily engineering practice.
              </p>
              <div className="flex flex-wrap gap-3">
                {standards.map((std, idx) => (
                  <div key={idx} className="glass px-6 py-4 rounded-xl w-full flex items-center shadow-sm">
                    <span className="text-accent font-bold mr-4">0{idx + 1}</span>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">{std}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
