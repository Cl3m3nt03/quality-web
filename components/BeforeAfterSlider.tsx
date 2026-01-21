import React, { useState, useRef, useCallback } from "react";

const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    let clientX: number;

    if ("touches" in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  }, []);

  return (
    <section
      id="comparison"
      className="py-24 bg-concrete relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-graffiti text-5xl md:text-6xl mb-4 text-gradient neon-glow">
            Comparatif Avant/Après GTA 5
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto uppercase tracking-[0.2em]">
            Glissez pour comparer : GTA 5 original vs mod graphique gratuit avec
            textures 4K et shaders réalistes.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative w-full aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none border-4 border-white/10 shadow-2xl"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* After (QLT) */}
          <div className="absolute inset-0">
            <img
              src="/components/assets/image4.png"
              alt="GTA V avec pack graphique QLT - Textures 4K, couleurs vibrantes et effets visuels améliorés pour FiveM"
              className="w-full h-full object-cover grayscale-0"
              loading="lazy"
            />
            <div className="absolute bottom-6 right-6 bg-orange-500 text-white px-4 py-1 rounded-full font-bold text-sm tracking-widest uppercase shadow-lg">
              Pack Japon STREET
            </div>
          </div>

          {/* Before (Original) */}
          <div
            className="absolute inset-0 border-r-2 border-white shadow-[10px_0_30px_rgba(0,0,0,0.5)]"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src="/components/assets/image1.png"
              alt="GTA V version originale sans mod graphique - Comparaison avant amélioration visuelle"
              className="w-full h-full object-cover grayscale brightness-50 contrast-125"
              style={{ width: `${100 / (sliderPos / 100)}%` }}
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 bg-gray-800 text-white px-4 py-1 rounded-full font-bold text-sm tracking-widest uppercase shadow-lg">
              GTA V Base
            </div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-purple-500">
              <div className="flex gap-1">
                <div className="w-1 h-4 bg-purple-500 rounded-full"></div>
                <div className="w-1 h-4 bg-purple-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
