import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center mb-0 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Dear Madam Ji,
        </h1>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Happy Birthday Future wife🎂
Happy 16th Birthday to the most caring and loving person 
I want to take a moment to celebrate this incredible day of yours who brings light and happiness in my life.......Really no words can express how special you are to me.
Once again happy birthday to you
I lovee youuu a lotttt
And I pray to God we walk out path to success together.
        </p>
        <p className="text-lg text-pink-600 font-semibold">
          and on your special day, I wish you the happiest birthday.
        </p>
      </motion.div>
    </div>
  );
};

export default Message;
