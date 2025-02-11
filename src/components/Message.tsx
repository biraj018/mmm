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
          Even though we have met recently & I guess we know a little about eachother but this
          is my little gift to show you how much I value you. May your sky always be clear, may your dear smile always be bright and happy, and may you be for ever blessed for that moment of bliss and happiness which you gave to another lonely and grateful heart of mine. I wish you all the success you dream of in life and the a good health to work hard for them. And all the best for ICSE!!!
        </p>
        <p className="text-lg text-pink-600 font-semibold">
          and on your special day, I wish you the happiest birthday.
        </p>
      </motion.div>
    </div>
  );
};

export default Message;
