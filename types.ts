
import React from 'react';

export interface GraphicPack {
  id: string;
  title: string;
  description: string;
  image: string;
  price?: string;
  features: string[];
  tag: 'PRO' | 'LITE' | 'ULTRA';
}

export interface Feature {
  // Fix: Added React import to resolve the namespace error
  icon: React.ReactNode;
  title: string;
  description: string;
}
