import './Description.css'

function Description({texts}) {
  return (
    <div className="desc-rect">
        {texts.map((line, index) => (
            <p key={index}>{line}</p>
        ))}
    </div>
  );
}

export default Description;