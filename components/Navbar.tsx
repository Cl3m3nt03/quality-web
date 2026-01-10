import React, { useState, useEffect } from "react";
import { Menu, X, Instagram, MessageSquare } from "lucide-react";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/90 backdrop-blur-md py-3 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-graffiti text-3xl text-gradient neon-glow">
            QLT
          </span>
          <span className="hidden md:block font-bold tracking-tighter uppercase text-sm border-l border-white/20 pl-3">
            Graphics Quality
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-sm uppercase tracking-widest">
          <a href="#packs" className="hover:text-purple-400 transition-colors">
            Packs
          </a>
          <a
            href="#features"
            className="hover:text-purple-400 transition-colors"
          >
            Features
          </a>
          <a
            href="#comparison"
            className="hover:text-purple-400 transition-colors"
          >
            Before/After
          </a>
          <a
            href="https://discord.gg/HeuQEZRmfZ"
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-orange-500 px-5 py-2 rounded-full hover:scale-105 transition-transform active:scale-95 shadow-lg shadow-purple-500/20"
          >
            <MessageSquare size={18} />
            Discord
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-t border-white/10 p-6 flex flex-col gap-6 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <a
            href="#packs"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl font-bold"
          >
            Packs
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl font-bold"
          >
            Features
          </a>
          <a
            href="#comparison"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xl font-bold"
          >
            Before/After
          </a>
          <a
            href="https://discord.gg"
            className="bg-gradient-to-r from-purple-600 to-orange-500 px-5 py-3 rounded-xl flex items-center justify-center gap-2 font-bold uppercase tracking-widest"
          >
            <MessageSquare size={20} /> Join Discord
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
