// app/testAnnatya/Anantya_test-main/Anantya_test-main/src/components/team/Team.jsx
// import React from "react";
// import SpiderManAnimation from "../gallery/back";
// import CosmicAnimation from "../gallery/back";
import bg from "./../../../public/bg_3.jpg";
import { useEffect,useState } from "react";
// eslint-disable-next-line react/prop-types
import { motion } from "framer-motion";
const TeamCard = ({ name, role, imageUrl, linkedinUrl }) => {
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(!loading);
    },1000)
  },[])

  return (
    <>
      <div className="relative bg-gradient-to-t from-[#990000] via-[#c70c0c] to-[#FF0000] w-full max-w-[300px] p-2 rounded-3xl group transition-all duration-500 ease-in-out transform hover:scale-105">
        <div className="bg-black rounded-3xl py-4  px-2 flex flex-col items-center text-center justify-center min-h-[40vh] transition-all duration-500 ease-in-out group-hover:bg-transparent">
          {/* Default State */}
          <div className="flex flex-col justify-start items-center transition-opacity duration-500 ease-in-out opacity-100 group-hover:opacity-0">
            {loading?<></>:<img
              src={imageUrl}
              width={200}
              height={200}
              className="w-[80%] h-[80%] max-h-[250px] rounded-lg object-cover border-2 border-black"
            />}
            <span className="mt-4 text-lg sm:text-xl font-medium text-white transition-colors duration-500 ease-in-out group-hover:text-black">
              {role}
            </span>
          </div>

          {/* Hover State */}
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
            <span className="text-lg sm:text-xl font-semibold text-black">
              {name}
            </span>
            <a
              href={linkedinUrl}
              className="mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin text-black text-3xl transition-transform duration-300 ease-in-out hover:scale-110"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TeamGrid() {
  const teamMembers = [
    {
      name: "WebMaster, ACM PCCOE ",
      role: "Vineet Salve",
      imageUrl: "/team/vineet.jpg",
      linkedinUrl: "https://www.linkedin.com/in/vineetsalve?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "WebMaster ,  ACM PCCOE",
      role: "Amey Jadhav",
      imageUrl: "/team/amey.jpg",
      linkedinUrl: "https://www.linkedin.com/in/amey-jadhav-208984267/",
    },
    {
      name: "WebHead ,OWASP PCCOE",
      role: "Sumit Pisal",
      imageUrl: "/team/sumit.jpg",
      linkedinUrl: "https://www.linkedin.com/in/sumit-pisal/",
    },
    {
      name: "WebMaster ,ACM-W PCCOE ",
      role: "Mansi Sabale",
      imageUrl: "/team/mansi.jpg",
      linkedinUrl: "https://www.linkedin.com/in/manasi-sabale-36a638233/",
    },
    {
      name: "WebMaster ,ISTE PCCOE",
      role: "Sumedh Pimplikar",
      imageUrl: "/team/sumedh.jpg",
      linkedinUrl: "https://www.linkedin.com/in/sumedh-pimplikar",
    },
    {
      name: "Jr WebMaster ,OWASP PCCOE",
      role: "Pushkar Kirange",
      imageUrl: "/team/pushkar.jpg",
      linkedinUrl: "www.linkedin.com/in/sumedh-pimplikar",
    },
    {
      name: "Jr WebMaster ,ACM PCCOE",
      role: "Parth Joshi",
      imageUrl: "/team/parth.jpg",
      linkedinUrl: "https://www.linkedin.com/in/parth-joshi-9ab997306/",
    },
  ];

  return (
    <>
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900/20 to-black opacity-60"></div>
          <img
            src="https://images.unsplash.com/photo-1539321908154-04927596764d?q=80&w=1920&h=800"
            alt="Team background with red galaxy"
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
            MEET OUR
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-800">
              {" "}
              WEB-TEAM
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-[800px] mx-auto">
            Meet the brilliant minds behind our multiverse exploration
            initiative.
          </p>
        </motion.div>
      </section>
      {/* <SpiderManAnimation /> */}
      <div
        className="flex flex-col justify-center items-center min-h-screen pt-10 bg-gray-900 px-4 "
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className="grid place-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mb-15">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </>
  );
}
