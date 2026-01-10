import React from "react";
import { Zap, Shield, Cpu, Monitor, Download, Users } from "lucide-react";
import { GraphicPack, Feature } from "./types";

export const GRAPHIC_PACKS: GraphicPack[] = [
  {
    id: "qlt-ultra-v1",
    title: "Pack LOS ANGELES",
    description:
      "Le pack ultime pour un réalisme absolu. Reflets 4K, météo dynamique et shaders optimisés.",
    image: "/components/assets/GTA2.png",
    tag: "ULTRA",
    features: ["Ray Tracing simulé", "Textures 4K", "Météo custom"],
    price: "Boost/Subs",
  },
  {
    id: "qlt-pro-street",
    title: "Pack Japon STREET",
    description:
      "Conçu pour le RP. Couleurs vibrantes et visibilité accrue sans perte de FPS.",
    image: "/components/assets/image3.png",
    tag: "PRO",
    features: ["Optimisation FPS", "Color Grade Street", "Nuit sombre"],
  },
  {
    id: "qlt-lite-perf",
    title: "SOON Pack",
    description:
      "Améliorez vos visuels même sur petite config. Léger, propre et efficace.",
    image: "/components/assets/image2.png",
    tag: "PRO",
    features: ["Nettoyage flous", "Couleurs naturelles"],
  },
];

export const FEATURES: Feature[] = [
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Pack Qualité Optimisé",
    description:
      "Des graphismes améliorés sans compromettre les performances de votre jeu.",
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Qualité Visuelle 4K",
    description:
      "Des textures retravaillées et des shaders de pointe pour un rendu digne des jeux next-gen.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Installation Rapide",
    description:
      "Un guide d'installation simple et efficace pour profiter de vos nouveaux graphismes en 2 minutes.",
  },
];
