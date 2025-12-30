import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import { useSelector } from 'react-redux'

function App() {

  const mode = useSelector((state)=> state.theme.mode);

  return (
     <div className={`min-h-screen 
    ${mode === "dark" ? "bg-white text-black" : "bg-black text-white"}`}>
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
     </div>
  )
}

export default App
