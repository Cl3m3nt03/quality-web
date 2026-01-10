import React from "react";
import { ChevronDown, PlayCircle } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Video Placeholder or Ambient Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/components/assets/image1.png"
          className="w-full h-full object-cover opacity-30 scale-105"
          alt="Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-concrete opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div className="inline-block px-4 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-xs font-bold tracking-[0.3em] uppercase mb-8 animate-bounce">
          Nouvelle Collection 2024
        </div>

        <h1 className="font-graffiti text-7xl md:text-9xl mb-2 text-white leading-tight drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
          GRAPHICS <br />{" "}
          <span className="text-gradient neon-glow">QUALITY</span>
        </h1>

        <p className="max-w-xl text-gray-300 text-lg md:text-xl font-light tracking-wide mb-10 leading-relaxed">
          Redéfinissez votre expérience visuelle sur GTA V. Des packs graphiques
          optimisés pour le street-art et le réalisme urbain.
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <a
            href="#packs"
            className="bg-gradient-to-r from-purple-600 to-orange-500 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-lg hover:scale-105 transition-transform active:scale-95 shadow-2xl shadow-purple-500/40 flex items-center gap-3"
          >
            Découvrir les Packs
          </a>
          <button className="bg-white/5 backdrop-blur-sm border border-white/10 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-lg hover:bg-white/10 transition-colors flex items-center gap-3">
            <PlayCircle /> Showcase
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <ChevronDown size={32} className="text-gray-500" />
      </div>
    </section>
  );
};

export default Hero;
