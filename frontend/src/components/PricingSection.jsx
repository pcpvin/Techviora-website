import React from 'react';
import { Check, Zap, Rocket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

export const PricingSection = () => {
  const plans = [
    {
      icon: Zap,
      name: 'Starter MVP',
      price: '₹1.5L – ₹2L',
      description: 'Ideal for early-stage validation',
      features: [
        'Core features only',
        'Basic admin panel',
        'Clean, scalable foundation',
        'Mobile-responsive design',
        'API integration',
        '30-45 days delivery'
      ],
      highlighted: false
    },
    {
      icon: Rocket,
      name: 'Growth MVP',
      price: '₹2.5L – ₹4L',
      description: 'Built for real users & traction',
      features: [
        'Scalable backend architecture',
        'Advanced admin dashboard',
        'Multiple API integrations',
        'User authentication system',
        'Analytics & reporting',
        'Database optimization',
        'Cloud deployment',
        '45-60 days delivery'
      ],
      highlighted: true
    }
  ];

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-lime-400 font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-lime-500/10 rounded-full border border-lime-500/20">
                Investment
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Launch Your MVP in <br />
              <span className="text-lime-400">30–60 Days</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Validate your idea fast without wasting months on overbuilding.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <Card 
                  key={index}
                  className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${
                    plan.highlighted 
                      ? 'bg-gradient-to-br from-lime-500/10 to-transparent border-lime-500/50 shadow-xl shadow-lime-500/20' 
                      : 'bg-zinc-900/50 border-lime-500/20 hover:border-lime-500/40'
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-lime-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="pb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-lg ${
                        plan.highlighted ? 'bg-lime-500/20' : 'bg-lime-500/10'
                      }`}>
                        <Icon className="w-6 h-6 text-lime-400" />
                      </div>
                      <CardTitle className="text-2xl text-white">{plan.name}</CardTitle>
                    </div>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-lime-400">{plan.price}</span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-lime-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a 
                      href="https://wa.me/917049006555"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button 
                        className={`w-full py-6 font-semibold transition-all duration-300 ${
                          plan.highlighted
                            ? 'bg-lime-500 text-black hover:bg-lime-400 hover:shadow-lg hover:shadow-lime-500/50'
                            : 'bg-transparent border-2 border-lime-500 text-lime-400 hover:bg-lime-500/10'
                        }`}
                      >
                        Get Started
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <Card className="bg-black/50 border-lime-500/20 backdrop-blur-sm inline-block">
              <CardContent className="p-6">
                <p className="text-lg text-gray-300">
                  <span className="text-lime-400 font-semibold">Built for validation.</span> Designed for scale.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
