import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    Products: ['Protein', 'Pre-Workout', 'Recovery', 'Fat Burners', 'Vitamins', 'Bundles'],
    Support: ['FAQ', 'Shipping', 'Returns', 'Contact', 'Track Order', 'Size Guide'],
    Company: ['About Us', 'Our Story', 'Careers', 'Press', 'Wholesale', 'Affiliates'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Cookies', 'Disclaimer']
  };

  const socialLinks = [
    { icon: <Facebook className="w-4 h-4 lg:w-5 lg:h-5" />, href: '#', color: 'hover:text-blue-600' },
    { icon: <Instagram className="w-4 h-4 lg:w-5 lg:h-5" />, href: '#', color: 'hover:text-pink-500' },
    { icon: <Twitter className="w-4 h-4 lg:w-5 lg:h-5" />, href: '#', color: 'hover:text-sky-500' },
    { icon: <Youtube className="w-4 h-4 lg:w-5 lg:h-5" />, href: '#', color: 'hover:text-red-500' }
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 relative overflow-hidden">
      {/* Fun Floating Bubbles Background - Hidden on Mobile */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <motion.div
          className="absolute top-16 left-16 w-12 h-12 bg-gradient-to-br from-blue-100/40 to-blue-200/30 rounded-full flex items-center justify-center"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 360, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-lg">📱</span>
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-20 w-10 h-10 bg-gradient-to-br from-pink-100/50 to-pink-200/30 rounded-full flex items-center justify-center"
          animate={{ 
            y: [0, -12, 0],
            x: [0, 8, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <span className="text-sm">💌</span>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2 space-y-4 lg:space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3"
            >
              <img 
                src={`${import.meta.env.BASE_URL}WHITE_WOLF_LOGO_BLACK-01.png`} 
                alt="White Wolf Nutrition"
                className="h-8 sm:h-10 lg:h-12 w-auto"
              />
            </motion.div>

            <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
              Premium natural supplements in India crafted with 100% natural ingredients. 
              Join the revolution and unleash your wild potential with our all-natural supplements.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 lg:space-y-3">
              <div className="flex items-center space-x-2 lg:space-x-3 text-gray-500 text-xs lg:text-sm">
                <MapPin className="w-3 h-3 lg:w-4 lg:h-4" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center space-x-2 lg:space-x-3 text-gray-500 text-xs lg:text-sm">
                <Phone className="w-3 h-3 lg:w-4 lg:h-4" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2 lg:space-x-3 text-gray-500 text-xs lg:text-sm">
                <Mail className="w-3 h-3 lg:w-4 lg:h-4" />
                <span>hello@whitewolfnutrition.in</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 lg:space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-2 bg-gray-100 rounded-full text-gray-500 ${social.color} transition-colors duration-300`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-3 lg:space-y-4"
            >
              <h3 className="text-gray-900 font-bold text-sm lg:text-base">{category}</h3>
              <ul className="space-y-1 lg:space-y-2">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: linkIndex * 0.05 }}
                  >
                    <a
                      href="#"
                      className="text-gray-500 hover:text-blue-600 transition-colors duration-300 text-xs lg:text-sm"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-blue-50 rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 mb-8 lg:mb-12 border border-blue-200"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center">
            <div className="text-center lg:text-left">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2">Join the Natural Revolution</h3>
              <p className="text-gray-600 text-sm lg:text-base">
                Get exclusive deals on natural supplements, workout tips, and nutrition advice delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 bg-white border border-gray-200 rounded-lg lg:rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all text-sm lg:text-base"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-lg lg:rounded-xl transition-all duration-300 text-sm lg:text-base"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between pt-6 lg:pt-8 border-t border-gray-200 text-gray-500 text-xs lg:text-sm space-y-4 lg:space-y-0"
        >
          <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-6 text-center lg:text-left">
            <span>© 2025 White Wolf Nutrition India. All rights reserved.</span>
            <div className="flex flex-wrap items-center justify-center lg:justify-start space-x-2 lg:space-x-4 text-xs">
              <span className="text-blue-600">✓ Secure Checkout</span>
              <span className="text-blue-600">✓ Fast Shipping</span>
              <span className="text-blue-600">✓ Money Back Guarantee</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-xs lg:text-sm">
            <span>Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-red-500"
            >
              ❤️
            </motion.span>
            <span>in India</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;