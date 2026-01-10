import React from "react";
import { GraphicPack } from "../types";
import { Check, ShoppingCart } from "lucide-react";

interface PackCardProps {
  pack: GraphicPack;
}

const PackCard: React.FC<PackCardProps> = ({ pack }) => {
  return (
    <div className="group relative bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/5 hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-2 shadow-2xl">
      {/* Image Container */}
      <div className="h-64 overflow-hidden relative">
        <img
          src={pack.image}
          alt={pack.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest border border-white/10">
          {pack.tag}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="font-graffiti text-3xl mb-3 text-white group-hover:text-gradient transition-all">
          {pack.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 h-12 overflow-hidden">
          {pack.description}
        </p>

        <ul className="space-y-3 mb-8">
          {pack.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-sm text-gray-300 font-medium"
            >
              <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500">
                <Check size={12} />
              </div>
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
              Prix
            </span>
            <span className="text-2xl font-black text-white">
              {pack.price || "FREE"}
            </span>
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-orange-500 p-4 rounded-xl hover:scale-110 transition-transform active:scale-95 shadow-xl shadow-purple-500/20">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackCard;
