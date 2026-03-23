import React from 'react';
import { Smartphone, Globe, Server, LayoutDashboard, Cloud, Code } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export const WhatWeBuild = () => {
  const products = [
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Android, iOS, Flutter'
    },
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Responsive, Progressive'
    },
    {
      icon: Server,
      title: 'Backend Systems & APIs',
      description: 'Scalable Architecture'
    },
    {
      icon: LayoutDashboard,
      title: 'Admin Panels & Dashboards',
      description: 'Control & Analytics'
    },
    {
      icon: Cloud,
      title: 'Scalable Infrastructure',
      description: 'Cloud Deployment'
    },
    {
      icon: Code,
      title: 'Third-party Integrations',
      description: 'Payment, Auth, APIs'
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-zinc-950 relative overflow-hidden">
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
                Our Expertise
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Complete <span className="text-lime-400">Product Systems</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We don't just build apps — we build <span className="text-lime-400 font-semibold">everything</span> your product needs
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <Card 
                  key={index}
                  className="bg-zinc-900/50 border-lime-500/20 backdrop-blur-sm hover:border-lime-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-lime-500/10 group"
                >
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex p-4 bg-lime-500/10 rounded-xl mb-6 group-hover:bg-lime-500/20 transition-colors">
                      <Icon className="w-10 h-10 text-lime-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-lime-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Bottom Highlight */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-lime-500/10 via-transparent to-lime-500/10 border-lime-500/30 backdrop-blur-sm inline-block">
              <CardContent className="p-6 px-12">
                <p className="text-xl text-white">
                  <span className="text-lime-400 font-bold">Everything connected.</span> Everything built to scale.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
