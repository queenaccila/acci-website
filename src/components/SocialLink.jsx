import './SocialLink.css';
import buttonSound from './ButtonAudio';

function SocialLink({ iconSrc, label, link }) {
  const toggleSound = () => {
    buttonSound.play()
  };

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
