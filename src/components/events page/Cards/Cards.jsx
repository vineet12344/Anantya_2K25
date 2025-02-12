// import { cn } from "../../../lib/utils";
// import { AnimatePresence, motion } from "framer-motion";
// import { useState } from "react";

// export const HoverEffect = ({ items, className }) => {
//   let [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-6", className)}>
//       {items.map((item, idx) => (
//         <a
//           href={item?.link}
//           key={item?.link}
//           className="relative group block p-2 h-full w-full"
//           onMouseEnter={() => setHoveredIndex(idx)}
//           onMouseLeave={() => setHoveredIndex(null)}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <AnimatePresence>
//             {hoveredIndex === idx && (
//               <motion.span
//                 className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
//                 layoutId="hoverBackground"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1, transition: { duration: 0.15 } }}
//                 exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
//               />
//             )}
//           </AnimatePresence>

//           {/* Card Component */}
//           <Card image={item.image} title={item.title} description={item.description} />
//         </a>
//       ))}
//     </div>
//   );
// };

// export const Card = ({ className, image, title, description }) => {
//   return (
//     <div
//       className={cn(
//         "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
//         className
//       )}
//     >
//       {/* Image Section */}
//       {image && (
//         <div className="w-full h-40">
//           <img src={image} alt={title || "Card Image"} className="w-full h-full object-cover rounded-xl" />
//         </div>
//       )}

//       {/* Content */}
//       <div className="relative z-50 p-4">
//         <CardTitle>{title}</CardTitle>
//         <CardDescription>{description}</CardDescription>
//       </div>
//     </div>
//   );
// };

// export const CardTitle = ({ className, children }) => {
//   return <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-2", className)}>{children}</h4>;
// };

// export const CardDescription = ({ className, children }) => {
//   return <p className={cn("mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>{children}</p>;
// // };






// ############################################################################################################################################################################################################

// WORKING STUFF DOWN HERE 








// import { cn } from "../../../lib/utils";
// import { AnimatePresence, motion } from "framer-motion";
// import { useState } from "react";

// export const HoverEffect = ({ items, className }) => {
//     let [hoveredIndex, setHoveredIndex] = useState(null);
  
//     return (
//       <div className="flex justify-center items-center min-h-screen w-full">
//         <div
//           className={cn(
//             "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto py-10 gap-10 px-6", // Centered grid with spacing
//             className
//           )}
//         >
//           {items.map((item, idx) => (
//             <a
//               href={item?.link}
//               key={item?.link}
//               className="relative group block p-4 h-full w-full"
//               onMouseEnter={() => setHoveredIndex(idx)}
//               onMouseLeave={() => setHoveredIndex(null)}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <AnimatePresence>
//                 {hoveredIndex === idx && (
//                   <motion.span
//                     className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
//                     layoutId="hoverBackground"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1, transition: { duration: 0.15 } }}
//                     exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
//                   />
//                 )}
//               </AnimatePresence>
  
//               <Card image={item.image} title={item.title} description={item.description} />
//             </a>
//           ))}
//         </div>
//       </div>
//     );
//   };
//   export const Card = ({ className, image, title, description }) => {
//     return (
//       <div
//         className={cn(
//           "rounded-2xl p-6 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20 shadow-lg", // Added padding for spacing
//           className
//         )}
//       >
//         {/* Image Section */}
//         {image && (
//           <div className="w-full h-52">
//             <img src={image} alt={title || "Card Image"} className="w-full h-full object-cover rounded-xl" />
//           </div>
//         )}
  
//         {/* Content */}
//         <div className="relative z-50 p-4">
//           <CardTitle>{title}</CardTitle>
//           <CardDescription>{description}</CardDescription>
//         </div>
//       </div>
//     );
//   };

// export const CardTitle = ({ className, children }) => {
//   return <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-2", className)}>{children}</h4>;
// };

// export const CardDescription = ({ className, children }) => {
//   return <p className={cn("mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>{children}</p>;
// };




// ############################################################################################################################################################################################################

import { cn } from "../../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto py-10 gap-10 px-6", // Centered grid with spacing
          className
        )}
      >
        {items.map((item, idx) => (
          <a
            href={item?.link}
            key={item?.link}
            className="relative group block h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                />
              )}
            </AnimatePresence>

            <Card image={item.image} title={item.title} />
          </a>
        ))}
      </div>
    </div>
  );
};

export const Card = ({ className, image, title }) => {
  return (
    <div
      className={cn(
        "rounded-2xl p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-amber-300 relative z-20 shadow-lg flex flex-col items-center gap-20 min-w-[300px] min-h-[350px]", // Ensured min size
        className
      )}
    >
      {/* Large Image */}
      {image && (
        <div className="w-full h-[85%]">
          <img src={image} alt={title || "Event Poster"} className="w-full h-full object-cover rounded-xl" />
        </div>
      )}

      {/* Event Name */}
      <div className="relative z-50 text-center p-4">
        <CardTitle>{title}</CardTitle>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-2 text-lg", className)}>{children}</h4>;
};

