import './AudioButton.css';
import { IoVolumeHigh, IoVolumeMute } from "react-icons/io5";
import { useState, useEffect } from 'react';
import backgroundMusic from './Audio';

function AudioButton() {
  const [audio, setAudio] = useState(!backgroundMusic.paused);

  useEffect(() => {
    const updateAudioState = () => setAudio(!backgroundMusic.paused);

    backgroundMusic.addEventListener('play', updateAudioState);
    backgroundMusic.addEventListener('pause', updateAudioState);

    return () => {
      backgroundMusic.removeEventListener('play', updateAudioState);
      backgroundMusic.removeEventListener('pause', updateAudioState);
    };
  }, []);

  const toggleAudio = () => {
    if (backgroundMusic.paused) {
      backgroundMusic.play();
    } else {
      backgroundMusic.pause();
    }
  };

  return (
    <button onClick={toggleAudio} className="audio-button">
      {audio ? <IoVolumeHigh className="audio-icon" /> : <IoVolumeMute className="audio-icon" />}
    </button>
  );
}

export default AudioButton;
