import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'

import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Skills from './pages/Skills'

function App() {
  return (  
    <div className="min-h-screen pt-[90px] bg-gradient-to-t from-indigo-950 via-sky-500 to-sky-300 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Skills/>
      <Projects />
      <Contact />
    </div>
  )
}
export default App
