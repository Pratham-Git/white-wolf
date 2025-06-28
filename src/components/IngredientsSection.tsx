import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Atom, Zap, Shield, Heart, Brain, Activity, CheckCircle } from 'lucide-react';

interface Ingredient {
  id: number;
  name: string;
  description: string;
  benefits: string[];
  icon: React.ReactNode;
  position: { x: number; y: number };
}

const ingredients: Ingredient[] = [
  {
    id: 1,
    name: "Whey Protein Isolate",
    description: "Premium fast-absorbing protein for muscle growth and recovery with complete amino acid profile.",
    benefits: ["Rapid Muscle Recovery", "Complete Amino Profile", "High Bioavailability"],
    icon: <Activity className="w-6 h-6" />,
    position: { x: 20, y: 30 }
  },
  {
    id: 2,
    name: "Creatine Monohydrate",
    description: "Scientifically proven compound that increases strength, power output, and muscle volume.",
    benefits: ["Enhanced Strength", "Increased Power", "Muscle Volume"],
    icon: <Zap className="w-6 h-6" />,
    position: { x: 70, y: 20 }
  },
  {
    id: 3,
    name: "Beta-Alanine",
    description: "Performance amino acid that reduces muscle fatigue and improves endurance capacity.",
    benefits: ["Reduced Fatigue", "Enhanced Endurance", "Performance Boost"],
    icon: <Heart className="w-6 h-6" />,
    position: { x: 50, y: 60 }
  },
  {
    id: 4,
    name: "L-Citrulline",
    description: "Nitric oxide precursor that enhances blood flow and delivers superior muscle pumps.",
    benefits: ["Improved Blood Flow", "Enhanced Pumps", "Better Vascularity"],
    icon: <Atom className="w-6 h-6" />,
    position: { x: 80, y: 70 }
  },
  {
    id: 5,
    name: "Ashwagandha",
    description: "Adaptogenic herb that reduces cortisol levels and supports natural recovery processes.",
    benefits: ["Stress Reduction", "Hormone Balance", "Recovery Support"],
    icon: <Shield className="w-6 h-6" />,
    position: { x: 30, y: 80 }
  },
  {
    id: 6,
    name: "Lion's Mane",
    description: "Nootropic mushroom that enhances cognitive function and mental clarity during training.",
    benefits: ["Mental Clarity", "Focus Enhancement", "Cognitive Support"],
    icon: <Brain className="w-6 h-6" />,
    position: { x: 60, y: 40 }
  }
];

const IngredientsSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedIngredient, setSelectedIngredient] = useState<Ingredient | null>(null);

  return (
    <section id="ingredients" className="py-20 bg-white relative overflow-hidden">
      {/* Fun Floating Bubbles Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-blue-100/50 to-blue-200/30 rounded-full flex items-center justify-center"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 16, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-2xl">🧬</span>
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-24 w-14 h-14 bg-gradient-to-br from-gray-100/60 to-gray-200/40 rounded-full flex items-center justify-center"
          animate={{ 
            y: [0, -25, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 13, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <span className="text-xl">⚗️</span>
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-1/4 w-18 h-18 bg-gradient-to-br from-blue-100/40 to-blue-200/30 rounded-full flex items-center justify-center"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 19, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <span className="text-2xl">🔬</span>
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-16 w-12 h-12 bg-gradient-to-br from-gray-100/50 to-gray-200/40 rounded-full flex items-center justify-center"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -90, 0]
          }}
          transition={{ 
            duration: 11, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          <span className="text-lg">🧪</span>
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-1/3 w-10 h-10 bg-gradient-to-br from-blue-100/60 to-blue-200/40 rounded-full flex items-center justify-center"
          animate={{ 
            y: [0, -18, 0],
            x: [0, -10, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        >
          <span className="text-lg">💊</span>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Science-Backed Ingredients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every ingredient is carefully selected and backed by scientific research for maximum effectiveness
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Molecular Diagram */}
          <motion.div
            ref={ref}
            className="relative h-96 lg:h-[500px] bg-gray-50 rounded-3xl p-8 overflow-hidden border border-gray-200 shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }} />
            </div>

            {/* Floating Ingredient Nodes */}
            {ingredients.map((ingredient, index) => (
              <motion.div
                key={ingredient.id}
                className="absolute cursor-pointer group"
                style={{
                  left: `${ingredient.position.x}%`,
                  top: `${ingredient.position.y}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.2, zIndex: 10 }}
                onClick={() => setSelectedIngredient(ingredient)}
              >
                {/* Node */}
                <motion.div
                  className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg relative"
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {ingredient.icon}
                  
                  {/* Pulse Effect */}
                  <motion.div
                    className="absolute inset-0 bg-blue-600 rounded-full opacity-30"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                </motion.div>

                {/* Tooltip */}
                <motion.div
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                  initial={{ y: 10, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                >
                  <div className="bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
                    {ingredient.name}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Ingredient Details */}
          <div className="space-y-6">
            {selectedIngredient ? (
              <motion.div
                key={selectedIngredient.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    {selectedIngredient.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedIngredient.name}</h3>
                </div>
                
                <p className="text-gray-600 text-lg mb-6">{selectedIngredient.description}</p>
                
                <div>
                  <h4 className="text-lg font-bold text-blue-600 mb-3">Key Benefits:</h4>
                  <div className="space-y-2">
                    {selectedIngredient.benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <span className="text-gray-700">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl p-8 text-center border border-gray-200 shadow-lg"
              >
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Atom className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Interactive Ingredients Map</h3>
                <p className="text-gray-600">
                  Click on any ingredient node to learn about its benefits and scientific backing
                </p>
              </motion.div>
            )}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-500">Natural</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                <div className="text-2xl font-bold text-blue-600">3rd Party</div>
                <div className="text-sm text-gray-500">Tested</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center border border-gray-200">
                <div className="text-2xl font-bold text-blue-600">GMP</div>
                <div className="text-sm text-gray-500">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;