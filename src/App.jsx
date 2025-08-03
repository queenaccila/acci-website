import PageFormat from './Page-Format.jsx'
import NavBar from "./components/NavBar"
import { Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe.jsx'

function App() {
  return (
    <Routes>
      <Route path="/about" element={<AboutMe />} />
    </Routes>
  )
}

export default App
