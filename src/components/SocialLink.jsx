import './SocialLink.css';
import buttonSound from './ButtonAudio';
import { useState, useEffect } from "react";

function SocialLink({ iconSrc, label, link }) {
  const [isDark, setIsDark] = useState(false);
  
  const toggleSound = () => {
    buttonSound.play()
  };

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="social-link-container" onClick={toggleSound}>
        <a href={link} target="_blank" rel="noopener noreferrer" className="social-button">
            <img src={iconSrc} alt={`${label} icon`} className="social-icon" />
            <span className="social-label">{label}</span>
        </a>
    </div>
  );
}

export default SocialLink;
