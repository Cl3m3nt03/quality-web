import React from "react";
import { Instagram, Twitter, MessageSquare, Heart } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="text-center md:text-left">
            <div className="font-graffiti text-5xl text-gradient neon-glow mb-2">
              QLT
            </div>
            <p className="text-gray-500 uppercase tracking-[0.4em] text-xs font-bold">
              Pack Graphique GTA 5 Gratuit - Est. 2026
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              title="Suivez QLT Graphics sur Instagram pour les derniers packs graphiques GTA 5"
              className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              title="Suivez QLT Graphics sur Twitter pour les mises à jour des mods FiveM"
              className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-blue-400 transition-colors"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://discord.gg/HeuQEZRmfZ"
              title="Rejoignez le Discord QLT Graphics pour télécharger les packs graphiques gratuits"
              className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#5865F2] transition-colors"
            >
              <MessageSquare size={24} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-gray-600 text-sm font-bold uppercase tracking-widest gap-4">
          <p>© 2026 QLT Graphics Quality - Pack Graphique GTA 5 Gratuit</p>
          <p className="flex items-center gap-2">
            Made with <Heart size={14} className="text-red-600 fill-red-600" />{" "}
            for the FiveM community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
