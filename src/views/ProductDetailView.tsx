import { useState } from 'react';
import { Star, ShoppingCart, ArrowLeft, ShieldCheck, Clock, MapPin, Share2, Heart, Minus, Plus } from 'lucide-react';
import { motion } from 'motion/react';
import { Product, Vendor } from '../types.ts';
import { VENDORS } from '../constants.ts';
import { formatCurrency } from '../lib/utils';

interface ProductDetailViewProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export default function ProductDetailView({ product, onBack, onAddToCart }: ProductDetailViewProps) {
  const [quantity, setQuantity] = useState(1);
  const vendor = VENDORS.find(v => v.id === product.vendorId) as Vendor;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <button 
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-500 hover:text-brand-green mb-8 transition-colors group"
      >
        <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-bold">Back to Marketplace</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Gallery */}
        <div className="space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-square rounded-[40px] overflow-hidden shadow-2xl border border-gray-100"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-brand-gold transition-all bg-gray-100 border border-gray-200">
                <img src={product.image} className="w-full h-full object-cover opacity-50" alt="thumb" />
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <div className="flex justify-between items-start mb-6">
            <div>
               <span className="inline-block bg-brand-gold/10 text-brand-gold px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider mb-4">
                Verified Product
              </span>
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 text-sm font-medium">
                <div className="flex items-center text-brand-gold">
                  <Star className="h-4 w-4 fill-current mr-1" />
                  <span>{product.rating} (124 reviews)</span>
                </div>
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">Unit: {product.unit}</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button className="p-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 text-gray-400 hover:text-red-500 transition-all shadow-sm">
                <Heart className="h-6 w-6" />
              </button>
              <button className="p-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 text-gray-400 transition-all shadow-sm">
                <Share2 className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-4xl font-bold text-brand-green">
              {formatCurrency(product.price)}
            </p>
            <p className="text-sm text-gray-400 mt-2">Prices include all marketplace fees</p>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            {product.description}
          </p>

          <div className="bg-brand-cream rounded-3xl p-8 mb-10 border border-brand-gold/10">
            <div className="flex items-center justify-between mb-8">
              <span className="font-bold text-gray-900">Select Quantity</span>
              <div className="flex items-center bg-white rounded-2xl p-2 shadow-sm">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:text-brand-green transition-colors"
                >
                  <Minus className="h-5 w-5" />
                </button>
                <span className="px-6 font-bold text-xl min-w-[50px] text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:text-brand-green transition-colors"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => onAddToCart(product, quantity)}
                className="flex-1 btn-gold text-brand-green py-5 text-xl flex items-center justify-center space-x-3 shadow-xl shadow-brand-gold/20"
              >
                <ShoppingCart className="h-6 w-6" />
                <span>Add to Cart</span>
              </button>
              <button className="flex-1 bg-brand-green text-white py-5 rounded-3xl font-bold shadow-xl shadow-brand-green/20 hover:bg-brand-green/90 transition-all">
                Buy It Now
              </button>
            </div>
          </div>

          {/* Logistics & Vendor */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="flex items-center space-x-4 p-5 bg-white rounded-2xl border border-gray-100">
               <div className="bg-blue-50 p-3 rounded-xl text-blue-600">
                 <Clock className="h-6 w-6" />
               </div>
               <div>
                  <h4 className="font-bold text-gray-900">Fast Delivery</h4>
                  <p className="text-sm text-gray-500">Est. 30-45 mins</p>
               </div>
            </div>
            <div className="flex items-center space-x-4 p-5 bg-white rounded-2xl border border-gray-100">
               <div className="bg-green-50 p-3 rounded-xl text-green-600">
                 <ShieldCheck className="h-6 w-6" />
               </div>
               <div>
                  <h4 className="font-bold text-gray-900">Authentic</h4>
                  <p className="text-sm text-gray-500">Verified Marketplace</p>
               </div>
            </div>
          </div>

          <div className="p-8 border border-gray-200 rounded-[30px] hover:border-brand-gold/30 transition-all group">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Sold by</h4>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img src={vendor.logo} alt={vendor.name} className="w-16 h-16 rounded-2xl object-cover" />
                <div>
                  <div className="flex items-center space-x-2">
                    <h5 className="text-xl font-bold text-gray-900">{vendor.name}</h5>
                    {vendor.isVerified && <ShieldCheck className="h-5 w-5 text-blue-500" />}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{vendor.location}</span>
                  </div>
                </div>
              </div>
              <button className="bg-brand-cream text-brand-green px-6 py-2 rounded-xl font-bold hover:bg-brand-gold hover:text-white transition-all">
                Visit Store
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
