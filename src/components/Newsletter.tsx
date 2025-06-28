import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 right-6 z-40 max-w-md"
        >
          <motion.div
            className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              ×
            </button>

            <div className="relative z-10">
              {!isSubscribed ? (
                <>
                  {/* Header */}
                  <div className="flex items-center space-x-3 mb-4">
                    <img 
                      src="WHITE_WOLF_LOGO_BLACK-01.png" 
                      alt="White Wolf"
                      className="h-8 w-auto"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Join the Revolution</h3>
                      <p className="text-sm text-gray-500">Get exclusive deals on natural supplements</p>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                        required
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300"
                    >
                      <span>Subscribe</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </form>

                  <p className="text-xs text-gray-400 mt-3 text-center">
                    Get 10% off your first order + exclusive natural supplement content
                  </p>
                </>
              ) : (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-4"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Welcome to the Revolution!</h3>
                  <p className="text-sm text-gray-600">
                    Check your email for your exclusive 10% discount code on natural supplements
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Newsletter;