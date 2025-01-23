import PropTypes from "prop-types"; 
import { motion } from "motion/react"

const ExperienceComponent = ({
  title,
  description,
  buttonText,
  imageUrl,
  isRight,
  className,
}) => (
  <motion.div
    className={`flex flex-col md:flex-row mb-5 mt-5 px-5 items-center h-[30rem] mx-4 md:mx-[5rem] rounded-lg overflow-hidden hover:border border-[#f2f2f2] ${
      isRight ? "md:flex-row-reverse" : ""
    } ${className}`}
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    {/* Text Section */}
    <motion.div
      className="p-6 flex-1"
      initial={{ x: isRight ? 50 : -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>
      <motion.a
        href="#"
        className="inline-block px-4 py-2 text-sm font-medium hover:underline"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {buttonText}
      </motion.a>
    </motion.div>
    
    {/* Image Section */}
    <motion.div
      className="flex-1 p-5"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
    >
      <motion.img
        src={imageUrl}
        alt={title}
        className="w-full h-64 object-cover md:h-full rounded-t-lg md:rounded-none"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
      />
    </motion.div>
  </motion.div>
);

ExperienceComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  isRight: PropTypes.bool,
  className: PropTypes.string,
};

ExperienceComponent.defaultProps = {
  isRight: false,
  className: "",
};

export default ExperienceComponent;