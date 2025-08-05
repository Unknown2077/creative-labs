import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="container mx-auto px-6 py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-center text-gray-800">Contact Us</h1>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="text-gray-600">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="mb-2">
            <strong>Email:</strong> contact@creativelabs.com
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> (123) 456-7890
          </p>
          <p>
            <strong>Address:</strong> 123 Innovation Drive, Tech City, 54321
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-4">Our Location</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666428456894!2d106.824964114769!3d-6.17539239552917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2c6e1e0e9bcc80!2sNational%20Monument!5e0!3m2!1sen!2sid!4v1678886335199!5m2!1sen!2sid"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </motion.div>
  );
}