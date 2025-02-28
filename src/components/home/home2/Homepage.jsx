"use client";
import { Calendar, ImageIcon, Users, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import "./Slider.css";
import "./GlitchText.css";
import PortalEffect from "./portal-effect";
import img from "./../../../../public/main poster.jpg"
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate=useNavigate();
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative p-5 py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0 h-full">
          <div className="absolute h-full inset-0 from-black via-red-900/20 to-black opacity-60"></div>
          <img
            src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1920&h=1080&auto=format&fit=crop"
            alt="Cosmic background with red nebula"
            className="object-cover w-full h-[70vh] lg:h-[80vh] md:h-[80vh] "
            priority="true"
          />
        </div>

        <div className=" relative z-10 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 ">
                Anantya{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
                  2025
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-[600px]">
                Journey through black holes, distant planets, and alternate realities. Discover the secrets of the
                cosmos and the Marvel multiverse.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <PortalEffect />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 mt-12 md:py-24 cosmic-gradient">
        <div className="">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Discover Cosmic Wonders</h2>
            <p className="text-gray-300 max-w-[800px] mx-auto">
              From the quantum realm to the vastness of space, explore the marvels of our multiverse.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <img
              className="border-4 setWidth2  border-white shadow-white shadow-2xl"
              src={img}
              alt="mainPoster"
            />
          </motion.div>
        </div>
      </section>

     

      <section className="py-16 bg-black">
        <div className="">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item} whileHover={{ y: -10 }}>
              <a href="#" onClick={()=>navigate("/events")} className="">
                <div className="bg-gray-900/60 border border-red-900/30 rounded-lg p-6 text-center hover:bg-red-900/20 transition-colors">
                  <div className="bg-red-900/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-800/50 transition-colors">
                    <Sparkles className="h-6 w-6 text-red-400" />
                  </div>
                  <h3 className="font-medium">Events</h3>
                </div>
              </a>
            </motion.div>

            <motion.div variants={item} whileHover={{ y: -10 }}>
              <a href="#" onClick={()=>navigate("gallery")} className="group">
                <div className="bg-gray-900/60 border border-red-900/30 rounded-lg p-6 text-center hover:bg-red-900/20 transition-colors">
                  <div className="bg-red-900/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-800/50 transition-colors">
                    <ImageIcon className="h-6 w-6 text-red-400" />
                  </div>
                  <h3 className="font-medium">Gallery</h3>
                </div>
              </a>
            </motion.div>

            <motion.div variants={item} whileHover={{ y: -10 }}>
              <a href="#" onClick={()=>navigate("calendar")} className="group">
                <div className="bg-gray-900/60 border border-red-900/30 rounded-lg p-6 text-center hover:bg-red-900/20 transition-colors">
                  <div className="bg-red-900/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-800/50 transition-colors">
                    <Calendar className="h-6 w-6 text-red-400" />
                  </div>
                  <h3 className="font-medium">Calendar</h3>
                </div>
              </a>
            </motion.div>

            <motion.div variants={item} whileHover={{ y: -10 }}>
              <a href="#" onClick={()=>navigate("/team")} className="group">
                <div className="bg-gray-900/60 border border-red-900/30 rounded-lg p-6 text-center hover:bg-red-900/20 transition-colors">
                  <div className="bg-red-900/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-800/50 transition-colors">
                    <Users className="h-6 w-6 text-red-400" />
                  </div>
                  <h3 className="font-medium">Team</h3>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-red-900/20 to-black opacity-70"></div>
          <img
            src="https://images.unsplash.com/photo-1539321908154-04927596764d?q=80&w=1920&h=800"
            alt="Cosmic background with red galaxy"
            fill="true"
            className="object-cover"
          />
        </div>

        <div className=" relative z-10">
          <motion.div
            className="w-[100vw] mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold">Ready to Traverse the Multiverse?</h2>
            <p className="text-xl text-gray-300">
              Join our cosmic community and be the first to know about new discoveries, events, and interdimensional
              adventures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div style={{background:"url('https://images.unsplash.com/photo-1539321908154-04927596764d?q=80&w=1920&h=800')"}}>
                <h2 className="text glitch" data-text={""}>
                  {/* {texts[i]} */}
                </h2>
                <main>
                  <div
                    className="slider"
                    style={{
                      "--width": "100px",
                      "--height": "50px",
                      "--quantity": "12",
                    }}
                  >
                    <div className="list">
                      {[...Array(12)].map((_, index) => (
                        <div
                          className={`item item+${index}`}
                          style={{ "--position": index + 1 }}
                          key={index}
                        >
                          {/* <img src={`./slide/slider1_${index + 1}.png`} alt="" /> */}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className="slider"
                    data-reverse="true"
                    style={{
                      "--width": "200px",
                      "--height": "200px",
                      "--quantity": "12",
                    }}
                  >
                    <div className="list">
                      {[...Array(12)].map((_, index) => (
                        <div
                          className="item"
                          style={{ "--position": index + 1 }}
                          key={index}
                        >
                          <img
                            src={`/slide/slider2_${index + 1}.png`}
                            alt=""
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </main>
                <div className="head2">
                  <h2 className="text glitch" data-text={""}>
                    {/* {texts[i + 1]} */}
                  </h2>
                </div>
              </div> 
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

