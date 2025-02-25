import { motion } from "framer-motion";

const images = [
  "/gallery/ab.png", "/gallery/ab1.png", "/gallery/ab2.jpg", "/gallery/ab.png", "/gallery/demo1.jpg", 
  "/gallery/action.jpg", "/gallery/ar.jpg", "/gallery/ar1.jpg", "/gallery/bme.jpg", "/gallery/codigo11.jpg", 
  "/gallery/ipla.jpg", "/gallery/iplauction.png", "/gallery/iplauction11.jpg", "/gallery/byte.png", "/gallery/cat11.jpg",
  "/gallery/pp.png", "/gallery/cat22.png", "/gallery/catt.png", "/gallery/cc1.png", "/gallery/cc11.png", 
  "/gallery/codigo12.png", "/gallery/mindmatrix.png", "/gallery/crono.png", "/gallery/flashm.png", "/gallery/funmania1.png", 
  "/gallery/mindmatrix1.png", "/gallery/pp2.png", "/gallery/iplauction.png", "/gallery/mindmatrix2.png", "/gallery/iplauction11.jpg",
  "/gallery/mm1.png", "/gallery/pp.png", "/gallery/sher2.png", "/gallery/sherlock.png", "/gallery/sherlock3.png"
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