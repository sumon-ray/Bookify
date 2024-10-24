import { FaRocket, FaBookOpen, FaPeopleCarry, FaBookReader } from "react-icons/fa"; // Importing necessary icons
import { motion } from "framer-motion"; // Animation library

const timelineVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: 100 },
};

const milestones = [
  {
    year: "2022",
    title: "The Idea Was Born",
    description:
      "The concept of Bookify emerged as a response to the need for a sustainable platform for book lovers to swap and share their favorite reads.",
    icon: <FaRocket className="text-5xl text-[#364957] dark:text-gray-400" />, // Updated icon size
  },
  {
    year: "2023",
    title: "First 1000 Books Exchanged",
    description:
      "We hit a major milestone, with over 1000 books being exchanged on our platform in the first year!",
    icon: <FaBookReader className="text-5xl text-[#364957] dark:text-gray-400" />, // Updated icon size
  },
  {
    year: "2024",
    title: "Growing Community",
    description:
      "Bookify's user base expanded globally, connecting book lovers from all corners of the world.",
    icon: <FaPeopleCarry className="text-5xl text-[#364957] dark:text-gray-400" />, // Updated icon size
  },
];

const OurJourney = () => {
  return (
    <section className="pt-16">
      <div className="container mx-auto px-6 lg:px-24 text-center">
        <motion.h2
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Journey
        </motion.h2>

        {/* Flexed Timeline Component with Divs */}
        <div className="flex flex-col lg:flex-row justify-center items-center md:gap-8">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="mb-10 flex-1  p-6 rounded-lg transition-transform transform hover:scale-105"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={timelineVariants}
            >
              <div className="flex items-center justify-center mb-4">
                {milestone.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-2">{milestone.year}</h3>
              <p className="text-lg font-semibold mb-2">{milestone.title}</p>{" "}
              {/* Bold title */}
              <p className="max-w-md mx-auto text-lg text-gray-600 dark:text-gray-300">{milestone.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurJourney;   