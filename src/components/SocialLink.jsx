import './SocialLink.css';

function SocialLink({ iconSrc, label, link }) {
  return (
    <div className="social-link-container">
        <a href={link} target="_blank" rel="noopener noreferrer" className="social-button">
            <img src={iconSrc} alt={`${label} icon`} className="social-icon" />
            <span className="social-label">{label}</span>
        </a>
    </div>
  );
}

export default SocialLink;
