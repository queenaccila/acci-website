import './Button.css';
import { useState, useEffect } from "react";
import buttonSound from './ButtonAudio';

function LinkButton({ text, redirect, onClick }) {
  const [isDark, setIsDark] = useState(false);
  
  const toggleSound = () => {
    buttonSound.play()
  };

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);
  
  return (
    <div className="button-container" onClick={toggleSound}>
      {redirect ? (
        <a href={redirect} target="_blank" rel="noopener noreferrer">
          <button className="custom-button">{text}</button>
        </a>
      ) : (
        <button className="custom-button" onClick={onClick}>
          {text}
        </button>
      )}
    </div>
  );
}

export default LinkButton;