import fs from "fs";
import path from "path";
import GalleryClient from "./GalleryClient";

export default function Gallery() {
  const galleryDir = path.join(process.cwd(), "public", "gallery");
  const images = [];
  let idCounter = 1;

  if (fs.existsSync(galleryDir)) {
    const folders = fs.readdirSync(galleryDir);
    for (const folder of folders) {
      if (folder === "PLAXIS Models") continue; // Excluded
      
      const folderPath = path.join(galleryDir, folder);
      if (fs.statSync(folderPath).isDirectory()) {
        const files = fs.readdirSync(folderPath);
        for (const file of files) {
          if (file !== "instructions.txt") {
            images.push({
              id: idCounter++,
              src: `/gallery/${folder}/${file}`,
              category: folder,
            });
          }
        }
      }
    }
  }

  const categories = ["All", "Design", "Construction", "Monitoring", "Pile Works", "Site Photos"];

  return <GalleryClient initialImages={images} categories={categories} />;
}
