import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      {/* FULL WIDTH WRAPPER */}
      <div className="w-full">
        {/* CENTERED CONTENT */}
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-xl font-bold text-blue-600">
            <a href="#home" className="flex items-center gap-2">
              <img
                src="Logo_MasterShubham.png"
                alt="MasterShubham Logo"
                className="h-40 w-auto cursor-pointer"
              />
            </a>
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-gray-700">
            <NavLink to="/" className={({isActive})=> isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}>Home</NavLink>
            <NavLink to="/about" className={({isActive})=> isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}>About</NavLink>
            <NavLink to="/projects" className={({isActive})=> isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}>Projects</NavLink>
            <NavLink to="/contact" className={({isActive})=> isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"}>Contact</NavLink>
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden text-black text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white text-black shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li onClick={() => setOpen(false)}>Home</li>
            <li onClick={() => setOpen(false)}>About</li>
            <li onClick={() => setOpen(false)}>Projects</li>
            <li onClick={() => setOpen(false)}>Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
