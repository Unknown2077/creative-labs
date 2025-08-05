import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="container mx-auto px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-center text-gray-800">About Us</h1>
      <div className="mt-8 max-w-2xl mx-auto text-gray-600">
        <p className="mb-4">
          Creative Labs was founded in 2024 with a simple mission: to help businesses thrive in the digital world. We are a passionate team of designers, developers, and strategists who believe in the power of technology to create meaningful experiences.
        </p>
        <p>
          Our approach is collaborative and transparent. We work closely with our clients to understand their unique challenges and deliver tailored solutions that drive results. From stunning websites to powerful web applications, we are dedicated to crafting digital products that are not only beautiful but also effective.
        </p>
      </div>
    </motion.div>
  );
}