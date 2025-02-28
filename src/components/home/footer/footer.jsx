const Footer = () => {
  return (
    <footer className="footer mx-auto bg-cover bg-center pt-4 pb-4 sm:p-6 lg:p-8">
      <div className="footer-content flex flex-col items-center text-white mt-10 sm:mt-20 lg:mt-30">
        <div className="flex flex-col items-center lg:flex-row text-center justify-between text-xl mt-2">
          <img src="/logo.png" className="max-w-52 " alt="" />
          <span className="inline-block text-6xl text-red-500">
            Anantya 2025
          </span>
          <img src="/pccoe_logo.png" className="max-w-52" alt="" />
        </div>
        <div className="flex justify-center text-white">
          <h1 className=" text-md font-extrabold text-center sm:text-lg  lg:text-xl text-[1.3rem] pb-4  ">
            Pimpri Chinchwad College of Engineering
          </h1>
        </div>
        <div className="border-t border-gray-100 pt-6 flex flex-col items-center">
          <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:text-base lg:text-lg">
            Sector -26, Pradhikaran, Nigdi, Near Akurdi Railway Station, Pune -
            411 044.
          </p>
          <br />
          <p className="mt-4 text-sm animate-pulse text-gray-500 sm:mt-2 lg:mt-4 sm:text-base text-center lg:text-lg">
          {" "}
          Developed with ❤️ by CESA webmasters{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
