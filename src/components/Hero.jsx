import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"

export default function Hero() {
  return (
   <section className="min-h-screen w-full flex items-center justify-center px-2">

      <div className="text-center">

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
        >
          Hi, I'm <span className="text-blue-600">Shubham</span>
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-3 text-lg sm:text-xl md:text-2xl text-blue-600"
        >
          <Typewriter
            words={["React Developer", "Frontend Developer", "Web Developer"]}
            loop
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.h2>

        {/* Intro */}
        <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
          I build responsive and interactive web interfaces using React,
          Tailwind CSS, and modern UI practices.
        </p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-6"
        >
          <a
            href="/projects"
            className="inline-block px-6 py-3 text-sm sm:text-base
                       bg-blue-600 text-white rounded-lg
                       hover:bg-blue-700 hover:scale-105
                       transition-all duration-300"
          >
            View Projects
          </a>
        </motion.div>

      </div>
    </section>
  )
}
