import React, { useState } from 'react';
import { ArrowRight, Mail, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export const FinalCTA = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <section className="py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Dramatic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime-500/20 via-lime-500/5 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-lime-500/10 via-zinc-900/50 to-transparent border-lime-500/30 backdrop-blur-xl shadow-2xl shadow-lime-500/20 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl"></div>
            
            <CardContent className="p-12 sm:p-16 relative z-10">
              <div className="text-center">
                {/* Headline */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Have an Idea? <br />
                  Let's Turn It Into a <span className="text-lime-400">Product.</span>
                </h2>

                {/* Subtext */}
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                  Get a clear roadmap to build and launch your product — without wasting time or money.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                  <a 
                    href="https://wa.me/917049006555"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      size="lg"
                      className="bg-lime-500 text-black hover:bg-lime-400 font-bold text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-lime-500/50 group w-full sm:w-auto"
                    >
                      <MessageSquare className="mr-2" size={20} />
                      Book Free MVP Consultation
                      <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </Button>
                  </a>
                  
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-lime-500/50 text-lime-400 hover:bg-lime-500/10 hover:border-lime-400 font-semibold text-lg px-8 py-6 transition-all duration-300 w-full sm:w-auto"
                    onClick={() => setShowContactForm(!showContactForm)}
                  >
                    <Mail className="mr-2" size={20} />
                    Send Us an Email
                  </Button>
                </div>

                {/* Email Display */}
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-black/50 border border-lime-500/20 rounded-full">
                  <Mail className="w-4 h-4 text-lime-400" />
                  <a 
                    href="mailto:info@techviora.com"
                    className="text-gray-400 hover:text-lime-400 transition-colors"
                  >
                    info@techviora.com
                  </a>
                </div>

                {/* WhatsApp Quick Link */}
                <div className="mt-8 pt-8 border-t border-lime-500/20">
                  <p className="text-gray-400 mb-4">
                    Chat with us on WhatsApp to discuss your idea instantly
                  </p>
                  <a 
                    href="https://wa.me/917049006555"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lime-400 hover:text-lime-300 transition-colors font-semibold"
                  >
                    <MessageSquare size={20} />
                    <span>+91 7049006555</span>
                    <ArrowRight size={16} className="animate-pulse" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Microcopy Tags */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {['Built for scale', 'Launch faster', 'End-to-end ownership', 'From idea to product'].map((tag, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-lime-500/10 border border-lime-500/20 rounded-full text-sm text-lime-400 font-medium backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
