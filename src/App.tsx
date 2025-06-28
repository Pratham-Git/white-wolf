import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import IngredientsSection from './components/IngredientsSection';
import StorySection from './components/StorySection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
        <Header />
        <Hero />
        <ProductGrid />
        <IngredientsSection />
        <StorySection />
        <Newsletter />
        <Footer />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;