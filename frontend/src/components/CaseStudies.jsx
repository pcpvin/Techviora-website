import React from 'react';
import { TrendingUp, Users, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export const CaseStudies = () => {
  const cases = [
    {
      icon: Zap,
      title: 'Lightning-Fast MVP Launch',
      description: 'Built a complete MVP (mobile app + admin panel + backend system) in 21 days for a startup.',
      result: 'Ready for user testing and investor demos.',
      metrics: ['21 Days', 'Full Stack', '3 Platforms']
    },
    {
      icon: TrendingUp,
      title: 'Scaling Success Story',
      description: 'Helped a growing business scale their app with improved backend architecture and performance optimization.',
      result: 'Faster app, better user retention.',
      metrics: ['3x Speed', '50% Costs', 'Zero Downtime']
    },
    {
      icon: Users,
      title: 'Enterprise Ecosystem',
      description: 'Developed a full product ecosystem with APIs and admin controls for operational efficiency.',
      result: 'Reduced manual work and improved scalability.',
      metrics: ['80% Automation', 'Multi-tenant', 'Real-time Sync']
    }
  ];

  return (
    <section id="case-studies" className="py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-lime-400 font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-lime-500/10 rounded-full border border-lime-500/20">
                Success Stories
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Real Products. <span className="text-lime-400">Real Results.</span>
            </h2>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cases.map((study, index) => {
              const Icon = study.icon;
              return (
                <Card 
                  key={index}
                  className="bg-zinc-900/50 border-lime-500/20 backdrop-blur-sm hover:border-lime-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-lime-500/10 group relative overflow-hidden"
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <CardContent className="p-8 relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="inline-flex p-4 bg-lime-500/10 rounded-xl group-hover:bg-lime-500/20 transition-colors">
                        <Icon className="w-8 h-8 text-lime-400" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-lime-400 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {study.description}
                    </p>

                    {/* Result */}
                    <div className="mb-6 p-4 bg-lime-500/5 border border-lime-500/20 rounded-lg">
                      <p className="text-sm text-gray-500 mb-1 uppercase tracking-wider">Result</p>
                      <p className="text-lime-400 font-semibold">{study.result}</p>
                    </div>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-2">
                      {study.metrics.map((metric, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-black/50 border border-lime-500/20 rounded-full text-xs text-gray-400 font-medium"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
