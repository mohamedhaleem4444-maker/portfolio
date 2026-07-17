import { FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#050505] border-t border-gray-200 dark:border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tighter text-primary dark:text-white mb-2">
              M. Osman
            </h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-sm">
              "Engineering is the art of modeling materials we do not wholly understand, into shapes we cannot precisely analyze so as to withstand forces we cannot properly assess, in such a way that the public has no reason to suspect the extent of our ignorance." <br />- Dr. A. R. Dykes
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/mohamed-abd-haleem-b9859b1b3/" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary dark:bg-secondary-dark rounded-full hover:bg-accent hover:text-white transition-colors">
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a href="mailto:mohamedhaleem4444@gmail.com" className="p-3 bg-secondary dark:bg-secondary-dark rounded-full hover:bg-accent hover:text-white transition-colors">
              <FiMail className="w-5 h-5" />
            </a>
            <a href="tel:+201125516276" className="p-3 bg-secondary dark:bg-secondary-dark rounded-full hover:bg-accent hover:text-white transition-colors">
              <FiPhone className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Mohamed Abd-elhalim Mohamed Osman. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
