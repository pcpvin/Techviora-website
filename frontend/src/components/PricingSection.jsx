import React from 'react';
import { Check, Zap, Rocket, Sparkles, TrendingUp, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export const PricingSection = () => {
  const packages = [
    {
      icon: Zap,
      badge: 'Entry Point',
      name: 'MVP Sprint – 30 Days',
      subtitle: 'MVP Launch Package',
      bestFor: 'Early-stage founders validating an idea',
      price: '₹1.5L – ₹2L',
      timeline: '3–5 weeks',
      features: [
        'Product strategy & feature planning',
        'UX/UI for core flows',
        'Mobile app (Flutter / Web)',
        'Backend APIs (basic scalable setup)',
        'Admin panel (basic controls)',
        'Deployment (Play Store / Web)'
      ],
      aiAdvantages: [
        'AI-assisted code generation → faster builds',
        'AI-based testing → fewer bugs',
        'Pre-built AI workflows → reduced dev time'
      ],
      outcomes: [
        'Live product',
        'Ready for user testing',
        'Investor/demo ready'
      ],
      highlighted: false,
      color: 'lime'
    },
    {
      icon: Rocket,
      badge: 'Most Popular 💰',
      name: 'MVP + Scale Ready',
      subtitle: 'Growth MVP Package',
      bestFor: 'Startups serious about traction',
      price: '₹2.5L – ₹4L',
      timeline: '5–8 weeks',
      features: [
        'Everything in MVP Sprint PLUS:',
        'Advanced backend architecture',
        'Scalable database design',
        'Advanced admin dashboard',
        'API integrations (payments, auth, etc.)',
        'Performance optimization',
        'Basic analytics setup'
      ],
      aiAdvantages: [
        'AI-driven architecture suggestions',
        'Automated performance tuning',
        'Smart data insights setup'
      ],
      outcomes: [
        'Production-ready product',
        'Scalable to 10k–50k users',
        'Ready for growth'
      ],
      highlighted: true,
      color: 'lime'
    },
    {
      icon: Sparkles,
      badge: 'High Value 🔥',
      name: 'AI-First Product Build',
      subtitle: 'AI-Integrated Product Package',
      bestFor: 'Founders wanting AI-powered features',
      price: '₹4L – ₹8L',
      timeline: '6–10 weeks',
      features: [
        'Everything in Growth MVP PLUS:',
        'AI chatbot / assistant integration',
        'Recommendation systems (basic AI logic)',
        'Workflow automation (AI-based)',
        'AI-powered dashboards / insights',
        'Custom AI use-case integration'
      ],
      aiAdvantages: [
        'Faster feature development',
        'Smarter product capabilities',
        'Higher product value'
      ],
      outcomes: [
        'AI-powered product',
        'Strong differentiation',
        'Premium user experience'
      ],
      highlighted: false,
      color: 'purple'
    },
    {
      icon: TrendingUp,
      badge: 'Retainer 💰💰',
      name: 'Scale & Optimize',
      subtitle: 'Product Scaling Package',
      bestFor: 'Funded startups / growing products',
      price: '₹1L – ₹3L/month',
      timeline: 'Monthly',
      features: [
        'Continuous feature development',
        'Performance optimization',
        'Backend scaling',
        'Tech consulting',
        'Bug fixes & improvements',
        'AI optimization (optional)'
      ],
      aiAdvantages: [
        'AI-driven monitoring',
        'Predictive scaling',
        'Automated optimizations'
      ],
      outcomes: [
        'Stable, scalable product',
        'Faster iterations',
        'Long-term growth'
      ],
      highlighted: false,
      color: 'orange'
    }
  ];

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-500/10 border border-lime-500/20 backdrop-blur-sm mb-6">
              <Zap className="w-4 h-4 text-lime-400" />
              <span className="text-lime-400 font-semibold text-sm uppercase tracking-wider">
                Productized Packages
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing for <br />
              <span className="text-lime-400">Building Your Product</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-4">
              Choose a package based on your stage — we handle everything end-to-end.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-500/10 border border-lime-500/20 rounded-lg">
              <Sparkles className="w-4 h-4 text-lime-400 animate-pulse" />
              <span className="text-lime-400 font-semibold text-sm">
                Powered by AI to reduce development time and cost
              </span>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <Card 
                  key={index}
                  className={`relative overflow-hidden transition-all duration-300 hover:scale-[1.02] ${
                    pkg.highlighted 
                      ? 'bg-gradient-to-br from-lime-500/15 to-transparent border-lime-500/50 shadow-2xl shadow-lime-500/30 ring-2 ring-lime-500/20' 
                      : 'bg-zinc-900/50 border-lime-500/20 hover:border-lime-500/40'
                  }`}
                >
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      pkg.highlighted 
                        ? 'bg-lime-500 text-black' 
                        : 'bg-lime-500/20 text-lime-400 border border-lime-500/30'
                    }`}>
                      {pkg.badge}
                    </span>
                  </div>
                  
                  <CardHeader className="pb-6">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 rounded-xl ${
                        pkg.highlighted ? 'bg-lime-500/20' : 'bg-lime-500/10'
                      } border border-lime-500/30`}>
                        <Icon className="w-7 h-7 text-lime-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                          {pkg.subtitle}
                        </div>
                        <CardTitle className="text-2xl text-white mb-2">{pkg.name}</CardTitle>
                        <p className="text-sm text-gray-400 italic">Best for: {pkg.bestFor}</p>
                      </div>
                    </div>

                    {/* Price & Timeline */}
                    <div className="flex items-baseline justify-between mb-2">
                      <div>
                        <span className="text-4xl font-bold text-lime-400">{pkg.price}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">{pkg.timeline}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                        <Check className="w-4 h-4 text-lime-400" />
                        What's Included
                      </h4>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-lime-400 mt-1">•</span>
                            <span className={`text-gray-300 ${feature.includes('PLUS') ? 'font-semibold text-lime-400' : ''}`}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* AI Advantages */}
                    <div className="bg-lime-500/5 border border-lime-500/20 rounded-lg p-4">
                      <h4 className="text-sm font-bold text-lime-400 mb-2 flex items-center gap-2">
                        <Sparkles className="w-4 h-4" />
                        AI Advantage
                      </h4>
                      <ul className="space-y-1.5">
                        {pkg.aiAdvantages.map((advantage, idx) => (
                          <li key={idx} className="text-xs text-gray-400 flex items-start gap-2">
                            <span className="text-lime-400">→</span>
                            <span>{advantage}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes */}
                    <div>
                      <h4 className="text-sm font-bold text-white mb-2">🎯 Outcome</h4>
                      <div className="flex flex-wrap gap-2">
                        {pkg.outcomes.map((outcome, idx) => (
                          <span 
                            key={idx}
                            className="text-xs px-3 py-1 bg-black/30 border border-lime-500/20 rounded-full text-lime-400"
                          >
                            ✔ {outcome}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <a 
                      href="https://wa.me/917049006555"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block mt-6"
                    >
                      <Button 
                        className={`w-full py-6 font-semibold transition-all duration-300 ${
                          pkg.highlighted
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

          {/* Bottom Positioning Statement */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-lime-500/10 via-transparent to-lime-500/10 border-lime-500/30 backdrop-blur-sm inline-block">
              <CardContent className="p-8">
                <p className="text-2xl font-bold text-white mb-2">
                  We're not just a <span className="line-through text-gray-500">dev agency</span>
                </p>
                <p className="text-xl text-lime-400 font-bold">
                  We're a Product Company Builder for Founders
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
