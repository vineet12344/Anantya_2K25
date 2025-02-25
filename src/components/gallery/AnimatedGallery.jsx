import { motion } from "framer-motion";

const images = [
  "public/gallery/ab.png", "public/gallery/ab1.png", "public/gallery/ab2.jpg", "public/gallery/ab.png", "public/gallery/demo1.jpg", 
  "public/gallery/action.jpg", "public/gallery/ar.jpg", "public/gallery/ar1.jpg", "public/gallery/bme.jpg", "public/gallery/codigo11.jpg", 
  "public/gallery/ipla.jpg", "public/gallery/iplauction.png", "public/gallery/iplauction11.jpg", "public/gallery/byte.png", "public/gallery/cat11.jpg",
  "public/gallery/pp.png", "public/gallery/cat22.png", "public/gallery/catt.png", "public/gallery/cc1.png", "public/gallery/cc11.png", 
  "public/gallery/codigo12.png", "public/gallery/mindmatrix.png", "public/gallery/crono.png", "public/gallery/flashm.png", "public/gallery/funmania1.png", 
  "public/gallery/mindmatrix1.png", "public/gallery/pp2.png", "public/gallery/iplauction.png", "public/gallery/mindmatrix2.png", "public/gallery/iplauction11.jpg",
  "public/gallery/mm1.png", "public/gallery/pp.png", "public/gallery/sher2.png", "public/gallery/sherlock.png", "public/gallery/sherlock3.png"
];

const titles = [
  "AlphaByte", "AlphaByte", "AlphaByte", "Anantya2k24", "Action Replay",
  "Action Replay", "Action Replay", "Byte Me", "Codigo", "IPL Auction",
  "IPL Auction", "IPL Auction", "Byte Me", "CAT", "Poster Presentation",
  "CAT", "CAT", "ChronoClash", "ChronoClash", "Codigo", "MindMatrix", "ChronoClash", "Flashmob", "FunMania", 
  "MindMatrix", "Poster Presentation", "IPL Auction", "MindMatrix", "MindMatrix", "Poster Presentation",
  "SherLock", "SherLock", "SherLock"
];

const gridSizes = [
  "col-span-2 row-span-1", "col-span-1 row-span-1", "col-span-3 row-span-1", "col-span-2 row-span-2", "col-span-1 row-span-1",
  "col-span-3 row-span-1", "col-span-2 row-span-2", "col-span-2 row-span-1", "col-span-2 row-span-1", "col-span-2 row-span-2",
  "col-span-2 row-span-1", "col-span-2 row-span-1", "col-span-3 row-span-1", "col-span-3 row-span-2", "col-span-3 row-span-2",
  "col-span-3 row-span-1", "col-span-2 row-span-2", "col-span-2 row-span-1", "col-span-2 row-span-1", "col-span-2 row-span-2", 
  "col-span-2 row-span-3", "col-span-2 row-span-2"
];

export default function AnimatedGallery() {
  return (
    <div className="relative p-8">
      <div className="grid grid-cols-6 auto-rows-[250px] gap-4">
        {images.map((src, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
            className={`relative rounded-lg overflow-hidden shadow-lg ${gridSizes[i % gridSizes.length]}`}
          >
            <img src={src} alt={`Gallery ${i}`} className="w-full h-full object-cover"/>
            <motion.div 
              className="absolute inset-0 bg-black opacity-0 flex items-center justify-center text-white text-lg font-bold"
              whileHover={{ opacity: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              {titles[i % titles.length]}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}