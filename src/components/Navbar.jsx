import { useState } from "react";
import { NavLink } from "react-router-dom";
import ToggleThemeBtn from "./ToggleThemeBtn";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        bg-white dark:bg-black
        border-b border-gray-200 dark:border-gray-800
        transition-colors
      "
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src="/Logo_MasterShubham.png"
              alt="MasterShubham Logo"
              className="h-30 w-auto"
            />
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6">
            {["/", "/about", "/projects", "/contact"].map((path, i) => {
              const names = ["Home", "About", "Projects", "Contact"];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `font-medium transition ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600"
                    }`
                  }
                >
                  {names[i]}
                </NavLink>
              );
            })}
            <ToggleThemeBtn />
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl text-gray-800 dark:text-gray-200"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-black border-t dark:border-gray-800">
          <div className="flex flex-row justify-evenly mb-2">
  
          <ul className="flex flex-col items-center space-y-4 py-4">
            {["Home", "About", "Projects", "Contact"].map((item) => (
              <NavLink
                key={item}
                to={item}
                onClick={() => setOpen(false)}
                className="text-gray-700 dark:text-gray-300"
              >
                {item}
              </NavLink>
              
            ))}
           
          </ul>
           <div className="mt-4 "><ToggleThemeBtn/></div>
          </div>
        </div>
      )}
    </nav>
  );
}
