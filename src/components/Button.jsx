import './Button.css';
import buttonSound from './ButtonAudio';

function LinkButton({ text, redirect, onClick }) {
  const toggleSound = () => {
    buttonSound.play()
  };
  
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