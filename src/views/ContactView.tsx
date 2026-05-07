import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export default function ContactView() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="text-center mb-20">
        <h1 className="text-5xl lg:text-7xl font-display font-bold text-brand-green mb-6">Get in Touch</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">Have questions? We are here to help you navigate the marketplace.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="bg-white p-12 rounded-[50px] shadow-sm border border-gray-100 space-y-8">
            <div className="flex items-start space-x-6">
              <div className="bg-brand-cream p-4 rounded-2xl text-brand-green">
                <Mail className="h-8 w-8" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Email Us</h4>
                <p className="text-lg text-gray-500">support@ezigboahia.com</p>
                <p className="text-lg text-gray-500">vendors@ezigboahia.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-brand-cream p-4 rounded-2xl text-brand-green">
                <Phone className="h-8 w-8" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Call/WhatsApp</h4>
                <p className="text-lg text-gray-500">+234 (0) 800 123 4567</p>
                <button className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-2xl mt-4 hover:scale-105 transition-all shadow-lg font-bold">
                  <MessageCircle className="h-6 w-6" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-brand-cream p-4 rounded-2xl text-brand-green">
                <MapPin className="h-8 w-8" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Office</h4>
                <p className="text-lg text-gray-500">12 Market Street, Aba, Abia State, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-brand-green p-12 lg:p-20 rounded-[50px] shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
           <form className="relative z-10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-white font-bold ml-2">Name</label>
                   <input type="text" className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 px-6 text-white focus:ring-2 focus:ring-brand-gold outline-none" />
                 </div>
                 <div className="space-y-2">
                   <label className="text-white font-bold ml-2">Email</label>
                   <input type="email" className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 px-6 text-white focus:ring-2 focus:ring-brand-gold outline-none" />
                 </div>
              </div>
              <div className="space-y-2">
                 <label className="text-white font-bold ml-2">Subject</label>
                 <select className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 px-6 text-white focus:ring-2 focus:ring-brand-gold outline-none appearance-none">
                   <option>General Inquiry</option>
                   <option>Vendor Support</option>
                   <option>Rider Application</option>
                   <option>Feedback</option>
                 </select>
              </div>
              <div className="space-y-2">
                 <label className="text-white font-bold ml-2">Message</label>
                 <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 px-6 text-white focus:ring-2 focus:ring-brand-gold outline-none resize-none" />
              </div>
              <button className="w-full btn-gold text-brand-green py-5 text-xl flex items-center justify-center space-x-3">
                 <span>Send Message</span>
                 <Send className="h-6 w-6" />
              </button>
           </form>
        </div>
      </div>
    </div>
  );
}
