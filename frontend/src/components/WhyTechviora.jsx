import React from 'react';
import { Brain, TrendingUp, Clock, Target, Shield } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export const WhyTechviora = () => {
  const reasons = [
    {
      icon: Brain,
      title: 'We think like founders, not vendors',
      description: 'Your success is our success. We bring strategic thinking, not just execution.'
    },
    {
      icon: TrendingUp,
      title: 'We build for scale from Day 1',
      description: 'Future-proof architecture that grows with your business needs.'
    },
    {
      icon: Clock,
      title: 'We reduce time-to-market by 40–60%',
      description: 'Parallel execution and smart planning gets you to launch faster.'
    },
    {
      icon: Target,
      title: 'We focus on outcomes, not just code',
      description: 'Every decision is driven by your business goals and user needs.'
    },
    {
      icon: Shield,
      title: 'We take complete ownership — not partial delivery',
      description: 'End-to-end responsibility from concept to deployment and beyond.'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-lime-400 font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-lime-500/10 rounded-full border border-lime-500/20">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Why Founders Choose <br />
              <span className="text-lime-400">Techviora</span>
            </h2>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card 
                  key={index}
                  className="bg-zinc-900/50 border-lime-500/20 backdrop-blur-sm hover:border-lime-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-lime-500/10 group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 p-3 bg-lime-500/10 rounded-xl group-hover:bg-lime-500/20 transition-colors">
                        <Icon className="w-7 h-7 text-lime-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors leading-tight">
                          {reason.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA Card */}
          <div className="mt-12">
            <Card className="bg-gradient-to-br from-lime-500/10 via-transparent to-transparent border-lime-500/30 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/5 rounded-full blur-3xl"></div>
              <CardContent className="p-10 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    Partner with a team that <span className="text-lime-400">gets it done</span>
                  </h3>
                  <p className="text-lg text-gray-400">
                    Stop working with vendors who just deliver code. Work with a team that delivers results.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
