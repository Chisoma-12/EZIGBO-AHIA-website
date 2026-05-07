import { ArrowRight, Bike, ShieldCheck, Wallet, Clock, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export default function RiderOnboardingView() {
  const earnings = [
    { title: 'Earn per Delivery', desc: 'Get competitive payouts for every successful delivery completed.' },
    { title: 'Flexible Schedule', desc: 'Choose when you want to work - morning, afternoon, or late night.' },
    { title: 'Bonuses', desc: 'Earn extra through peak-hour bonuses and weekly incentive programs.' },
  ];

  return (
    <div className="flex flex-col space-y-24 pb-24">
      {/* Hero */}
      <section className="bg-brand-green py-24 px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-24 h-24 bg-brand-gold rounded-[30px] flex items-center justify-center mx-auto mb-8 shadow-2xl rotate-6"
          >
            <Bike className="h-12 w-12 text-brand-green" />
          </motion.div>
          <h1 className="text-5xl lg:text-7xl font-display font-bold mb-8 text-brand-gold">
            Earn More as a Dispatch Rider
          </h1>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            Become a part of the fastest delivery network. Connect food vendors to hungry customers in your city.
          </p>
          <button className="btn-gold text-brand-green py-5 px-12 text-xl font-bold shadow-2xl">
            Join the Network
          </button>
        </div>
      </section>

      {/* Why Join */}
      <section className="max-w-7xl mx-auto px-4 w-full grid grid-cols-1 md:grid-cols-3 gap-12">
        {earnings.map((item, i) => (
          <div key={i} className="bg-white p-12 rounded-[40px] border border-gray-100 shadow-sm flex flex-col items-center text-center">
            <div className="bg-brand-cream p-4 rounded-2xl mb-8">
              <Wallet className="h-10 w-10 text-brand-green" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
            <p className="text-gray-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Verification / Trust */}
      <section className="max-w-7xl mx-auto px-4 w-full">
        <div className="bg-brand-cream rounded-[50px] p-12 lg:p-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-green mb-8">Fast Verification Process</h2>
            <div className="space-y-8">
              {[
                { title: 'Simple Registration', desc: 'Sign up with your phone number and basic info.', icon: ShieldCheck },
                { title: 'Document Upload', desc: 'Provide valid identification and vehicle details.', icon: ShieldCheck },
                { title: 'Interview & Training', desc: 'A quick verification call and safety training.', icon: ShieldCheck },
                { title: 'Start Delivering', desc: 'Get activated and start receiving orders.', icon: ShieldCheck },
              ].map((step, i) => (
                <div key={i} className="flex space-x-6">
                  <div className="flex-shrink-0 w-10 h-10 bg-brand-green text-white rounded-full flex items-center justify-center font-bold">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h4>
                    <p className="text-gray-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-brand-green rounded-[60px] p-12 text-white shadow-2xl relative z-10 overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                  <div className="absolute top-0 left-0 w-40 h-40 bg-white rotate-45 -translate-x-1/2 -translate-y-1/2" />
               </div>
               <h3 className="text-3xl font-bold mb-8">What You Need:</h3>
               <ul className="space-y-6">
                 {[
                   'A functional motorcycle or bicycle',
                   'Valid means of identification',
                   'A smartphone (Android or iOS)',
                   'Polite and professional attitude',
                 ].map((item, i) => (
                   <li key={i} className="flex items-center space-x-4">
                     <div className="w-6 h-6 rounded-full bg-brand-gold flex items-center justify-center">
                        <ArrowRight className="h-4 w-4 text-brand-green" />
                     </div>
                     <span className="text-lg font-medium">{item}</span>
                   </li>
                 ))}
               </ul>
               <button className="w-full bg-brand-gold text-brand-green py-5 rounded-3xl font-bold mt-12 text-xl hover:bg-white transition-all">
                 Apply Now
               </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
