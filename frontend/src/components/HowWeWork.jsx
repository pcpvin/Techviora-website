import React from 'react';
import { Target, Layout, Layers, Rocket } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export const HowWeWork = () => {
  const steps = [
    {
      icon: Target,
      number: '01',
      title: 'Product Clarity',
      description: 'We define what to build — and what NOT to build.',
      details: 'Strategic planning session to identify core features and prioritize for MVP success.'
    },
    {
      icon: Layout,
      number: '02',
      title: 'MVP Planning',
      description: 'We structure your product for speed and scalability.',
      details: 'Architectural design that ensures rapid development without sacrificing future growth.'
    },
    {
      icon: Layers,
      number: '03',
      title: 'Parallel Execution',
      description: 'Design, backend, and frontend move together.',
      details: 'Simultaneous development across all layers to maximize efficiency and reduce time-to-market.'
    },
    {
      icon: Rocket,
      number: '04',
      title: 'Launch & Scale',
      description: 'We ship fast and optimize continuously.',
      details: 'Deploy to production and iterate based on real user feedback and performance metrics.'
    }
  ];

  return (
    <section id="how-we-work" className="py-24 lg:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-lime-400 font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-lime-500/10 rounded-full border border-lime-500/20">
                Our Process
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              How We Build Products <br />
              That <span className="text-lime-400">Actually Work</span>
            </h2>
          </div>

          {/* Process Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-12 top-24 w-0.5 h-16 bg-gradient-to-b from-lime-500/50 to-transparent hidden lg:block"></div>
                  )}

                  <Card className={`bg-zinc-900/50 border-lime-500/20 backdrop-blur-sm hover:border-lime-500/50 transition-all duration-500 hover:scale-102 hover:shadow-xl hover:shadow-lime-500/10 group ${
                    isEven ? 'lg:mr-24' : 'lg:ml-24'
                  }`}>
                    <CardContent className="p-8 lg:p-10">
                      <div className="flex flex-col lg:flex-row items-start gap-6">
                        {/* Icon & Number */}
                        <div className="flex items-center gap-4 lg:gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-20 h-20 bg-lime-500/10 rounded-2xl flex items-center justify-center group-hover:bg-lime-500/20 transition-colors border border-lime-500/20">
                              <Icon className="w-10 h-10 text-lime-400" />
                            </div>
                          </div>
                          <div className="text-6xl font-bold text-lime-500/20 group-hover:text-lime-500/30 transition-colors">
                            {step.number}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-xl text-lime-400 font-semibold mb-4">
                            {step.description}
                          </p>
                          <p className="text-gray-400 leading-relaxed">
                            {step.details}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Bottom Highlight */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-lime-500/10 via-transparent to-lime-500/10 border-lime-500/30 backdrop-blur-sm inline-block">
              <CardContent className="p-6 px-12">
                <p className="text-xl text-white">
                  <span className="text-lime-400 font-bold">No delays.</span> No over-engineering. Just focused execution.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
