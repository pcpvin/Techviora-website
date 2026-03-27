import React from 'react';
import { Mail, MessageSquare, Linkedin, Twitter, MapPin } from 'lucide-react';

export const FooterGulf = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'MVP Development',
    'Mobile App Development',
    'AI Product Development',
    'Backend Development',
    'Product Scaling'
  ];

  const locations = [
    'Dubai, UAE',
    'Abu Dhabi',
    'Riyadh, Saudi Arabia',
    'Doha, Qatar',
    'GCC Region'
  ];

  return (
    <footer className="bg-zinc-950 border-t border-lime-500/20 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-lime-900/10 via-black to-black"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div>
              <img 
                src="https://customer-assets.emergentagent.com/job_a1cbb74c-b1c8-42b8-971e-74621fd96fe1/artifacts/0fc2qo3w_tech-logo%20%281%29.png" 
                alt="Techviora - MVP Development Company Dubai UAE" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400 leading-relaxed mb-4">
                Leading MVP and product development company serving startups and businesses across Dubai, UAE, and the GCC region.
              </p>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-lime-500/10 border border-lime-500/20 rounded-full flex items-center justify-center text-lime-400 hover:bg-lime-500/20 hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-lime-500/10 border border-lime-500/20 rounded-full flex items-center justify-center text-lime-400 hover:bg-lime-500/20 hover:scale-110 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a href="#core-offer" className="text-gray-400 hover:text-lime-400 transition-colors text-sm">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <MapPin size={18} className="text-lime-400" />
                Serving
              </h3>
              <ul className="space-y-3">
                {locations.map((location, index) => (
                  <li key={index} className="text-gray-400 text-sm">
                    {location}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-gray-500 mt-4">
                Delivering excellence across the Middle East
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Get in Touch</h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="mailto:info@techviora.com"
                    className="flex items-center gap-3 text-gray-400 hover:text-lime-400 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-lime-500/10 border border-lime-500/20 rounded-full flex items-center justify-center group-hover:bg-lime-500/20 transition-colors flex-shrink-0">
                      <Mail size={18} className="text-lime-400" />
                    </div>
                    <span className="text-sm">info@techviora.com</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://wa.me/917049006555"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-lime-400 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-lime-500/10 border border-lime-500/20 rounded-full flex items-center justify-center group-hover:bg-lime-500/20 transition-colors flex-shrink-0">
                      <MessageSquare size={18} className="text-lime-400" />
                    </div>
                    <span className="text-sm">+91 7049006555</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* SEO Footer Text */}
          <div className="py-8 border-t border-lime-500/20">
            <p className="text-sm text-gray-500 leading-relaxed text-center max-w-4xl mx-auto mb-6">
              <span className="text-lime-400 font-semibold">Techviora</span> is a leading MVP and product development company serving businesses across Dubai, UAE, Saudi Arabia, Qatar, and the GCC region. We specialize in rapid product development, mobile app creation, AI-powered solutions, and scalable backend systems. Our AI-assisted development approach reduces costs and delivers market-ready products in 30-60 days across the Middle East.
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-lime-500/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm text-center md:text-left">
                © {currentYear} Techviora. All rights reserved. Serving clients across UAE, Saudi Arabia, Qatar & GCC.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-500 hover:text-lime-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-500 hover:text-lime-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
