import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Hi, I'm <span className="text-blue-500">Shubham</span>
      </motion.h1>

      <p className="mt-4 text-gray-600 max-w-xl">
        Frontend / React Developer | Fresher
      </p>
    </section>
  );
}
