import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-20">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Hero Text */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 lg:mb-6 text-gray-900 leading-tight"
            >
              Supercharge Your
              <br />
              <span className="text-blue-600">Fitness Journey</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed px-4 lg:px-0"
            >
              Premium natural supplements in India crafted with 100% natural ingredients. 
              Whether your aim is weight loss, toning up, or muscle building, we fuel your body with the best.
            </motion.p>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6 lg:mb-8"
            >
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-blue-500 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium text-sm lg:text-base">4.9/5</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-gray-300" />
              <div className="text-gray-600 text-sm lg:text-base">
                <span className="font-bold text-blue-600">50K+</span> Happy Customers
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-6"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 lg:px-8 py-3 lg:py-4 rounded-full flex items-center justify-center space-x-2 shadow-xl transition-all duration-300 text-sm lg:text-base"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto border-2 border-gray-300 text-gray-700 font-bold px-6 lg:px-8 py-3 lg:py-4 rounded-full flex items-center justify-center space-x-2 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 text-sm lg:text-base"
              >
                <Play className="w-4 h-4 lg:w-5 lg:h-5" />
                <span>Learn More</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Side - Product Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="relative flex items-center justify-center w-full order-1 lg:order-2 mb-8 lg:mb-0"
          >
            {/* Main Animated Product Container */}
            <motion.div
              className="relative flex items-center justify-center"
              animate={{ 
                y: [0, -12, 0],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{ 
                transform: `translateY(${scrollY * -0.03}px)`
              }}
            >
              {/* Product Container - Responsive Sizing */}
              <div className="relative w-[420px] h-[480px] sm:w-[525px] sm:h-[600px] md:w-[600px] md:h-[675px] lg:w-[750px] lg:h-[825px] xl:w-[825px] xl:h-[900px] flex items-center justify-center">
                {/* Animated Product GIF */}
                <img
                  src={"/mega-bulkmassgainer.gif"}
                  alt="White Wolf Mega Bulk Mass Gainer - Animated"
                  className="w-full h-full object-contain drop-shadow-2xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/Mega_Bulk_Belgium_Chocolate_1kg-01.jpg";
                  }}
                />
                
                {/* Clean Natural Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/15 via-white/10 to-blue-500/15 rounded-full blur-3xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Subtle Secondary Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gray-100/20 to-white/20 rounded-full blur-2xl"
                  animate={{ 
                    scale: [1.1, 1, 1.1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
              </div>
            </motion.div>

            {/* Floating Elements - Hidden on Mobile for Cleaner Look */}
            <div className="hidden md:block">
              {/* Top Right - Muscle Emoji */}
              <motion.div
                className="absolute top-8 lg:top-16 right-8 lg:right-16 w-12 h-12 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center shadow-lg border border-blue-200/50"
                animate={{ 
                  y: [0, -18, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 7, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-xl lg:text-3xl">💪</span>
              </motion.div>

              {/* Bottom Left - Lightning Emoji */}
              <motion.div
                className="absolute bottom-8 lg:bottom-16 left-8 lg:left-16 w-12 h-12 lg:w-18 lg:h-18 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-full flex items-center justify-center shadow-lg border border-yellow-200/50"
                animate={{ 
                  y: [0, -12, 0],
                  x: [0, 8, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              >
                <span className="text-lg lg:text-2xl">⚡</span>
              </motion.div>

              {/* Left Center - Fire Emoji */}
              <motion.div
                className="absolute top-1/2 left-4 lg:left-8 transform -translate-y-1/2 w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-br from-red-50 to-orange-100 rounded-full flex items-center justify-center shadow-lg border border-red-200/50"
                animate={{ 
                  y: [0, -15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3
                }}
              >
                <span className="text-lg lg:text-2xl">🔥</span>
              </motion.div>

              {/* Right Center - Rocket Emoji */}
              <motion.div
                className="absolute top-1/2 right-4 lg:right-8 transform -translate-y-1/2 w-10 h-10 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-50 to-purple-100 rounded-full flex items-center justify-center shadow-lg border border-purple-200/50"
                animate={{ 
                  y: [0, -20, 0],
                  x: [0, -5, 0]
                }}
                transition={{ 
                  duration: 7, 
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 4
                }}
              >
                <span className="text-lg lg:text-2xl">🚀</span>
              </motion.div>
            </div>

            {/* Product Badges - Responsive Positioning */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
              className="absolute top-4 left-4 lg:top-8 lg:left-8 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 lg:px-5 lg:py-3 shadow-lg border border-gray-200"
            >
              <div className="flex items-center space-x-2 lg:space-x-3">
                <motion.div 
                  className="w-2 h-2 lg:w-3 lg:h-3 bg-blue-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs lg:text-sm font-bold text-gray-900">100% Natural</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, type: "spring" }}
              className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8 bg-blue-600 text-white rounded-xl lg:rounded-2xl px-3 py-2 lg:px-5 lg:py-4 shadow-lg"
            >
              <div className="text-center">
                <motion.div 
                  className="text-sm lg:text-xl font-bold"
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Made in
                </motion.div>
                <div className="text-xs lg:text-sm opacity-90">India</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  );
};

export default Hero;