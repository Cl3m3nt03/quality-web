import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PackCard from "./components/PackCard";
import FeaturesSection from "./components/FeaturesSection";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import Footer from "./components/Footer";
import { GRAPHIC_PACKS } from "./constants";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white selection:bg-purple-500 selection:text-white">
      <Navbar />

      <main>
        <Hero />

        {/* Packs Section */}
        <section id="packs" className="py-24 bg-concrete">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-graffiti text-6xl md:text-8xl mb-6 text-white uppercase tracking-tighter">
                LES <span className="text-gradient">PACKS</span>
              </h2>
              <div className="h-1.5 w-32 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto mb-8"></div>
              <p className="text-gray-400 max-w-xl mx-auto uppercase tracking-[0.2em] font-semibold">
                Choisissez l'amélioration visuelle qui correspond à votre setup
                et vos besoins.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {GRAPHIC_PACKS.map((pack) => (
                <PackCard key={pack.id} pack={pack} />
              ))}
            </div>
          </div>
        </section>

        <BeforeAfterSlider />

        <FeaturesSection />

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-[#1a1a1a] to-black border-y border-white/5 overflow-hidden relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-graffiti text-[20vw] opacity-[0.03] whitespace-nowrap pointer-events-none">
            GRAPHICS QUALITY
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="font-graffiti text-5xl md:text-7xl mb-10 leading-tight">
              PRÊT À CHANGER DE <span className="text-gradient">DIMENSION</span>{" "}
              ?
            </h2>
            <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto uppercase tracking-wide">
              Rejoignez notre Discord pour obtenir du support, partager vos
              clips et accéder à nos dernières mises à jour.
            </p>
            <a
              href="https://discord.gg/HeuQEZRmfZ"
              className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xl hover:bg-purple-500 hover:text-white transition-all duration-300 group"
            >
              REJOINDRE LE DISCORD
              <div className="bg-black/10 group-hover:bg-white/20 p-2 rounded-lg transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2758-3.68-.2758-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1971.3728.2914a.077.077 0 01-.0066.1277 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
                </svg>
              </div>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
