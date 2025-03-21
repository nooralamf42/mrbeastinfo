'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import { Heart, HandHeart } from 'lucide-react';

const BeastPhilanthropy = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen text-white p-4 md:p-8 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background Hearts */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          animate={{ 
            rotate: [0, 5, 0], 
            y: [0, -5, 0] 
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-10 left-10"
        >
          <Heart size={64} />
        </motion.div>
        <motion.div 
          animate={{ 
            rotate: [0, -5, 0], 
            y: [0, 5, 0] 
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute bottom-20 right-10"
        >
          <HandHeart size={48} />
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <motion.div 
          className="text-center space-y-8"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.h1 
            className="text-3xl md:text-5xl font-bold flex items-center justify-center gap-3"
            variants={itemVariants}
          >
            <Heart className="text-red-400" />
            Beast Philanthropy
            <HandHeart className="text-red-400" />
          </motion.h1>

          {/* Main Text */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <p className="text-lg md:text-xl leading-relaxed backdrop-blur-sm bg-black/20 p-6 rounded-lg">
              Beast philanthropy is a charity started by MrBeast with a goal of feeding 
              as many people as possible. 🥘
            </p>

            <p className="text-lg md:text-xl leading-relaxed backdrop-blur-sm bg-black/20 p-6 rounded-lg">
              Its a 100% non-profit organization. 💝
            </p>
          </motion.div>

          {/* Button */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <RainbowButton className="text-white/90 mx-auto font-bold text-lg md:text-xl px-8 py-4 tracking-wider">
              <a href="https://www.beastphilanthropy.org/" target="_blank" rel="noopener noreferrer">DONATE ❤️</a>
            </RainbowButton>
          </motion.div>

          {/* Impact Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            variants={containerVariants}
          >
            {[
              { label: 'Food Banks', value: '1000+', icon: '🏪' },
              { label: 'Meals Provided', value: '100M+', icon: '🍱' },
              { label: 'Communities Helped', value: '500+', icon: '🤝' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="backdrop-blur-sm bg-black/20 p-6 rounded-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-red-400">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BeastPhilanthropy;