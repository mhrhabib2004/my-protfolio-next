/* eslint-disable react/no-unescaped-entities */
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import img from "/public/mhrhabibdev.jpg"
const Banear = () => {
  const handleDownload = () => {

    const fileUrl = "/resume.pdf";
    const fileName = "resume";


    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;

    document.body.appendChild(link);
    link.click();


    document.body.removeChild(link);
  };
  return (
    <div className="w-full h-auto overflow-hidden bg-gradient-to-br from-white to-blue-100 text-gray-900 transition-all duration-500">
      <div className="lg:px-16 px-8 py-12 h-full flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side Content */}
          <div className="flex flex-col z-10">
            <h4 className="text-lg font-semibold xl:text-2xl text-gray-700">
              Welcome to my portfolio
            </h4>
            <h1 className="md:text-3xl lg:text-4xl text-2xl font-bold font-serif mt-2 text-gray-900">
              I'm{" "}
              <span className="text-blue-700">
                Md. Habibur Rahman Habib
              </span>
            </h1>
            <h4 className="mt-4 lg:text-2xl text-blue-700 font-semibold">
              -- FrontEnd Web Developer
            </h4>
            <p className="mt-4 text-lg sm:text-xl max-w-2xl leading-relaxed text-gray-800">
              A passionate <strong>Full Stack Developer</strong> specializing in{" "}
              the <strong>MERN Stack</strong> and modern frameworks like{" "}
              <strong>Next.js</strong>. I build dynamic, responsive, and 
              user-friendly web applications with expertise in{" "}
              <strong>HTML, CSS, JavaScript, TypeScript, and React</strong>. 
              Additionally, I have strong backend skills using{" "}
              <strong>MongoDB, Mongoose, and Express.js, Node.js </strong>, allowing me 
              to develop efficient and scalable solutions.
            </p>
            <p className="mt-6 text-xl sm:text-2xl font-semibold text-gray-900">
              Let&apos;s create something amazing together!
            </p>

            {/* Buttons */}
            <div className="flex gap-6 mt-6">
            <div >
             
             <motion.button
           
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               className="px-6 py-3 rounded-full transition-all duration-300 shadow-lg bg-blue-700 hover:bg-blue-600 text-white font-medium"
             >
            Contact Me
             </motion.button>
         
         </div>
         <div >
           
             <motion.button
              onClick={handleDownload}
               whileHover={{ scale: 1.1 }}
               whileTap={{ scale: 0.9 }}
               className="px-6 py-3 rounded-full transition-all duration-300 shadow-lg bg-blue-700 hover:bg-blue-600 text-white font-medium"
             >
              Download Resume
             </motion.button>
       
         </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] rounded-full shadow-2xl overflow-hidden border-4 border-blue-300"
            >
              <Image
                className="w-full h-full object-cover"
                src={img}
                alt="Developer Profile"
                width={500}
                height={500}
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banear;
