"use client";

import { useState } from "react";

interface ImageItem {
  id: number;
  src: string;
  category: string;
}

export default function GalleryClient({ initialImages, categories }: { initialImages: ImageItem[], categories: string[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? initialImages 
    : initialImages.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Gallery</h2>
          <p className="text-gray-600 dark:text-gray-400">Glimpses from the field and the design office.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat 
                  ? "bg-primary text-white" 
                  : "bg-secondary dark:bg-secondary-dark hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {initialImages.length === 0 ? (
           <p className="text-center text-gray-500">No images found. Please add images to the public/gallery folders.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((img) => (
              <div key={img.id} className="group relative h-64 rounded-2xl overflow-hidden shadow-md">
                <img 
                  src={img.src} 
                  alt={img.category} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://placehold.co/800x600/1e293b/475569?text=${img.category.replace(' ', '+')}`;
                  }}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">{img.category}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
