import { motion } from "framer-motion";

const services = [
  {
    title: "Web Design",
    description: "We create beautiful, modern, and responsive websites that captivate your audience.",
  },
  {
    title: "Digital Marketing",
    description: "Our marketing strategies help you reach a wider audience and grow your business.",
  },
  {
    title: "SEO Optimization",
    description: "We improve your search engine ranking to bring more organic traffic to your site.",
  },
];

export default function Services() {
  return (
    <motion.div
      className="container mx-auto px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-center text-gray-800">Our Services</h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05, y: -10 }}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}