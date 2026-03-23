import React from 'react';
import { Zap, DollarSign, Clock, Code, Sparkles, TrendingDown } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export const AIPoweredSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: '60% Faster Development',
      description: 'AI-assisted code generation and automated testing accelerate delivery without compromising quality.',
      stat: '60%',
      label: 'Time Saved'
    },
    {
      icon: DollarSign,
      title: '40% Cost Reduction',
      description: 'Intelligent automation reduces manual effort, lowering development costs while maintaining premium standards.',
      stat: '40%',
      label: 'Cost Saved'
    },
    {
      icon: Code,
      title: 'Smart Code Generation',
      description: 'AI-powered tools generate boilerplate, APIs, and components—letting our team focus on business logic.',
      stat: '10x',
      label: 'Productivity'
    }
  ];

  const aiTools = [
    { name: 'AI Code Assistants', impact: 'Faster development cycles' },
    { name: 'Automated Testing', impact: 'Zero-bug deployments' },
    { name: 'Smart Design Systems', impact: 'Consistent UI/UX' },
    { name: 'Intelligent Debugging', impact: 'Instant issue resolution' },
    { name: 'AI-Powered Documentation', impact: 'Better maintainability' },
    { name: 'Predictive Analytics', impact: 'Proactive optimization' }
  ];

  return (
    <section className="py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-500/10 border border-lime-500/20 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-lime-400 animate-pulse" />
              <span className="text-lime-400 font-semibold text-sm uppercase tracking-wider">
                AI-Powered Development
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              How We Use <span className="text-lime-400">AI</span> to <br />
              Reduce Costs & Speed Up Delivery
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We leverage cutting-edge AI tools and automation to deliver <span className="text-lime-400 font-semibold">faster, cheaper, and better</span> — without sacrificing quality.
            </p>
          </div>

          {/* Main Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card 
                  key={index}
                  className="bg-zinc-900/50 border-lime-500/20 backdrop-blur-sm hover:border-lime-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-lime-500/20 group relative overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-lime-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <CardContent className="p-8 relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="inline-flex p-4 bg-lime-500/10 rounded-xl group-hover:bg-lime-500/20 transition-colors border border-lime-500/20">
                        <Icon className="w-8 h-8 text-lime-400" />
                      </div>
                    </div>

                    {/* Stat */}
                    <div className="mb-4">
                      <div className="text-5xl font-bold text-lime-400 mb-1">{benefit.stat}</div>
                      <div className="text-sm text-gray-500 uppercase tracking-wider">{benefit.label}</div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* AI Tools Section */}
          <Card className="bg-gradient-to-br from-lime-500/5 via-zinc-900/50 to-transparent border-lime-500/30 backdrop-blur-sm overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-lime-500/5 rounded-full blur-3xl"></div>
            <CardContent className="p-8 sm:p-12 relative z-10">
              <div className="flex items-start gap-4 mb-8">
                <Zap className="w-8 h-8 text-lime-400 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Our AI-Powered Tech Stack
                  </h3>
                  <p className="text-lg text-gray-400">
                    We integrate the latest AI tools into our development workflow to maximize efficiency
                  </p>
                </div>
              </div>

              {/* AI Tools Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {aiTools.map((tool, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 bg-black/30 border border-lime-500/20 rounded-lg hover:border-lime-500/40 hover:bg-lime-500/5 transition-all group"
                  >
                    <div className="w-2 h-2 bg-lime-400 rounded-full mt-2 flex-shrink-0 group-hover:animate-pulse"></div>
                    <div>
                      <div className="text-white font-semibold mb-1">{tool.name}</div>
                      <div className="text-sm text-gray-500">{tool.impact}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Bottom Highlight */}
          <div className="mt-12 text-center">
            <Card className="bg-black/50 border-lime-500/20 backdrop-blur-sm inline-block">
              <CardContent className="p-6 px-8">
                <div className="flex items-center gap-3">
                  <TrendingDown className="w-6 h-6 text-lime-400" />
                  <p className="text-lg text-white">
                    <span className="text-lime-400 font-bold">Same quality. Lower cost. Faster delivery.</span> That's the AI advantage.
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
