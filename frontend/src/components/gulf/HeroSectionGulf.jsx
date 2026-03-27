import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { Button } from '../ui/button';

export const HeroSectionGulf = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-lime-900/5 via-black to-black"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime-500/10 border border-lime-500/20 backdrop-blur-sm mb-8 animate-fade-in">
            <div className="w-2 h-2 bg-lime-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-lime-400 font-medium">Serving startups and businesses across UAE, Saudi Arabia, Qatar & GCC</span>
          </div>

          {/* Main Headline - SEO Optimized H1 */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            <span className="text-white">MVP & Product Development </span>
            <br />
            <span className="text-white">Company in </span>
            <span className="text-lime-400">Dubai</span>
            <br />
            <span className="text-white">Build & Launch in 30–60 Days</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-100">
            We help startups and businesses across Dubai, UAE, and the Gulf region design, build, and scale complete digital products — including mobile apps, backend systems, admin panels, and AI-powered solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up delay-200">
            <a 
              href="https://wa.me/917049006555"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="bg-lime-500 text-black hover:bg-lime-400 font-bold text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-lime-500/50 group"
              >
                Book Free Strategy Call
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline"
              className="border-lime-500/50 text-lime-400 hover:bg-lime-500/10 hover:border-lime-400 font-semibold text-lg px-8 py-6 transition-all duration-300 group"
              onClick={() => {
                const element = document.getElementById('how-we-work');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <PlayCircle className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              See Our Process
            </Button>
          </div>

          {/* Stats or Trust Indicators */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in delay-300">
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl font-bold text-lime-400 mb-2 group-hover:scale-110 transition-transform">30-60</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Days to Launch</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl font-bold text-lime-400 mb-2 group-hover:scale-110 transition-transform">40-60%</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Cost Reduction</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl font-bold text-lime-400 mb-2 group-hover:scale-110 transition-transform">100%</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">AI-Powered</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl sm:text-4xl font-bold text-lime-400 mb-2 group-hover:scale-110 transition-transform">GCC</div>
              <div className="text-sm text-gray-500 uppercase tracking-wider">Coverage</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-lime-500/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-lime-500 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};
