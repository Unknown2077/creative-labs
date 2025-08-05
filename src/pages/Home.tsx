import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div 
      className="container mx-auto px-6 py-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
        Welcome to Creative Labs
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        We build innovative solutions for the modern web.
      </p>
      <motion.button 
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
}