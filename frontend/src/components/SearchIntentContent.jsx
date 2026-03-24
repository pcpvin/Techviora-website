import React from 'react';
import { DollarSign, Clock, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export const SearchIntentContent = () => {
  const costFactors = [
    'Number of core features',
    'Platform complexity (Web/Mobile/Both)',
    'Backend architecture requirements',
    'Third-party integrations',
    'Design complexity',
    'Timeline urgency'
  ];

  const timelineBreakdown = [
    { phase: 'Planning & Design', time: '1 week', desc: 'Product strategy, wireframes, UX/UI' },
    { phase: 'Development', time: '2-4 weeks', desc: 'Frontend, backend, APIs, admin panel' },
    { phase: 'Testing & Launch', time: '3-5 days', desc: 'QA, bug fixes, deployment' }
  ];

  const whyMVPReasons = [
    {
      title: 'Validate Before You Scale',
      desc: 'Test your idea with real users without spending months and lakhs on full development'
    },
    {
      title: 'Faster Time to Market',
      desc: 'Launch in 30-60 days instead of 6-12 months. Capture market opportunity quickly'
    },
    {
      title: 'Lower Investment Risk',
      desc: 'Start with ₹1.5L-₹4L instead of ₹20L+. Prove the concept before heavy investment'
    },
    {
      title: 'Attract Investors',
      desc: 'Working MVP with user traction is 10x more compelling than a pitch deck'
    },
    {
      title: 'Learn from Real Feedback',
      desc: 'Build what users actually want, not what you think they want'
    }
  ];

  return (
    <section id="search-intent" className="py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto space-y-24">
          
          {/* Section 1: Cost */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-lime-400 font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-lime-500/10 rounded-full border border-lime-500/20">
                  Pricing Guide
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                How Much Does <span className="text-lime-400">MVP Development</span> Cost in India?
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Transparent pricing based on real project experience in Gurugram and across India
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              <Card className="bg-zinc-900/50 border-lime-500/20 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <DollarSign className="w-12 h-12 text-lime-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-lime-400 mb-2">₹1.5L – ₹2L</div>
                  <div className="text-white font-semibold mb-2">Basic MVP</div>
                  <p className="text-sm text-gray-400">Single platform, core features, basic admin panel</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-lime-500/10 to-transparent border-lime-500/40 backdrop-blur-sm ring-2 ring-lime-500/20">
                <CardContent className="p-8 text-center">
                  <TrendingUp className="w-12 h-12 text-lime-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-lime-400 mb-2">₹2.5L – ₹4L</div>
                  <div className="text-white font-semibold mb-2">Growth MVP</div>
                  <p className="text-sm text-gray-400">Scalable architecture, advanced features, analytics</p>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-lime-500/20 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-lime-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-lime-400 mb-2">₹4L – ₹8L</div>
                  <div className="text-white font-semibold mb-2">AI-Powered MVP</div>
                  <p className="text-sm text-gray-400">AI integrations, custom features, premium build</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-zinc-900/50 border-lime-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Factors Affecting MVP Development Cost</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {costFactors.map((factor, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-lime-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{factor}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-lime-500/5 border border-lime-500/20 rounded-lg">
                  <p className="text-sm text-gray-400">
                    <span className="text-lime-400 font-semibold">💡 Pro Tip:</span> Most startups in Gurugram and Delhi NCR choose our Growth MVP package (₹2.5L-₹4L) for the best balance of features and scalability.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Section 2: Timeline */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-lime-400 font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-lime-500/10 rounded-full border border-lime-500/20">
                  Timeline
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                How Long Does It Take to <span className="text-lime-400">Build an MVP?</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI-powered development process reduces time by 40-60% compared to traditional agencies
              </p>
            </div>

            <div className="space-y-6">
              {timelineBreakdown.map((item, index) => (
                <Card key={index} className="bg-zinc-900/50 border-lime-500/20 backdrop-blur-sm hover:border-lime-500/40 transition-all">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-lime-500/10 rounded-xl flex items-center justify-center border border-lime-500/30">
                          <Clock className="w-8 h-8 text-lime-400" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-2xl font-bold text-white">{item.phase}</h3>
                          <span className="text-lime-400 font-bold text-xl">{item.time}</span>
                        </div>
                        <p className="text-gray-400">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-gradient-to-r from-lime-500/10 via-transparent to-lime-500/10 border-lime-500/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <p className="text-2xl font-bold text-white mb-2">
                  Total Timeline: <span className="text-lime-400">3-8 weeks</span>
                </p>
                <p className="text-gray-400">
                  Traditional agencies take 3-6 months. We deliver in 30-60 days using AI-powered development.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Section 3: Why MVP First */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-lime-400 font-semibold text-sm uppercase tracking-wider px-4 py-2 bg-lime-500/10 rounded-full border border-lime-500/20">
                  Strategy
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Why Startups Choose <span className="text-lime-400">MVP First</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Smart founders in Gurugram, Bangalore, and across India are building MVPs before full products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyMVPReasons.map((reason, index) => (
                <Card key={index} className="bg-zinc-900/50 border-lime-500/20 backdrop-blur-sm hover:border-lime-500/40 hover:scale-102 transition-all group">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-lime-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-lime-400 transition-colors">
                          {reason.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {reason.desc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8 bg-black/50 border-lime-500/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Ready to Build Your MVP?</h3>
                <p className="text-center text-gray-400 mb-6">
                  Get a detailed MVP roadmap, timeline, and cost estimate for your idea — absolutely free
                </p>
                <div className="flex justify-center">
                  <a 
                    href="https://wa.me/917049006555"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-lime-500 text-black hover:bg-lime-400 font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-lime-500/50">
                      Get My Free MVP Plan →
                    </button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};
