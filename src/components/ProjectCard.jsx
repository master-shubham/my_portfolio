import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="bg-gray-900 rounded-xl overflow-hidden"
    >
      {/* FAKE IMAGE / GRADIENT */}
      <div className="h-40 bg-gradient from-blue-600 to-cyan-500
                      flex items-center justify-center text-4xl font-bold">
        {project.short}
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2">
          {project.title}
        </h2>

        <p className="text-gray-400 text-sm mb-4">
          {project.desc}
        </p>

        <div className="flex gap-2 flex-wrap mb-4">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full 
                         bg-gray-800 border border-gray-700"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition">
            Live
          </button>
          <button className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600 transition">
            GitHub
          </button>
        </div>
      </div>
    </motion.div>
  );
}
