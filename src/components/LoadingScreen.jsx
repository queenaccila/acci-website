import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 40); // speed adjustment

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      <motion.div
        className="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: '#8296b7',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          zIndex: 9999,
        }}
      >
        <div style={{
          width: '50%',
          background: '#333',
          borderRadius: 5,
          overflow: 'hidden',
        }} className="loading-bar">
          <motion.div
            style={{
              height: '100%',
              background: '#f1ebdd',
              width: `${progress}%`,
            }}
            initial={{ width: 10 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'easeInOut', duration: 0.2 }}
          />
        </div>
        <div className="loading-text">Loading...</div>
      </motion.div>
    </AnimatePresence>
  );
}
