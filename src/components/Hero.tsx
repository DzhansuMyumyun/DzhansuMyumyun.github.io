import { motion } from "framer-motion";
import Resume from '../assets/doc/Resume.pdf';


export default function Hero() {
  return (
    <section className="text-center py-16 md:py-20 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-xl  leading-tight max-w-4xl mx-auto"
      >
        
        <span className="block text-3xl md:text-5xl  bg-linear-to-r from-emerald-400 via-teal-500 to-blue-600 bg-clip-text text-transparent leading-[1.1] ">
          Full-Stack Web Developer  <br className="hidden md:block" /> 
          Building with React, TypeScript & .NET  <br className="hidden md:block" /> 
          5+ Years Experience
        </span>
      </motion.h1>
      <div className="flex justify-center">
      <p className="text-base md:text-lg mt-6 text-zinc-700 max-w-xl mx-auto">
          I build fast, scalable web applications with a focus on clean architecture, performance, and user experience.      </p>
      </div>

      <div className="flex justify-center mt-8">
        <p className=" mt-6 text-zinc-700 max-w-xl mx-auto text-base md:text-lg">Open to Full-Time Roles</p>
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-black text-white rounded-xl hover:opacity-90"
        >
          View Projects
        </a>

        <a
          href= {Resume}
          className="px-6 py-3 border rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Download Resume
        </a>
        {/* <a
          href="#projects"
          className="px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Contact Me
        </a> */}
      </div>

    </section>
  );
}