// import React, { useEffect, useRef, useState } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import { X } from 'lucide-react';

// // // Define image items
// // const items = [
// //   { id: 1, url: '/images/image1.webp' },
// //   { id: 2, url: '/images/image2.webp' },
// //   { id: 3, url: '/images/image3.webp' },
// //   { id: 4, url: '/images/image4.webp' },
// //   { id: 5, url: '/images/image5.webp' },
// //   { id: 6, url: '/images/image6.webp' },
// //   { id: 7, url: '/images/image7.webp' },
// //   { id: 8, url: '/images/image8.webp' },
// // ];

// // const Gallery = () => {
// //   return (
// //     <div className="columns-3">
// //       {items.map((item, index) => (
// //         <SliderModal key={index} item={item} itemArr={items} uniqueId={`id-${index}`} />
// //       ))}
// //     </div>
// //   );
// // };

// export const SliderModal = ({ item, uniqueId, itemArr }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [newItem, setNewItem] = useState(item);
//   const [constraints, setConstraints] = useState(0);
//   const carousel = useRef(null);

//   useEffect(() => {
//     const element = carousel.current;
//     if (element) {
//       setConstraints(element.offsetHeight - element.scrollHeight);
//     }
//   }, [carousel, isOpen]);

//   useEffect(() => {
//     if (isOpen) {
//       document.body.classList.add('overflow-hidden');
//     } else {
//       document.body.classList.remove('overflow-hidden');
//     }
    
//     const handleKeyDown = (event) => {
//       if (event.key === 'Escape') {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);
//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [isOpen]);

//   return (
//     <>
//       <motion.div
//         onClick={() => {
//           setIsOpen(true);
//           setNewItem(item);
//         }}
//         className="overflow-hidden mb-3 cursor-pointer">
//         <motion.div layoutId={uniqueId}>
//           <img
//             src={item.url}
//             width={400}
//             height={400}
//             className="bg-white text-black rounded-md w-full"
//             alt="img"
//           />
//         </motion.div>
//       </motion.div>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 z-50 flex items-center justify-center bg-gray-300/80 dark:bg-black/80 backdrop-blur-lg cursor-zoom-out"
//             onClick={() => setIsOpen(false)}>
            
//             <button
//               className="absolute top-2 right-2 p-4 border dark:bg-black/80 text-white bg-gray-400/40 backdrop-blur-lg"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setIsOpen(false);
//               }}>
//               <X />
//             </button>

//             <motion.div
//               layoutId={uniqueId}
//               className="rounded-md w-fit h-[80%] flex gap-2 items-center cursor-auto"
//               onClick={(e) => e.stopPropagation()}>
              
//               {newItem && (
//                 <motion.figure className="dark:bg-gray-900/40 bg-gray-100/40 border rounded-md p-4">
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1, transition: { ease: 'easeInOut', duration: 0.3 } }}
//                     exit={{ opacity: 0, transition: { ease: 'easeInOut', duration: 0.2 } }}>
                    
//                     <img
//                       src={newItem.url}
//                       width={1000}
//                       height={1000}
//                       alt="preview_img"
//                       className="object-contain h-[70vh] mx-auto rounded-md"
//                     />
//                   </motion.div>
//                 </motion.figure>
//               )}
              
//               <motion.div className="h-[300px] overflow-hidden bg-white/40 dark:bg-gray-900/40 border rounded-md" ref={carousel}>
//                 <motion.div
//                   whileDrag={{ scale: 0.95 }}
//                   drag="y"
//                   dragElastic={0.2}
//                   dragConstraints={{ top: constraints, bottom: 0 }}
//                   className="h-fit cursor-grab">
                  
//                   {itemArr.map((itemData, index) => (
//                     <motion.div
//                       key={index}
//                       className="relative p-2 cursor-pointer"
//                       onClick={() => setNewItem(itemData)}>
//                       <img
//                         src={itemData.url}
//                         width={400}
//                         height={400}
//                         alt="img"
//                         className="sm:w-28 w-52 h-16 object-cover rounded-md"
//                       />
//                     </motion.div>
//                   ))}
//                 </motion.div>
//               </motion.div>

//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default SliderModal;

"use client"

// import Image from "next/image"
// import { Button } from "@/components/ui/button"
import { Card, CardContent } from "./../ui/card";
import { Button } from "../ui/button";
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const images = [
  "/gallery/ab.webp", "/gallery/ab1.webp", "/gallery/ab2.webp", "/gallery/demo1.webp",
  "/gallery/action.webp", "/gallery/ar.webp", "/gallery/ar1.webp", "/gallery/bme.webp",
  "/gallery/codigo11.webp", "/gallery/ipla.webp", "/gallery/iplauction.webp", "/gallery/iplauction11.webp",
  "/gallery/byte.webp", "/gallery/cat11.webp", "/gallery/pp.webp", "/gallery/cat22.webp",
  "/gallery/catt.webp", "/gallery/cc1.webp", "/gallery/cc11.webp", "/gallery/codigo12.webp",
  "/gallery/mindmatrix.webp", "/gallery/crono.webp", "/gallery/flashm.webp", "/gallery/funmania1.webp",
  "/gallery/mindmatrix1.webp", "/gallery/pp2.webp", "/gallery/iplauction.webp", "/gallery/mindmatrix2.webp",
  "/gallery/iplauction11.webp", "/gallery/mm1.webp", "/gallery/pp.webp", "/gallery/sher2.webp",
  "/gallery/sherlock.webp", "/gallery/sherlock3.webp"
];

const titles = [
  "AlphaByte", "AlphaByte", "AlphaByte", "Anantya2k24", "Action Replay",
  "Action Replay", "Action Replay", "Byte Me", "Codigo", "IPL Auction",
  "IPL Auction", "IPL Auction", "Byte Me", "CAT", "Poster Presentation",
  "CAT", "CAT", "ChronoClash", "ChronoClash", "Codigo", "MindMatrix", "ChronoClash", "Flashmob", "FunMania", 
  "MindMatrix", "Poster Presentation", "IPL Auction", "MindMatrix", "MindMatrix", "Poster Presentation",
  "SherLock", "SherLock", "SherLock"
];

const galleryItems = titles.map((title, index) => ({
  id: index + 1,
  title,
  image: images[index],
})).sort((a, b) => a.title.localeCompare(b.title));

// console.log(galleryItems)

// galleryItems.splice(galleryItems.indexOf("Anantya2k24"),1);

const categories = [ "All",...new Set(titles)];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredItems = activeCategory === "All" ? galleryItems : galleryItems.filter(item => item.title === activeCategory);

  const [loading,setIsLoading]=useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(!loading);
    },3000)
  },[])

  const Loader = () => {
    return (
      <></>
    );
  };
  

  return (
    <div className="flex flex-col min-h-screen text-white">
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900/20 to-black opacity-60"></div>
          <img
            src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1920&h=800"
            alt="Gallery background with red nebula"
            fill
            className="object-cover"
            priority
          />
        </div>

        <motion.div
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Cosmic{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-[800px] mx-auto">
            Visual explorations of the multiverse, from microscopic quantum particles to vast cosmic structures.
          </p>
        </motion.div>
      </section>

      <section className="  flex flex-wrap py-8  justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={category === activeCategory ? "outline" : "outline"}
            className={`px-4 py-2 setWidth3 rounded-lg cursor-pointer transition-all ${category === activeCategory ? "bg-red-600 text-white" : "border-red-500 text-red-400"}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </section>

      <section className="py-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-16">
        {filteredItems.map((item) => (
          <motion.div key={item.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} >
            <Card className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden">
              <motion.div className="relative aspect-video h-[100%] overflow-hidden">
                {loading?Loader():
                  <motion.img
                  src={item.image}
                  alt={item.title}
                  fill="true"
                  loading="lazy"
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                }
              </motion.div>
              <CardContent className="p-4 text-center">
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
