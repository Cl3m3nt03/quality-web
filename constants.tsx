import React from "react";
import { Zap, Shield, Cpu, Monitor, Download, Users } from "lucide-react";
import { GraphicPack, Feature } from "./types";

export const GRAPHIC_PACKS: GraphicPack[] = [
  {
    id: "qlt-ultra-v1",
    title: "Pack LOS ANGELES",
    description:
      "Pack graphique GTA 5 gratuit avec textures 4K, Reshade et shaders réalistes. Alternative QuantV optimisée pour FiveM.",
    image: "/components/assets/GTA2.png",
    tag: "ULTRA",
    features: ["Ray Tracing simulé", "Textures 4K", "ENB + Reshade"],
    price: "Boost/Subs",
  },
  {
    id: "qlt-pro-street",
    title: "Pack Japon STREET",
    description:
      "Mod graphique FiveM gratuit avec FPS Boost et couleurs vibrantes. Idéal pour le RP, alternative légère à NVE.",
    image: "/components/assets/image3.png",
    tag: "PRO",
    features: ["FPS Boost", "Shaders optimisés", "Nuit réaliste"],
  },
  {
    id: "qlt-lite-perf",
    title: "Pack LITE",
    description:
      "Pack graphique pour petites configs. Textures réalistes légères et optimisation FiveM maximale.",
    image: "/components/assets/image2.png",
    tag: "LITE",
    features: ["Ultra léger", "Couleurs naturelles", "FPS Boost"],
  },
];

export const FEATURES: Feature[] = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "FPS Boost Garanti",
    description:
      "Optimisation FiveM maximale : profitez de graphismes améliorés sans perte de performance, même sur petite config.",
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Textures Réalistes 4K",
    description:
      "Reshade et ENB pré-configurés avec shaders haute qualité. Une alternative gratuite à QuantV et NVE.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Installation en 2 Minutes",
    description:
      "Téléchargement gratuit avec guide vidéo. Aucune connaissance technique requise pour installer votre mod graphique GTA 5.",
  },
];
