import { useState } from "react";
import { NavLink } from "react-router-dom";
import ToggleThemeBtn from "./ToggleThemeBtn";
import { IoMenu } from "react-icons/io5";
import { RiCloseFill } from "react-icons/ri";

export default function Navbar() {
  const [open, setOpen] = useState(false);
 const menu = [
   { name: "Home", path: "/" },
   { name: "About", path: "/about" },
   { name: "Projects", path: "/projects" },
   { name: "Contact", path: "/contact" },
 ];


  return (
    <nav
      className="fixed top-0 left-0 w-full h-16 z-50
  bg-white dark:bg-black
  border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src="/Logo_MasterShubham.png"
              alt="MasterShubham Logo"
              className="h-40 w-auto"
            />
          </NavLink>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-6">
            {menu.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-lg ${
                    isActive
                      ? "text-blue-500"
                      : "text-gray-700 dark:text-gray-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <ToggleThemeBtn />
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl text-gray-800 dark:text-gray-200"
            onClick={() => setOpen(!open)}
          >
            {open ? <RiCloseFill /> : <IoMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-black border-t dark:border-gray-800">
          <div className="flex flex-col items-center py-6 gap-6">
            {menu.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-lg font-medium ${
                    isActive
                      ? "text-blue-500"
                      : "text-gray-700 dark:text-gray-300"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Theme Button */}
            <ToggleThemeBtn />
          </div>
        </div>
      )}
    </nav>
  );
}
