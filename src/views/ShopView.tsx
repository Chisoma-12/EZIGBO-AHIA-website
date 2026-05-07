import { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants.ts';
import ProductCard from '../components/ProductCard.tsx';
import { Product } from '../types.ts';
import { cn } from '../lib/utils';

interface ShopViewProps {
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
}

export default function ShopView({ onAddToCart, onProductClick }: ShopViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      const matchCategory = selectedCategory === 'all' || p.category === selectedCategory;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // Default: popular/trending
    });
  }, [selectedCategory, searchQuery, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 pb-24">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">Our Marketplace</h1>
        <p className="text-gray-500 max-w-xl">Find the freshest produce and delicious meals from local vendors you trust.</p>
      </div>

      {/* Controls Bar */}
      <div className="flex flex-col lg:flex-row gap-6 mb-12">
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 group-focus-within:text-brand-green transition-colors" />
          <input
            type="text"
            placeholder="What are you looking for today?"
            className="w-full pl-12 pr-4 py-4 bg-white rounded-2xl border border-gray-200 focus:ring-2 focus:ring-brand-gold outline-none shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide lg:pb-0">
          <button
            onClick={() => setSelectedCategory('all')}
            className={cn(
              "whitespace-now8 py-4 px-6 rounded-2xl font-bold transition-all",
              selectedCategory === 'all' 
                ? "bg-brand-green text-white shadow-lg shadow-brand-green/20" 
                : "bg-white text-gray-600 hover:bg-gray-50"
            )}
          >
            All Items
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.slug)}
              className={cn(
                "whitespace-nowrap py-4 px-6 rounded-2xl font-bold transition-all",
                selectedCategory === cat.slug 
                  ? "bg-brand-green text-white shadow-lg shadow-brand-green/20" 
                  : "bg-white text-gray-600 hover:bg-gray-50"
              )}
            >
              {cat.name}
            </button>
          ))}
        </div>

        <div className="relative inline-block lg:min-w-[200px]">
          <select
            className="w-full appearance-none bg-white border border-gray-200 py-4 px-6 pr-12 rounded-2xl font-bold text-gray-700 focus:ring-2 focus:ring-brand-gold outline-none shadow-sm cursor-pointer"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="popular">Popularity</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
        </div>
      </div>

      {/* Results Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
              onClick={onProductClick}
            />
          ))}
        </div>
      ) : (
        <div className="py-24 text-center bg-white rounded-[40px] border-2 border-dashed border-gray-100">
           <div className="bg-brand-cream w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Filter className="h-10 w-10 text-gray-400" />
           </div>
           <h3 className="text-2xl font-bold text-gray-900 mb-2">No items found</h3>
           <p className="text-gray-500">Try adjusting your filters or search query.</p>
           <button 
             onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
             className="mt-8 text-brand-green font-bold underline"
           >
             Clear all filters
           </button>
        </div>
      )}
    </div>
  );
}
