import { Facebook, Twitter, Instagram, Linkedin, Send, Store } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white border-t-8 border-brand-green">
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Logo & About */}
          <div className="space-y-8">
            <div className="flex items-center">
              <div className="bg-brand-gold p-2 rounded-lg mr-2">
                <Store className="text-brand-green h-6 w-6" />
              </div>
              <span className="text-2xl font-black font-sans tracking-tighter text-brand-gold">
                EZIGBO<span className="text-white">AHIA</span>
              </span>
            </div>
            <p className="text-white/40 leading-relaxed text-sm font-medium">
              Empowering African commerce through digital connection. The marketplace for the community, by the community.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-green transition-all">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-brand-gold mb-8">Marketplace</h3>
            <ul className="space-y-4 text-white/60 font-medium">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Start Ordering</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">View All Shops</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Trending Meals</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Bulk Foodstuffs</a></li>
            </ul>
          </div>

          {/* Opportunities */}
          <div>
            <h3 className="text-xl font-bold text-brand-gold mb-8">Opportunities</h3>
            <ul className="space-y-4 text-white/60 font-medium">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Become a Vendor</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Become a Rider</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Affiliate Program</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Partner With Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold text-brand-gold mb-8">Newsletter</h3>
            <p className="text-white/60 mb-6 font-medium leading-relaxed">Get updates on trending meals and shop discounts.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-6 pr-14 text-white placeholder:text-white/40 focus:ring-2 focus:ring-brand-gold outline-none"
              />
              <button className="absolute right-2 top-2 bg-brand-gold text-brand-green p-2 rounded-xl shadow-lg hover:scale-105 transition-all">
                <Send className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-white/40 text-sm font-medium">
          <p>© 2026 EZIGBO AHIA. All rights reserved.</p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
