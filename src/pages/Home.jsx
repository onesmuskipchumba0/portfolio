import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Home = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Onesmus Bett</h1>
        <p className="text-xl mb-8">Full Stack Developer</p>
        <div className="flex justify-center gap-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <FaGithub className="mr-2" /> GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <FaLinkedin className="mr-2" /> LinkedIn
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Home; 