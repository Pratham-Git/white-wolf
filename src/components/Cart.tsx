import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { 
    isOpen, 
    toggleCart, 
    items, 
    updateQuantity, 
    removeFromCart, 
    getTotalPrice, 
    itemCount 
  } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={toggleCart}
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:max-w-md bg-white border-l border-gray-200 shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                <h2 className="text-lg sm:text-xl font-bold text-gray-900">Your Cart</h2>
                {itemCount > 0 && (
                  <span className="bg-blue-600 text-white text-xs sm:text-sm px-2 py-1 rounded-full font-bold">
                    {itemCount}
                  </span>
                )}
              </div>
              <button
                onClick={toggleCart}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {items.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-8 sm:py-12"
                >
                  <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400" />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">Your cart is empty</h3>
                  <p className="text-gray-500 mb-4 sm:mb-6 text-sm sm:text-base">Add some supplements to get started</p>
                  <button
                    onClick={toggleCart}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-4 sm:px-6 py-2 sm:py-3 rounded-full transition-all duration-300 text-sm sm:text-base"
                  >
                    Start Shopping
                  </button>
                </motion.div>
              ) : (
                <div className="space-y-3 sm:space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-gray-200"
                    >
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg bg-white"
                        />
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-900 truncate text-sm sm:text-base">{item.name}</h3>
                          <p className="text-xs sm:text-sm text-gray-500">{item.category}</p>
                          <div className="flex items-center space-x-2 mt-1 sm:mt-2">
                            <span className="text-base sm:text-lg font-bold text-blue-600">
                              ₹{item.price}
                            </span>
                            {item.originalPrice && (
                              <span className="text-xs sm:text-sm text-gray-400 line-through">
                                ₹{item.originalPrice}
                              </span>
                            )}
                          </div>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1.5 sm:p-2 hover:bg-gray-200 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 hover:text-red-500" />
                        </button>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mt-3 sm:mt-4">
                        <div className="flex items-center space-x-2 sm:space-x-3 bg-gray-200 rounded-lg p-1">
                          <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-gray-300 rounded transition-colors"
                          >
                            <Minus className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
                          </motion.button>
                          
                          <span className="text-gray-900 font-medium w-6 sm:w-8 text-center text-sm sm:text-base">
                            {item.quantity}
                          </span>
                          
                          <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-gray-300 rounded transition-colors"
                          >
                            <Plus className="w-3 h-3 sm:w-4 sm:h-4 text-gray-700" />
                          </motion.button>
                        </div>

                        <div className="text-base sm:text-lg font-bold text-gray-900">
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-4 sm:p-6 border-t border-gray-200 space-y-3 sm:space-y-4">
                {/* Total */}
                <div className="flex items-center justify-between text-lg sm:text-xl font-bold">
                  <span className="text-gray-900">Total:</span>
                  <span className="text-blue-600">₹{getTotalPrice().toFixed(2)}</span>
                </div>

                {/* Checkout Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 sm:py-4 rounded-lg sm:rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 text-sm sm:text-base"
                >
                  <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Checkout</span>
                </motion.button>

                {/* Security Badge */}
                <div className="flex items-center justify-center space-x-2 text-xs sm:text-sm text-gray-500">
                  <span>🔒</span>
                  <span>Secure checkout with SSL encryption</span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;