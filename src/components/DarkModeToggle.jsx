import './DarkModeToggle.css';
import { useState, useEffect } from "react";
import { IoSunny, IoMoon } from "react-icons/io5";

function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle dark mode"
      className="theme-button"
    >
      {isDark ? <IoMoon className="theme-icon"/> : <IoSunny className="theme-icon"/>}
    </button>
  );
}

export default DarkModeToggle;