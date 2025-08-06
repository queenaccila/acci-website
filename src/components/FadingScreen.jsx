import { motion } from 'framer-motion';

function FadeWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ height: '100%' }}
    >
      {children}
    </motion.div>
  );
}

export default FadeWrapper
