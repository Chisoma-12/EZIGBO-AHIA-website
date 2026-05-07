import { CheckCircle2, ArrowRight, Store, TrendingUp, Zap, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function VendorOnboardingView() {
  const benefits = [
    { title: 'Wide Reach', desc: 'Connect with thousands of customers looking for fresh food daily.', icon: Users },
    { title: 'Easy Management', desc: 'Upload products and track orders via our intuitive dashboard.', icon: Store },
    { title: 'Fast Payouts', desc: 'Secure payment system ensure you get your money quickly.', icon: TrendingUp },
    { title: 'Marketing Support', desc: 'We help promote your shop to targeted local audiences.', icon: Zap },
  ];

  const steps = [
    { id: 1, title: 'Register', desc: 'Create your account and provide basic business information.' },
    { id: 2, title: 'Upload Products', desc: 'Add images, prices, and descriptions of your items.' },
    { id: 3, title: 'Start Selling', desc: 'Switch on your store and receive orders instantly.' },
  ];

  return (
    <div className="flex flex-col space-y-24 pb-24">
      {/* Hero */}
      <section className="bg-brand-green py-24 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-display font-bold mb-8 text-brand-gold"
          >
            Empower Your Business with EZIGBO AHIA
          </motion.h1>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Join the digital heartbeat of African commerce. Sell your foodstuffs, meals, or fresh produce to a growing community.
          </p>
          <button className="btn-gold text-brand-green py-5 px-12 text-xl font-bold shadow-2xl">
            Start Selling Today
          </button>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-brand-green mb-4">Why Sell on EZIGBO AHIA?</h2>
          <p className="text-gray-500">We provide the tools you need to take your physical market shop digital.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="bg-white p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-brand-cream rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform">
                <benefit.icon className="h-8 w-8 text-brand-green" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-500 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Steps */}
      <section className="bg-brand-cream py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[60px] p-12 lg:p-24 shadow-2xl overflow-hidden relative border border-brand-gold/10">
            <h2 className="text-4xl font-display font-bold text-brand-green mb-16 text-center">3 Simple Steps to Start</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {steps.map((step) => (
                <div key={step.id} className="relative flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-brand-gold text-white rounded-full flex items-center justify-center mb-8 font-bold text-2xl shadow-lg relative z-10 group-hover:scale-110 transition-transform">
                    {step.id}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-500">{step.desc}</p>
                  {step.id < 3 && (
                     <div className="hidden md:block absolute top-8 left-1/2 w-full h-[2px] bg-brand-gold/20 -z-0" />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-16 flex justify-center">
              <button className="flex items-center space-x-3 bg-brand-green text-white px-12 py-5 rounded-3xl font-bold hover:scale-105 transition-all text-xl">
                <span>Start Registration</span>
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / Trust */}
      <section className="max-w-4xl mx-auto px-4 w-full">
         <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-brand-green mb-4">Common Questions</h2>
         </div>
         <div className="space-y-6">
            {[
              'Is there a registration fee?',
              'How do I receive payments?',
              'Who handles the delivery?',
              'Can I sell cooked meals?',
            ].map((q, i) => (
              <div key={i} className="bg-white p-8 rounded-[30px] border border-gray-100 flex items-center justify-between cursor-pointer hover:border-brand-gold/30 transition-all">
                <span className="text-xl font-bold text-gray-800">{q}</span>
                <div className="w-8 h-8 rounded-full border-2 border-brand-gold flex items-center justify-center text-brand-gold">+</div>
              </div>
            ))}
         </div>
      </section>
    </div>
  );
}
