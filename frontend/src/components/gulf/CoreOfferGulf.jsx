import React from 'react';
import { Check, Zap, Rocket, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

export const CoreOfferGulf = () => {
  const offerings = [
    {
      icon: Zap,
      name: 'MVP Development',
      description: 'Designed for early-stage validation',
      features: [
        'Core feature development',
        'Admin dashboard included',
        'Scalable architecture',
        'Mobile & web platforms',
        'API integrations'
      ],
      note: 'Perfect for startups validating ideas'
    },
    {
      icon: Rocket,
      name: 'Growth Product Development',
      description: 'Built for real users and scaling',
      features: [
        'Advanced backend systems',
        'API integrations',
        'Performance optimization',
        'Analytics & reporting',
        'Cloud deployment'
      ],
      note: 'Ideal for businesses ready to scale',
      highlighted: true
    },
    {
      icon: Sparkles,
      name: 'AI-Powered Product Development',
      description: 'Next-generation intelligent products',
      features: [
        'AI chatbot and automation',
        'Smart workflows',
        'Data-driven insights',
        'Enhanced user experience',
        'Predictive analytics'
      ],
      note: 'For businesses seeking competitive edge'
    }
  ];

  return (
    <section id="core-offer" className="py-24 lg:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-lime-400 font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-lime-500/10 rounded-full border border-lime-500/20">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Launch Your MVP in <br />
              <span className="text-lime-400">30–60 Days</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Validate your idea quickly and bring your product to market with speed and precision.
            </p>
          </div>

          {/* Offerings Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {offerings.map((offer, index) => {
              const Icon = offer.icon;
              return (
                <Card 
                  key={index}
                  className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                    offer.highlighted 
                      ? 'bg-gradient-to-br from-lime-500/15 to-transparent border-lime-500/50 shadow-2xl shadow-lime-500/30 ring-2 ring-lime-500/20' 
                      : 'bg-zinc-900/50 border-lime-500/20 hover:border-lime-500/40'
                  }`}
                >
                  {offer.highlighted && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-lime-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="pb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-xl ${
                        offer.highlighted ? 'bg-lime-500/20' : 'bg-lime-500/10'
                      } border border-lime-500/30`}>
                        <Icon className="w-7 h-7 text-lime-400" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-white mb-2">{offer.name}</CardTitle>
                    <p className="text-sm text-gray-400 italic">{offer.description}</p>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {offer.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-lime-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="p-3 bg-lime-500/5 border border-lime-500/20 rounded-lg mb-6">
                      <p className="text-xs text-gray-400">{offer.note}</p>
                    </div>

                    <a 
                      href="https://wa.me/917049006555"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button 
                        className={`w-full py-6 font-semibold transition-all duration-300 ${
                          offer.highlighted
                            ? 'bg-lime-500 text-black hover:bg-lime-400 hover:shadow-xl hover:shadow-lime-500/50'
                            : 'bg-transparent border-2 border-lime-500 text-lime-400 hover:bg-lime-500/10'
                        }`}
                      >
                        Get Started →
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom Note */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-lime-500/10 via-transparent to-lime-500/10 border-lime-500/30 backdrop-blur-sm inline-block">
              <CardContent className="p-6 px-12">
                <p className="text-lg text-white">
                  <span className="text-lime-400 font-bold">Flexible engagement models</span> tailored to your business needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
