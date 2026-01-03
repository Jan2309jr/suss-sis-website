
import React from 'react';
import { Category, MenuItem, CakeDesign } from './types';
import logo from './logo-susssis.png';

export const COLORS = {
  cream: '#FFFFFF',
  rose: '#ac2729',
  text: '#2D2424',
};

export const CONTACT_INFO = {
  address: "No. 833/23, Near National Public School, RTO Bypass Road, Singanayakanahalli, Yelahanka, Bengaluru, Karnataka 560064",
  phone: "+91 70193 02460",
  email: "susssis.info@gmail.com",
  instagram: "https://www.instagram.com/susssisbakery",
  googleMaps: "https://maps.app.goo.gl/..."
};

export const INITIAL_MENU: MenuItem[] = [
  {
    id: 'c1',
    name: 'Classic Chocolate Truffle',
    description: 'Rich Belgian chocolate ganache layered between moist cocoa sponges.',
    price: 650,
    category: Category.CAKES,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'p1',
    name: 'Penne Arrabbiata',
    description: 'Spicy tomato sauce with garlic, chili flakes, and fresh basil.',
    price: 320,
    category: Category.PASTA,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'pz1',
    name: 'Farmhouse Special Pizza',
    description: 'Fresh vegetables, olives, mushrooms, and mozzarella on our hand-rolled crust.',
    price: 450,
    category: Category.PIZZA,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'b1',
    name: 'Suss Sis Signature Burger',
    description: 'Gourmet patty with caramelized onions, secret sauce, and brioche bun.',
    price: 280,
    category: Category.BURGERS,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'bv1',
    name: 'Cold Brew Coffee',
    description: '18-hour steeped artisanal coffee beans served over ice.',
    price: 180,
    category: Category.BEVERAGES,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'sc1',
    name: 'Rich Plum Cake',
    description: 'Traditional Christmas specialty with rum-soaked fruits and nuts.',
    price: 850,
    category: Category.CAKES,
    isVeg: true,
    isSeasonal: true,
    image: 'https://images.unsplash.com/photo-1544006659-f0b21f04cb1d?auto=format&fit=crop&q=80&w=600'
  }
];

export const CAKE_DESIGNS: CakeDesign[] = [
  { id: 'cd1', name: 'Floral Fantasy', image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=600', basePrice: 1200 },
  { id: 'cd2', name: 'Minimalist Gold', image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=600', basePrice: 1000 },
  { id: 'cd3', name: 'Unicorn Dream', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=600', basePrice: 1500 }
];

export const LOGO_IMAGE = logo;

