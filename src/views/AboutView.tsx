import { ShieldCheck, Heart, Users, Zap, Store, Bike, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutView() {
  return (
    <div className="flex flex-col space-y-24 pb-24">
      {/* Hero */}
      <section className="relative py-24 lg:py-48 px-4 bg-brand-green overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
           <Store className="absolute top-20 right-20 h-96 w-96 text-white rotate-12" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
           <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-8xl font-display font-bold text-white mb-8"
           >
            A Marketplace <br /> <span className="text-brand-gold">Built for Africa</span>
           </motion.h1>
           <p className="text-xl lg:text-2xl text-white/70 max-w-2xl leading-relaxed">
            EZIGBO AHIA is more than just an app. It is a movement to modernize traditional markets while preserving the community trust that makes them special.
           </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
         <div className="relative">
            <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-2xl relative z-10">
               <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80" alt="Market" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-gold rounded-[50px] -z-0" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-green rounded-[40px] -z-0" />
         </div>
         <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-green">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We started EZIGBO AHIA with a simple goal: to make it easier for people to access fresh, high-quality foodstuffs and meals without spending hours in the market.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              By connecting verified local vendors directly with customers and providing a reliable delivery network, we are creating a seamless ecosystem that benefits everyone—from the market woman to the final consumer.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
               <div className="space-y-2">
                 <span className="text-4xl font-bold text-brand-gold">Trust</span>
                 <p className="text-gray-500 font-medium">Verified vendors only.</p>
               </div>
               <div className="space-y-2">
                 <span className="text-4xl font-bold text-brand-gold">Speed</span>
                 <p className="text-gray-500 font-medium">Delivery in minutes.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Values */}
      <section className="bg-brand-cream py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
             <h2 className="text-4xl font-display font-bold text-brand-green mb-4">What Guides Us</h2>
             <p className="text-gray-500">The core principles that drive our marketplace.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { title: 'Community First', desc: 'We grow when our local vendors and riders grow.', icon: Users },
               { title: 'Full Transparency', desc: 'Real ratings, real reviews, and honest pricing.', icon: ShieldCheck },
               { title: 'Innovation', desc: 'Using technology to solve real-world African infrastructure gaps.', icon: Zap },
             ].map((value, i) => (
               <div key={i} className="bg-white p-12 rounded-[50px] shadow-sm hover:shadow-xl transition-all text-center">
                  <div className="w-20 h-20 bg-brand-cream rounded-[30px] flex items-center justify-center mx-auto mb-8 text-brand-green">
                    <value.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-green mb-4">{value.title}</h3>
                  <p className="text-gray-500 text-lg leading-relaxed">{value.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="max-w-7xl mx-auto px-4 w-full">
         <div className="bg-brand-green rounded-[60px] p-12 lg:p-24 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <h2 className="text-4xl lg:text-7xl font-display font-bold text-brand-gold mb-12 relative z-10 leading-tight">Leading the Future of <br /> Food Commerce in Africa</h2>
            <p className="text-xl lg:text-2xl text-white/70 max-w-3xl mx-auto mb-16 relative z-10">
              Our vision is to become the primary platform where millions of Africans buy, sell, and coordinate food commerce every single day.
            </p>
            <div className="flex flex-wrap justify-center gap-12 relative z-10">
               {[
                 { label: 'Market Sellers', icon: Store },
                 { label: 'Prepared Meals', icon: Heart },
                 { label: 'Fast Delivery', icon: Bike },
               ].map((item, i) => (
                 <div key={i} className="flex items-center space-x-4 px-8 py-4 bg-white/10 rounded-full border border-white/20">
                   <item.icon className="h-6 w-6 text-brand-gold" />
                   <span className="text-xl font-bold">{item.label}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
