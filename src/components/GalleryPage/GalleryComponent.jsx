// import React, { useEffect, useRef, useState } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import { X } from 'lucide-react';

// // // Define image items
// // const items = [
// //   { id: 1, url: '/images/image1.jpg' },
// //   { id: 2, url: '/images/image2.jpg' },
// //   { id: 3, url: '/images/image3.jpg' },
// //   { id: 4, url: '/images/image4.jpg' },
// //   { id: 5, url: '/images/image5.jpg' },
// //   { id: 6, url: '/images/image6.jpg' },
// //   { id: 7, url: '/images/image7.jpg' },
// //   { id: 8, url: '/images/image8.jpg' },
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




import { motion } from "framer-motion";

const images = [
  "/gallery/ab.png", "/gallery/ab1.png", "/gallery/ab2.jpg", 
  "/gallery/demo1.jpg", "/gallery/action.jpg", "/gallery/ar.jpg",
  "/gallery/ar1.jpg", "/gallery/bme.jpg", "/gallery/codigo11.jpg", 
  "/gallery/ipla.jpg", "/gallery/iplauction.png", "/gallery/iplauction11.jpg",
  "/gallery/byte.png",  "/gallery/cat11.jpg", "/gallery/pp.png", 
  "/gallery/cat22.png", "/gallery/catt.png", "/gallery/cc1.png", 
  "/gallery/cc11.png", "/gallery/codigo12.png", "/gallery/mindmatrix.png", 
  "/gallery/crono.png", "/gallery/flashm.png",  "/gallery/funmania1.png", 
  "/gallery/mindmatrix1.png", "/gallery/pp2.png", "/gallery/iplauction.png", 
  "/gallery/mindmatrix2.png", "/gallery/iplauction11.jpg", "/gallery/mm1.png",
  "/gallery/pp.png", "/gallery/sher2.png", "/gallery/sherlock.png", 
  "/gallery/sherlock3.png"
];


const titles = [
  "AlphaByte", "AlphaByte", "AlphaByte", "Anantya2k24", "Action Replay",
  "Action Replay", "Action Replay", "Byte Me", "Codigo", "IPL Auction",
  "IPL Auction", "IPL Auction", "Byte Me", "CAT", "Poster Presentation",
  "CAT", "CAT " , "ChronoClash", "ChronoClash", "Codigo", "MindMatrix", "ChronoClash", "Flashmob", "FunMania", 
   "MindMatrix", "Poster Presentation", "IPL Auction", "MindMatrix", "MindMatrix", "Poster Presentation",
   "SherLock", "SherLock","SherLock"
];

// Define varying grid sizes for each image
const gridSizes = [
  "col-span-2 row-span-1", "col-span-1 row-span-1", "col-span-3 row-span-1", "col-span-2 row-span-2", "col-span-1 row-span-1",

  "col-span-3 row-span-1", "col-span-2 row-span-2", "col-span-2 row-span-1", "col-span-2 row-span-1", "col-span-2 row-span-2",
  "col-span-2 row-span-1", "col-span-2 row-span-1", "col-span-3 row-span-1", "col-span-3 row-span-2", "col-span-3 row-span-2",
  "col-span-3 row-span-1", "col-span-2 row-span-2", "col-span-2 row-span-1", "col-span-2 row-span-1", "col-span-2 row-span-2", 
  "col-span-2 row-span-3", "col-span-2 row-span-2",  

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
