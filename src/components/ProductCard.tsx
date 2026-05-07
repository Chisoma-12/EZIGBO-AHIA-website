import { Star, ShoppingCart, Plus, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types.ts';
import { formatCurrency } from '../lib/utils';

interface ProductCardProps {
  key?: string | number;
  product: Product;
  onAddToCart: (product: Product) => void;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart, onClick }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, x: -4 }}
      className="bg-white border-2 border-brand-border rounded-xl overflow-hidden group relative shadow-[8px_8px_0px_#2D5A27] hover:shadow-[12px_12px_0px_#F2AF29] transition-all"
    >
      {/* Product Image */}
      <div 
        className="relative h-64 overflow-hidden cursor-pointer border-b-2 border-brand-border"
        onClick={() => onClick(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4">
           <span className="bg-brand-dark text-brand-gold px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest">
            {product.unit}
          </span>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-brand-gold mb-1 block">
              {product.category.replace('-', ' ')}
            </span>
            <h3 
              className="text-xl font-bold text-brand-dark cursor-pointer line-clamp-1"
              onClick={() => onClick(product)}
            >
              {product.name}
            </h3>
          </div>
          <div className="flex items-center text-brand-green font-black text-sm">
            <Star className="h-4 w-4 fill-current mr-1" />
            <span>{product.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-brand-border">
          <div>
            <p className="text-2xl font-black text-brand-green tracking-tighter">
              {formatCurrency(product.price)}
            </p>
          </div>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-brand-green text-white p-4 rounded-xl hover:bg-brand-gold hover:text-brand-dark transition-all transform active:scale-95 shadow-md"
          >
            <Plus className="h-6 w-6 font-black" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
