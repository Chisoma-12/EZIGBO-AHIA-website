import { useState } from 'react';
import { Menu, X, ShoppingCart, User, Search, Store, Bike, Info, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  cartCount: number;
}

export default function Navbar({ onNavigate, currentPage, cartCount }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home', icon: Info },
    { name: 'Shop', id: 'shop', icon: Store },
    { name: 'Become a Vendor', id: 'vendor', icon: Store },
    { name: 'Be a Rider', id: 'rider', icon: Bike },
    { name: 'About', id: 'about', icon: Info },
    { name: 'Contact', id: 'contact', icon: Phone },
  ];

  return (
    <nav class="sticky top-0 z-50 bg-white border-b border-brand-border h-20 flex items-center shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="flex justify-between items-center h-full">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer gap-3 group" 
            onClick={() => onNavigate('home')}
          >
            <div className="bg-brand-green p-2 rounded-lg transition-transform group-hover:rotate-3 shadow-md">
              <Store className="text-brand-gold h-6 w-6" />
            </div>
            <span className="text-2xl font-black font-sans tracking-tighter text-brand-green">
              EZIGBO<span className="text-brand-gold">AHIA</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            <div className="flex gap-8 text-xs font-bold text-brand-olive uppercase tracking-[0.2em]">
              {navItems.slice(0, 4).map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={cn(
                    "hover:text-brand-green transition-colors border-b-2",
                    currentPage === item.id ? "text-brand-green border-brand-green" : "text-brand-olive border-transparent"
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-4 border-l border-brand-border pl-8">
              <button 
                onClick={() => onNavigate('cart')}
                className="relative p-2 bg-brand-cream rounded-full text-brand-green hover:bg-brand-gold hover:text-brand-dark transition-all"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-dark text-brand-gold text-[10px] font-black h-5 w-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
              <button className="btn-green-outline !py-2 !px-6">
                Sign In
              </button>
              <button 
                onClick={() => onNavigate('vendor')}
                className="btn-gold !py-2 !px-6"
              >
                Join Now
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
             <button 
                onClick={() => onNavigate('cart')}
                className="relative p-2"
              >
                <ShoppingCart className="h-6 w-6 text-brand-gold" />
                {cartCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-white/10 rounded-lg text-brand-gold"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-brand-border overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "flex items-center space-x-4 w-full p-4 rounded-xl transition-all font-bold uppercase tracking-widest text-xs",
                    currentPage === item.id 
                      ? "bg-brand-green text-white shadow-lg" 
                      : "text-brand-olive hover:bg-brand-cream"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </button>
              ))}
              <div className="pt-4 border-t border-brand-border">
                <button className="w-full btn-gold py-4 text-xs font-black uppercase tracking-widest">
                  Join EZIGBO AHIA
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
