
import React from 'react';
import { FEATURES } from '../constants';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-black relative">
      {/* Splatter Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-graffiti text-5xl md:text-6xl text-white mb-6 uppercase">Pourquoi choisir <span className="text-gradient">QLT</span> ?</h2>
            <p className="text-gray-400 text-lg uppercase tracking-wider">L'art du détail au service de la performance.</p>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-orange-500 mb-4 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-concrete border border-white/5 hover:border-purple-500/20 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-orange-500 flex items-center justify-center mb-6 shadow-xl shadow-orange-500/20">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
