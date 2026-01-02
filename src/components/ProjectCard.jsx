import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="
        rounded-xl overflow-hidden
        bg-white dark:bg-gray-900
        border border-gray-200 dark:border-gray-800
        transition-colors
      "
    >
      {/* FAKE IMAGE / GRADIENT */}
      <div
        className="
          h-40 from-blue-600 to-cyan-500
          flex items-center justify-center
          text-4xl font-bold
        "
      >
        {project.short}
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
          {project.title}
        </h2>

        <p className="text-sm mb-4 text-gray-600 dark:text-gray-400">
          {project.desc}
        </p>

        {/* TECH STACK */}
        <div className="flex gap-2 flex-wrap mb-4">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="
                text-xs px-3 py-1 rounded-full
                bg-gray-200 text-gray-700
                dark:bg-gray-800 dark:text-gray-300
                border border-gray-300 dark:border-gray-700
              "
            >
              {t}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3">
          {
            project.liveApp &&   <button
            className="
              px-4 py-2 rounded-md text-sm font-medium
              bg-blue-500 text-white
              hover:bg-blue-600 transition
            "
          >
          <NavLink to={project.liveApp}>Live</NavLink>
          </button>
          }
        
          {
            project.github &&  <button
            className="
              px-4 py-2 rounded-md text-sm font-medium
              bg-gray-200 text-gray-800
              dark:bg-gray-700 dark:text-gray-200
              hover:bg-gray-300 dark:hover:bg-gray-600
              transition
            "
          >
           <NavLink to={project.github} target="_blank">GitHub</NavLink> 
          </button>
          }
         
        </div>
      </div>
    </motion.div>
  );
}
