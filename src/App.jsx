import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

function App() {
  const mode = useSelector((state) => state.theme.mode);

  // ⭐ THIS IS THE MAGIC
  useEffect(() => {
    const root = document.documentElement; // <html>

    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [mode]);

return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <BrowserRouter>
        <Navbar />
        <main className="w-full pt-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App
