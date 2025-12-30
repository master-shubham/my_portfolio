import AnimatedPage from "../components/AnimatedPage";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

const skillVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};

export default function About() {
  return (
    <AnimatedPage>
      <section className="pt-28 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 0.9,
            }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mx-auto"
          >
            <img
              src={profile}
              alt="Shubham"
              className="w-64 h-64 rounded-full object-cover 
           border-4 border-blue-600 
           shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            />
          </motion.div>

          {/* ABOUT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl font-bold mb-4">
              About <span className="text-blue-500">Me</span>
            </h1>

            <p className="text-gray-500 mb-4 leading-relaxed">
              I am a passionate frontend developer who enjoys building clean,
              responsive, and interactive web applications using modern
              technologies.
            </p>

            <p className="text-gray-500 mb-6">
              I am currently improving my skills in React, Tailwind CSS, React
              Router, and Redux Toolkit by working on personal projects and
              learning best practices used in real-world applications.
            </p>

            {/* SKILLS */}
            <div className="mt-10">
              {/* CORE SKILLS */}
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Core Skills
              </h3>

              <div className="flex flex-wrap gap-4 mb-8">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Tailwind CSS",
                  "Git & GitHub",
                ].map((skill, i) => (
                  <motion.span
                    key={skill}
                    custom={i}
                    variants={skillVariant}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.1 }}
                    className="
        px-5 py-2 text-sm font-medium rounded-full cursor-pointer
        bg-gray-200 text-gray-800
        dark:bg-gray-800 dark:text-gray-200
        border border-blue-500
        hover:bg-blue-600 hover:text-white
        transition
      "
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* LEARNING SKILLS */}
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Learning / Basic Knowledge
              </h3>

              <div className="flex flex-wrap gap-4">
                {[
                  "Python (Basics)",
                  "Node.js (Basics)",
                  "Express.js (Learning)",
                ].map((skill, i) => (
                  <motion.span
                    key={skill}
                    custom={i}
                    variants={skillVariant}
                    initial="hidden"
                    animate="visible"
                    whileHover={{ scale: 1.1 }}
                    className="px-5 py-2 text-sm font-medium rounded-full cursor-pointer
        bg-gray-200 text-gray-800
        dark:bg-gray-800 dark:text-gray-200
        border border-blue-500
        hover:bg-blue-600 hover:text-white
        transition"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="/projects"
              className="inline-block mt-4 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              View My Projects
            </a>
          </motion.div>
        </div>
      </section>
    </AnimatedPage>
  );
}
