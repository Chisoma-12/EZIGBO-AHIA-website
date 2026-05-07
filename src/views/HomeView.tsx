import { motion } from 'motion/react';
import { Search, ArrowRight, ShieldCheck, Zap, Wallet, Users, ChevronRight, Store } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../constants.ts';
import ProductCard from '../components/ProductCard.tsx';
import { Product } from '../types.ts';

interface HomeViewProps {
  onNavigate: (page: string) => void;
  onAddToCart: (product: Product) => void;
  onProductClick: (product: Product) => void;
}

export default function HomeView({ onNavigate, onAddToCart, onProductClick }: HomeViewProps) {
  return (
    <div className="flex flex-col pb-24 overflow-hidden">
      {/* Hero Section */}
      <section className="grid grid-cols-12 gap-0 relative min-h-[600px] bg-white border-b border-brand-border">
        <div className="col-span-12 lg:col-span-7 p-8 lg:p-24 flex flex-col justify-center gap-10">
          <div className="inline-block px-4 py-2 bg-brand-green text-white text-[10px] font-black uppercase tracking-[0.3em] rounded-sm self-start">
            Fresh & Fast Delivery
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] text-brand-green tracking-tighter">
            Fresh Foodstuffs, <br/>Meals & Delivery <br/><span className="text-brand-gold">in One Place.</span>
          </h1>
          
          <p className="text-lg lg:text-xl text-brand-olive max-w-lg leading-relaxed font-medium">
            Connecting trusted vendors and swift riders to bring the heart of the market to your doorstep. Seamless, affordable, and community-driven.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-4">
             <div className="flex-1 bg-brand-cream border-2 border-brand-border rounded-2xl flex items-center px-6 shadow-inner group focus-within:border-brand-gold transition-colors">
                <Search className="h-5 w-5 text-brand-olive mr-4 group-focus-within:text-brand-gold" />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full bg-transparent outline-none text-sm py-5 font-bold text-brand-dark placeholder:text-brand-olive/50"
                />
             </div>
             <button 
              onClick={() => onNavigate('shop')}
              className="btn-green text-lg px-12 py-5"
             >
              Explore
             </button>
          </div>
          
          <div className="flex items-center gap-6 pt-10 border-t border-brand-border mt-10">
            <div className="flex -space-x-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-brand-cream overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                </div>
              ))}
            </div>
            <p className="text-xs font-bold text-brand-olive uppercase tracking-widest">
              Join <span className="text-brand-green">10,000+</span> happy customers
            </p>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 bg-brand-green relative min-h-[400px] flex items-center justify-center p-12 overflow-hidden">
          {/* Abstract geometric pattern */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 border-4 border-brand-gold rounded-full" />
            <div className="absolute bottom-20 right-10 w-96 h-96 border-4 border-brand-gold rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white rotate-45" />
          </div>
          
          <motion.div 
            initial={{ rotate: -5, scale: 0.9 }}
            animate={{ rotate: 5, scale: 1 }}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 3 }}
            className="relative z-10 w-64 h-64 bg-brand-gold rounded-[50px] rotate-12 flex items-center justify-center shadow-[20px_20px_0px_rgba(26,26,26,0.3)]"
          >
             <div className="-rotate-12 text-8xl">🥬</div>
          </motion.div>

          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full px-12 z-20">
            <div className="glass-card text-center">
              <p className="text-white font-bold italic text-lg mb-4">"Fastest delivery in Lagos, hands down!"</p>
              <div className="flex gap-1 justify-center mb-2">
                {[1, 2, 3, 4, 5].map(i => (
                  <span key={i} className="text-brand-gold text-xl">★</span>
                ))}
              </div>
              <p className="text-[10px] text-white/70 uppercase tracking-widest font-black">— Amaka O., Verified Buyer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Categories & Trust Bar */}
      <section className="bg-white border-b border-brand-border px-4 lg:px-12 grid grid-cols-12 w-full">
        <div className="col-span-12 lg:col-span-9 grid grid-cols-2 md:grid-cols-4 gap-6 py-12 lg:pr-12">
          {CATEGORIES.slice(0, 4).map((cat) => (
            <div 
              key={cat.id} 
              className="group cursor-pointer flex flex-col items-center"
              onClick={() => onNavigate('shop')}
            >
              <div className="h-24 w-full bg-brand-cream rounded-2xl border border-brand-border flex items-center justify-center text-4xl group-hover:bg-brand-green group-hover:text-white transition-all shadow-sm">
                {cat.slug === 'foodstuff' ? '🥦' : cat.slug === 'meals' ? '🍲' : cat.slug === 'fresh-produce' ? '🍎' : '🥤'}
              </div>
              <p className="text-center mt-3 text-[10px] font-black uppercase tracking-[0.2em] text-brand-olive group-hover:text-brand-green transition-colors">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
        
        <div className="col-span-12 lg:col-span-3 border-t lg:border-t-0 lg:border-l border-brand-border flex flex-row lg:flex-col justify-center items-center gap-8 py-12 bg-brand-cream/30">
          <div className="text-center">
            <div className="text-3xl font-black text-brand-green tracking-tighter">12,400+</div>
            <div className="text-[10px] uppercase tracking-widest font-black text-brand-olive">Verified Vendors</div>
          </div>
          <div className="hidden lg:block h-[1px] w-12 bg-brand-border"></div>
          <div className="text-center">
            <div className="text-3xl font-black text-brand-gold tracking-tighter">32 Mins</div>
            <div className="text-[10px] uppercase tracking-widest font-black text-brand-olive">Avg. Delivery</div>
          </div>
        </div>
      </section>

      {/* Trending Items */}
      <section className="max-w-7xl mx-auto px-4 w-full py-24">
         <div className="flex justify-between items-end mb-16 px-4">
           <div>
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-gold mb-2 block">Weekly Picks</span>
             <h2 className="text-5xl font-black text-brand-green tracking-tighter">Trending Today</h2>
           </div>
           <button 
            onClick={() => onNavigate('shop')}
            className="btn-green-outline flex items-center space-x-2"
           >
             <span>View Marketplace</span>
             <ArrowRight className="h-4 w-4" />
           </button>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {PRODUCTS.slice(0, 3).map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={onAddToCart}
                onClick={onProductClick}
              />
            ))}
         </div>
      </section>

      {/* How it Works */}
      <section className="bg-brand-green py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-gold mb-4 block">The Ecosystem</span>
            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter mb-6">Simple. Scalable. <span className="text-brand-gold">Secure.</span></h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg font-medium leading-relaxed">Preserving the traditional market heart through modern digital infrastructure.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center text-white relative">
            {[
              { title: 'Market Search', desc: 'Browse products or meals from verified local sellers.', icon: Search },
              { title: 'Secure Payment', desc: 'Protected system for both buyers and vendors.', icon: Wallet },
              { title: 'Flash Delivery', desc: 'Riders deliver your order in an average of 32 mins.', icon: Zap },
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="w-24 h-24 bg-white/10 border border-white/20 rounded-[50px] flex items-center justify-center mx-auto mb-10 transform group-hover:rotate-12 transition-transform duration-500 shadow-xl">
                  <step.icon className="h-10 w-10 text-brand-gold" />
                  <span className="absolute -top-4 -right-4 bg-brand-gold text-brand-dark font-black w-12 h-12 rounded-full flex items-center justify-center shadow-2xl text-xl">
                    {i + 1}
                  </span>
                </div>
                <h3 className="text-3xl font-black mb-4 tracking-tight">{step.title}</h3>
                <p className="text-white/50 leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 w-full py-24">
        <div className="bg-brand-gold rounded-[40px] p-12 lg:p-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center shadow-[20px_20px_0px_#2D5A27] border-2 border-brand-green">
           <div className="relative z-10">
             <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-green/60 mb-6 block">Ready to start?</span>
             <h2 className="text-5xl lg:text-8xl font-black text-brand-green mb-10 leading-[0.85] tracking-tighter">Grow your community shop.</h2>
             <p className="text-brand-olive text-xl font-bold mb-12 leading-relaxed">Whether you are buying, selling, or delivering, there is a place for you on EZIGBO AHIA.</p>
             <div className="flex flex-col sm:flex-row gap-6">
                <button 
                  onClick={() => onNavigate('vendor')}
                  className="btn-green text-lg px-12 py-5"
                >
                  Join as Vendor
                </button>
                <button 
                  onClick={() => onNavigate('rider')}
                  className="bg-white text-brand-dark px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-[4px_4px_0px_#2D5A27] hover:translate-x-1 hover:translate-y-1 transition-all"
                >
                  Become a Rider
                </button>
             </div>
           </div>
           <div className="relative z-10 flex justify-center lg:justify-end">
             <div className="w-64 h-64 lg:w-80 lg:h-80 bg-brand-green rounded-[60px] shadow-2xl rotate-6 flex items-center justify-center border-4 border-white/20">
               <Store className="h-32 w-32 text-brand-gold -rotate-6" />
             </div>
           </div>
        </div>
      </section>
    </div>
  );
}
