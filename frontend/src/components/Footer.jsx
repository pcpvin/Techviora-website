import React from 'react';
import { Mail, MessageSquare, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-lime-500/20 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-lime-900/10 via-black to-black"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div>
              <img 
                src="https://customer-assets.emergentagent.com/job_a1cbb74c-b1c8-42b8-971e-74621fd96fe1/artifacts/0fc2qo3w_tech-logo%20%281%29.png" 
                alt="Techviora Logo" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-gray-400 leading-relaxed mb-4">
                Building complete digital products that scale — from idea to launch and beyond.
              </p>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-lime-500/10 border border-lime-500/20 rounded-full flex items-center justify-center text-lime-400 hover:bg-lime-500/20 hover:scale-110 transition-all duration-300"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-lime-500/10 border border-lime-500/20 rounded-full flex items-center justify-center text-lime-400 hover:bg-lime-500/20 hover:scale-110 transition-all duration-300"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                {['What We Do', 'Pricing', 'Case Studies', 'How We Work'].map((link, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => {
                        const id = link.toLowerCase().replace(/\s+/g, '-');
                        const element = document.getElementById(id);
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-400 hover:text-lime-400 transition-colors"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
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
                    <div className="w-10 h-10 bg-lime-500/10 border border-lime-500/20 rounded-full flex items-center justify-center group-hover:bg-lime-500/20 transition-colors">
                      <Mail size={18} className="text-lime-400" />
                    </div>
                    <span>info@techviora.com</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://wa.me/917049006555"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-400 hover:text-lime-400 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-lime-500/10 border border-lime-500/20 rounded-full flex items-center justify-center group-hover:bg-lime-500/20 transition-colors">
                      <MessageSquare size={18} className="text-lime-400" />
                    </div>
                    <span>+91 7049006555</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-lime-500/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm text-center md:text-left">
                © {currentYear} Techviora. All rights reserved.
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
