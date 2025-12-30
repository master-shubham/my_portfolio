import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    short: "PW",
    tech: ["React", "Tailwind"],
    desc: "Personal responsive portfolio website",
  },
  {
    title: "Todo App",
    short: "TD",
    tech: ["JavaScript"],
    desc: "Task management app with local storage",
  },
  {
    title: "Weather App",
    short: "WA",
    tech: ["React"],
    desc: "Live weather using API",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(filter));

  return (
    <section className="pt-28 px-6 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">
        My <span className="text-blue-500">Projects</span>
      </h1>

      {/* FILTER BUTTONS */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {["All", "React", "JavaScript"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-4 py-2 rounded-full border
              ${filter === item ? "bg-blue-500" : "border-gray-600"}
            `}
          >
            {item}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="grid md:grid-cols-3 gap-6"
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
