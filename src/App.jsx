import PageFormat from './Page-Format.jsx'
import NavBar from "./components/NavBar"
import { Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe.jsx'
import Portfolio from './pages/Portfolio.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutMe />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/portfolio" element={<Portfolio />} />
    </Routes>
  )
}

export default App
