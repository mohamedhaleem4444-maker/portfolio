"use client";

import { FiMail, FiPhone, FiLinkedin, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-secondary/30 dark:bg-secondary-dark/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-primary/10 dark:bg-primary/20 text-primary dark:text-accent rounded-full">
                  <FiMail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:mohamedhaleem4444@gmail.com" className="font-medium hover:text-accent transition-colors">
                    mohamedhaleem4444@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-primary/10 dark:bg-primary/20 text-primary dark:text-accent rounded-full">
                  <FiPhone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href="tel:+201125516276" className="font-medium hover:text-accent transition-colors">
                    +20 11 2551 6276
                  </a>
                  <p className="font-medium text-gray-400 text-sm">
                    +218 94 630 2449
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-primary/10 dark:bg-primary/20 text-primary dark:text-accent rounded-full">
                  <FiLinkedin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/mohamed-abd-haleem-b9859b1b3/" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-accent transition-colors">
                    Mohamed Abd-elhalim
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-primary/10 dark:bg-primary/20 text-primary dark:text-accent rounded-full">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-medium">
                    Egypt / Libya
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black/50 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black/50 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black/50 focus:ring-2 focus:ring-primary outline-none transition-all" placeholder="How can I help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-primary-dark text-white font-medium py-3 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
