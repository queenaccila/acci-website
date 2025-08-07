import './Description.css'
import { useState, useEffect } from "react";

function Description({texts}) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <div className="desc-rect">
        {texts.map((line, index) => (
            <p key={index}>{line}</p>
        ))}
    </div>
  );
}

export default Description;