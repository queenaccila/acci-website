import './Button.css';

function LinkButton({ text, redirect, onClick }) {
  return (
    <div className="button-container">
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