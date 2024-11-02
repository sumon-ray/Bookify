import { motion } from "framer-motion";

const PremiumBoard = () => {
  return (
    <motion.div 
      className="bottom-5 absolute bg-gradient-to-tl from-[#364957B3] flex flex-col items-center to-[#364957] p-1 h-40 max-w-[170px] rounded-lg text-center shadow-xl transition-transform transform hover:scale-105"
      initial={{ scale: 0.95 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-white pt-9 bg-opacity-5 h-full backdrop-blur-sm rounded-lg p-4 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-16 h-16 bg-blue-300 opacity-30 rounded-full transform -translate-x-8 -translate-y-8"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 bg-pink-300 opacity-30 rounded-full transform translate-x-8 translate-y-8"></div>

        {/* Content */}
        <h1 className="text-xl font-bold text-white">Bookify Pro</h1>
        <p className="text-xs text-white mt-2">
          Get access to all <br />
          features on Tetumbas
        </p>
      </div>
    </motion.div>
  ); 
};

export default PremiumBoard;
