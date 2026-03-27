import React from 'react';
import { Lightbulb, Palette, Smartphone, Server, Settings, Rocket, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

export const WhatWeDoGulf = () => {
  const services = [
    { icon: Lightbulb, title: 'Product strategy & planning', color: 'lime' },
    { icon: Palette, title: 'UX & UI design', color: 'lime' },
    { icon: Smartphone, title: 'Mobile & web app development', color: 'lime' },
    { icon: Server, title: 'Backend systems & APIs', color: 'lime' },
    { icon: Settings, title: 'Admin dashboards & control panels', color: 'lime' },
    { icon: Rocket, title: 'AI-powered features & automation', color: 'lime' }
  ];

  return (
    <section id="what-we-do" className="py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-lime-900/10 via-black to-black"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-lime-400 font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-lime-500/10 rounded-full border border-lime-500/20">
                Our Approach
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              We Build Complete Digital Products <br />
              <span className="text-lime-400">Not Just Apps</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Most development teams focus only on frontend apps.<br />
              We take <span className="text-lime-400 font-semibold">full ownership</span> of your product — from idea to scalable system.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="bg-zinc-900/50 border-lime-500/20 backdrop-blur-sm hover:border-lime-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-lime-500/10 group"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-lime-500/10 rounded-lg group-hover:bg-lime-500/20 transition-colors">
                        <Icon className="w-6 h-6 text-lime-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white group-hover:text-lime-400 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Highlight Section */}
          <div className="relative">
            <Card className="bg-gradient-to-br from-lime-500/10 via-transparent to-transparent border-lime-500/30 backdrop-blur-sm overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/5 rounded-full blur-3xl"></div>
              <CardContent className="p-8 sm:p-12 relative z-10">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-lime-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      One partner. Complete ownership. Built for scale.
                    </h3>
                    <p className="text-lg text-gray-400">
                      From concept to deployment — we handle everything so you can focus on growing your business across the GCC.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
