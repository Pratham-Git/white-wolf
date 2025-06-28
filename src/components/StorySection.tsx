import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Zap, Leaf, Target, Award, Heart } from 'lucide-react';

const StorySection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "100% Natural Ingredients",
      description: "Pure, potent formulations with no nasties or fillers"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Maximum Performance",
      description: "Enhanced workout performance and faster recovery"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Goal-Focused Solutions",
      description: "Whether it's weight loss, toning, or muscle building"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Luxury nutrition supplements with uncompromising standards"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Organic & Clean",
      description: "Health-conscious formulations for discerning athletes"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Wellness Focused",
      description: "Supporting both performance and overall well-being"
    }
  ];

  const benefits = [
    "Pre-workout supplements for enhanced performance",
    "Recovery supplements for faster muscle repair",
    "Protein powders for muscle building and maintenance",
    "Gut health support for optimal nutrient absorption",
    "Natural gym supplements for every fitness goal",
    "All-natural ingredients with maximum potency"
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Fun Floating Bubbles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Fitness-themed Bubbles */}
        <motion.div
          className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-br from-red-100/50 to-red-200/30 rounded-full flex items-center justify-center"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-2xl">💪</span>
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-24 w-14 h-14 bg-gradient-to-br from-green-100/60 to-green-200/40 rounded-full flex items-center justify-center"
          animate={{ 
            y: [0, -25, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <span className="text-xl">🏃‍♂️</span>
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-1/4 w-18 h-18 bg-gradient-to-br from-blue-100/40 to-blue-200/30 rounded-full flex items-center justify-center"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 14, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <span className="text-2xl">🏋️‍♀️</span>
        </motion.div>

        <motion.div
          className="absolute top-1/2 right-16 w-12 h-12 bg-gradient-to-br from-yellow-100/50 to-yellow-200/40 rounded-full flex items-center justify-center"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -90, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          <span className="text-lg">🥇</span>
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-1/3 w-10 h-10 bg-gradient-to-br from-purple-100/60 to-purple-200/40 rounded-full flex items-center justify-center"
          animate={{ 
            y: [0, -18, 0],
            x: [0, -10, 0]
          }}
          transition={{ 
            duration: 9, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        >
          <span className="text-lg">🎯</span>
        </motion.div>

        <motion.div
          className="absolute top-60 left-1/3 w-8 h-8 bg-gradient-to-br from-pink-100/50 to-pink-200/30 rounded-full flex items-center justify-center"
          animate={{ 
            y: [0, -12, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 7, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        >
          <span className="text-sm">⚡</span>
        </motion.div>

        {/* Additional Small Bubbles */}
        <motion.div
          className="absolute bottom-40 left-16 w-6 h-6 bg-gradient-to-br from-teal-100/60 to-teal-200/40 rounded-full"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 180, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          }}
        />

        <motion.div
          className="absolute top-80 right-20 w-5 h-5 bg-gradient-to-br from-indigo-100/50 to-indigo-200/30 rounded-full"
          animate={{ 
            y: [0, -8, 0],
            x: [0, 8, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3.5
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Supercharge Your Fitness Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            When you buy supplements from White Wolf India, you're assured of products that prioritise purity and potency. 
            Our offerings are crafted with 100% natural ingredients, ensuring you fuel your body with the best.
          </p>
        </motion.div>

        {/* Hero Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-blue-600 rounded-full" />
              <div className="pl-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Natural Supplements That Deliver Results
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  Whether your aim is weight loss, toning up, or muscle building, incorporating natural supplements 
                  for the gym can significantly boost your results. Products such as pre-workout and recovery supplements 
                  are formulated to enhance your performance and speed up recovery, making every workout count.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  With options like nutrition supplements and natural workout supplements, it's easier than ever 
                  to find products that match your workout needs. Browse our range today.
                </p>
              </div>
            </div>

            {/* Key Benefits List */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h4 className="text-xl font-bold text-blue-700 mb-4">What Makes Us Different:</h4>
              <div className="grid grid-cols-1 gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-white p-8 border border-gray-200 shadow-lg">
              <img 
                src={`${import.meta.env.BASE_URL}WHITE_WOLF_LOGO_BLACK-01.png`} 
                alt="White Wolf Nutrition"
                className="w-full h-full object-contain"
              />
            </div>
            
            {/* Floating Stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -top-4 -right-4 bg-blue-600 text-white rounded-2xl p-4 shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm opacity-90">Natural</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, type: "spring" }}
              className="absolute -bottom-4 -left-4 bg-white border border-gray-200 rounded-2xl p-4 shadow-lg"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50K+</div>
                <div className="text-sm text-gray-500">Happy Customers</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Reach Your Fitness Goals with Our Luxury Nutrition Supplements
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our online natural supplements in India are a game-changer for your health and wellness regime. 
              By choosing our range of Indian supplements online, you're not only opting for high-quality, all natural supplements, 
              but also supporting a brand that believes in the power of natural ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Organic Fitness Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-50 rounded-3xl p-12 mb-20 border border-gray-200"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Organic Fitness Supplements for Health-Conscious Athletes
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                In a market flooded with synthetic options, organic fitness supplements stand out for our clean, 
                effective formulations. At our Indian supplement store, we're committed to using natural ingredients 
                and steering clear of nasties or fillers. Elevate your health and wellness with premium, all natural supplements.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                For athletes and fitness enthusiasts, this means access to natural gym supplements that support 
                both performance and overall well-being. Whether it's muscle building, recovery, or general health 
                support you seek, we've got you covered. We lead the way with an impressive lineup of all-natural supplements.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300"
              >
                Contact Us Today
              </motion.button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">Zero</div>
                <div className="text-gray-500">Artificial Fillers</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-gray-500">Organic Ingredients</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">Lab</div>
                <div className="text-gray-500">Tested Quality</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center border border-gray-200 shadow-sm">
                <div className="text-3xl font-bold text-blue-600 mb-2">Premium</div>
                <div className="text-gray-500">Formulations</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-blue-50 rounded-3xl p-12 border border-blue-200"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Join the Revolution of Natural Premium Supplements
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Discover the difference that natural fitness supplements can make in your workouts and overall health with White Wolf. 
            With a wide range of options catering to various needs, we are your go-to source for natural gym supplements in India.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Shop online supplements in India and experience the pure, potent benefits of White Wolf's all-natural supplements. 
            Buy supplements in India and take the first step towards a healthier, more vibrant you.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300"
            >
              Shop Supplements in India
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold px-8 py-4 rounded-full transition-all duration-300"
            >
              Learn More About Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;