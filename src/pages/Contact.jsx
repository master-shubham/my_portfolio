import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section
      className="
       min-h-screen
  flex items-center justify-center
  transition-colors duration-300"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="
          w-full max-w-md p-8 rounded-2xl shadow-xl
          bg-gray-100 text-gray-900
          dark:bg-gray-900 dark:text-gray-100
        "
      >
        <h2 className="text-2xl font-bold text-center mb-6">Contact Me</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="
              w-full p-3 mb-4 rounded-lg outline-none
              bg-white text-gray-900
              dark:bg-gray-800 dark:text-white
              border border-gray-300 dark:border-gray-700
            "
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
            title="Invalid email address"
            className="
              w-full p-3 mb-4 rounded-lg outline-none
              bg-white text-gray-900
              dark:bg-gray-800 dark:text-white
              border border-gray-300 dark:border-gray-700
            "
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="4"
            placeholder="Your Message"
            className="
              w-full p-3 mb-4 rounded-lg outline-none
              bg-white text-gray-900
              dark:bg-gray-800 dark:text-white
              border border-gray-300 dark:border-gray-700
            "
          />

          <button
            type="submit"
            className="
              w-full py-3 rounded-lg
              bg-blue-600 text-white
              hover:bg-blue-700 transition
            "
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}
