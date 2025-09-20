import { useState } from 'react';
import LoadingScreen from './components/LoadingScreen.jsx'
import { Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe.jsx'
import Portfolio from './pages/Portfolio.jsx';
import Blog from './pages/Blog.jsx';
import Socials from './pages/Socials.jsx';
import FadeWrapper from './components/FadingScreen.jsx';
import AudioButton from './components/AudioButton.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  return (
    <>
      { isLoading ? (
        <LoadingScreen onFinish={() => setIsLoading(false)} />
      ) : (
        <FadeWrapper>
          <AudioButton />
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/socials" element={<Socials />} />
          </Routes>
          <p className='copyright'>© 2025 - Accila</p>
        </FadeWrapper>
      )}
    </>
  );
}

export default App
