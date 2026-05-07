/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import HomeView from './views/HomeView.tsx';
import ShopView from './views/ShopView.tsx';
import ProductDetailView from './views/ProductDetailView.tsx';
import VendorOnboardingView from './views/VendorOnboardingView.tsx';
import RiderOnboardingView from './views/RiderOnboardingView.tsx';
import AboutView from './views/AboutView.tsx';
import ContactView from './views/ContactView.tsx';
import { Product, CartItem } from './types.ts';
import { ShoppingCart as CartIcon, X, Trash2, ArrowRight } from 'lucide-react';
import { formatCurrency } from './lib/utils';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedProduct]);

  const handleNavigate = (page: string) => {
    if (page === 'cart') {
      setIsCartOpen(true);
      return;
    }
    setCurrentPage(page);
    setSelectedProduct(null);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
    // Add brief toast or feedback here
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prevCart => prevCart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const renderView = () => {
    if (selectedProduct) {
      return (
        <ProductDetailView 
          product={selectedProduct} 
          onBack={() => setSelectedProduct(null)} 
          onAddToCart={addToCart}
        />
      );
    }

    switch (currentPage) {
      case 'home':
        return <HomeView onNavigate={handleNavigate} onAddToCart={addToCart} onProductClick={handleProductClick} />;
      case 'shop':
        return <ShopView onAddToCart={addToCart} onProductClick={handleProductClick} />;
      case 'vendor':
        return <VendorOnboardingView />;
      case 'rider':
        return <RiderOnboardingView />;
      case 'about':
        return <AboutView />;
      case 'contact':
        return <ContactView />;
      default:
        return <HomeView onNavigate={handleNavigate} onAddToCart={addToCart} onProductClick={handleProductClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream relative">
      <Navbar 
        currentPage={selectedProduct ? 'shop' : currentPage} 
        onNavigate={handleNavigate} 
        cartCount={cartCount}
      />
      
      <main className="min-h-[calc(100vh-80px)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProduct ? `product-${selectedProduct.id}` : currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-brand-green/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
            >
              <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-brand-green text-white">
                <div className="flex items-center space-x-3">
                  <CartIcon className="h-6 w-6 text-brand-gold" />
                  <h2 className="text-2xl font-display font-bold">Your Cart</h2>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors text-brand-gold"
                >
                  <X className="h-8 w-8" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-8">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                    <div className="bg-brand-cream p-12 rounded-[50px]">
                      <CartIcon className="h-16 w-16 text-gray-300" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Cart is empty</h3>
                      <p className="text-gray-500">Add something delicious from the marketplace.</p>
                    </div>
                    <button 
                      onClick={() => { setIsCartOpen(false); handleNavigate('shop'); }}
                      className="btn-green text-white px-8 py-4"
                    >
                      Start Shopping
                    </button>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex space-x-4 group">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0 border border-gray-100">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div>
                          <div className="flex justify-between">
                            <h4 className="font-bold text-gray-900 leading-tight">{item.name}</h4>
                            <button 
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-300 hover:text-red-500 transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                          <p className="text-brand-green font-bold text-lg mt-1">
                            {formatCurrency(item.price)}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                           <div className="flex items-center bg-gray-50 rounded-xl p-1 border border-gray-100">
                              <button onClick={() => updateQuantity(item.id, -1)} className="p-1 px-2 hover:text-brand-green font-bold">-</button>
                              <span className="px-3 font-bold text-sm min-w-[30px] text-center">{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, 1)} className="p-1 px-2 hover:text-brand-green font-bold">+</button>
                           </div>
                           <p className="font-bold text-gray-400 text-sm">
                             Sub: {formatCurrency(item.price * item.quantity)}
                           </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cart.length > 0 && (
                <div className="p-8 bg-brand-cream border-t border-brand-gold/10">
                  <div className="space-y-4 mb-8 font-medium">
                    <div className="flex justify-between text-gray-500">
                      <span>Subtotal</span>
                      <span className="text-gray-900">{formatCurrency(cartTotal)}</span>
                    </div>
                    <div className="flex justify-between text-gray-500">
                      <span>Delivery Fee</span>
                      <span className="text-brand-green">₦1,500</span>
                    </div>
                    <div className="pt-4 border-t border-gray-200 flex justify-between text-2xl font-bold text-gray-900">
                      <span>Total</span>
                      <span className="text-brand-green">{formatCurrency(cartTotal + 1500)}</span>
                    </div>
                  </div>
                  <button className="w-full btn-gold text-brand-green py-5 text-xl flex items-center justify-center space-x-3 shadow-2xl">
                    <span>Secure Checkout</span>
                    <ArrowRight className="h-6 w-6" />
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

