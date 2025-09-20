import './SocialLink.css';
import buttonSound from './ButtonAudio';
import { IconContext } from "react-icons";

function SocialLink({ iconSrc, label, link }) {
  
  const toggleSound = () => {
    buttonSound.play()
  };

  return (
    <div className="social-link-container" onClick={toggleSound}>
      <IconContext.Provider value={{ size: "2rem" }}>
        <a href={link} target="_blank" rel="noopener noreferrer" className="social-button">
            <span>{iconSrc}</span>
            <span className="social-label">{label}</span>
        </a>
      </IconContext.Provider>
    </div>
  );
}

export default SocialLink;
