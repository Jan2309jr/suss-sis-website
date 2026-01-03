
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Heart, Award, Users, ShoppingBag } from 'lucide-react';
import { MenuItem } from '../types';

import { 
  NameOriginIcon, 
  FoundingIcon, 
  EssenceIcon, 
  CurvedArrowLeft, 
  CurvedArrowRight 
} from '../icons';

interface Props {
  cms: any;
  menu: MenuItem[];
}

export default function HomePage({ cms, menu }: Props) {
  // Best sellers from the stateful menu
  const bestSellers = menu.filter(item => item.isSeasonal || item.price > 500).slice(0, 3);

  return (
    <div className="space-y-0">
      {/* Dynamic Hero Section */}
      {/* HERO SECTION */}
<section className="relative bg-[##FFFFFF] py-28">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

      {/* LEFT — HERO TEXT */}
      <div className="space-y-8">
        <span className="inline-block text-[#ac2729] text-xs font-bold uppercase tracking-[0.4em]">
          Artisan Bakery & Café
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
  {cms.heroTitle}
</h1>
<h1 className="text-3xl md:text-8xl font-extrabold text-[#ac2729] leading-tight">
  {cms.heroAccent}
</h1>


        <p className="text-gray-500 text-base md:text-xl max-w-xl leading-relaxed">
          {cms.heroSubtitle ||
            "Handcrafted pastries, artisanal breads, and the warmth of home in every bite."}
        </p>

        <div className="flex flex-col sm:flex-row gap-6">
          <Link
            to="/menu"
            className="bg-[#ac2729] text-white px-14 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl"
          >
            View Menu
          </Link>

          <Link
            to="/about"
            className="border-2 border-[#ac2729] text-[#ac2729] px-14 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#ac2729] hover:text-white transition-all"
          >
            Our Story
          </Link>
        </div>
      </div>

      {/* RIGHT — HERO IMAGE INSIDE CARD */}
      <div className="bg-white rounded-3xl shadow-2xl p-6">
        <img
          src={cms.heroImage}
          alt="Hero"
          className="w-full h-[420px] object-cover rounded-2xl"
        />
      </div>

    </div>
  </div>
</section>




      {/* Best Sellers */}
      <section className="bg-white py-32 border-y border-[#ac2729]/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-20">
            <div className="max-w-xl">
              <span className="text-[#ac2729] text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Signature Cakes</span>
              <h2 className="text-5xl serif font-bold text-[#ac2729] leading-tight">Best Sellers</h2>
            </div>
            <Link to="/menu" className="hidden md:flex text-[#ac2729] font-bold text-xs uppercase tracking-[0.3em] items-center gap-2 group">
              Full Menu <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {bestSellers.map(item => (
              <div key={item.id} className="bg-[#fdf0e9] rounded-[3rem] border border-[#ac2729]/5 shadow-sm overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="relative h-96 overflow-hidden">
                  <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute top-8 left-8 bg-[#ac2729] text-white text-[10px] font-bold uppercase tracking-widest px-5 py-2 rounded-full shadow-2xl">
                    Popular
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl serif font-bold text-[#ac2729] mb-4">{item.name}</h3>
                  <p className="text-[#ac2729]/60 text-sm font-light mb-8 line-clamp-2 leading-relaxed">{item.description}</p>
                  <div className="flex items-center justify-between pt-8 border-t border-[#ac2729]/10">
                    <span className="text-2xl font-black text-[#ac2729]">₹{item.price}</span>
                    <Link to="/menu" className="bg-[#ac2729] text-white p-4 rounded-full hover:scale-110 transition-all shadow-xl shadow-[#ac2729]/20">
                      <ShoppingBag size={22} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*our stoty*/}
      <section className="py-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col items-center">
      {/* Top Header Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-24">
        {/* Left Side: Title */}
        <div className="flex flex-col">
          <h1 className="text-[#8f2223] text-7xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter">
  OUR <br /> STORY
</h1>

        </div>

        {/* Right Side: Brand Origin Diagram */}
        <div className="flex flex-col items-center md:items-end justify-center pt-8 md:pt-16 pr-0 md:pr-12">
          <div className="text-4xl md:text-5xl lg:text-6xl font-display text-primary font-medium mb-12">
            SUSS SIS
          </div>
          
          <div className="relative flex justify-between w-full max-w-sm">
            {/* Sweet Column */}
            <div className="flex flex-col items-center group">
              <CurvedArrowLeft className="w-16 h-12 text-primary opacity-60 absolute -top-12 left-1/4 -translate-x-1/2" />
              <span className="font-hand text-2xl lg:text-3xl text-primary mt-2">SWEET</span>
            </div>

            {/* Sisters Column */}
            <div className="flex flex-col items-center group">
              <CurvedArrowRight className="w-16 h-12 text-primary opacity-60 absolute -top-12 right-1/4 translate-x-1/2" />
              <span className="font-hand text-2xl lg:text-3xl text-primary mt-2">SISTERS</span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Columns Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 mb-20">
        {/* Name Origin */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 w-24 h-24 flex items-center justify-center">
            <NameOriginIcon className="w-20 h-20 text-primary opacity-90 transform -rotate-12" />
          </div>
          <h3 className="font-hand text-3xl lg:text-4xl text-primary font-bold mb-6 tracking-wide uppercase">
            NAME ORIGIN
          </h3>
          <div className="space-y-4 text-text-light font-body text-lg lg:text-xl leading-relaxed max-w-xs">
            <p>
              <span className="font-bold text-primary">"Suss"</span> Symbolizes <span className="font-bold text-primary italic">sweetness</span>, mirroring the delightful flavors in our treats.
            </p>
            <p>
              <span className="font-bold text-primary">"SIS"</span> stands for the bonds of <span className="font-bold text-primary italic">sisterhood</span> and community that inspire our creations.
            </p>
          </div>
        </div>

        {/* Founding */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 w-24 h-24 flex items-center justify-center">
            <FoundingIcon className="w-20 h-20 text-primary opacity-90" />
          </div>
          <h3 className="font-hand text-3xl lg:text-4xl text-primary font-bold mb-6 tracking-wide uppercase">
            FOUNDING
          </h3>
          <p className="text-text-light font-body text-lg lg:text-xl leading-relaxed max-w-xs">
            What began as a home kitchen has grown into a beloved bakery, cafe & kitchen known for its warm atmosphere and exceptional products.
          </p>
        </div>

        {/* Essence */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 w-24 h-24 flex items-center justify-center">
            <EssenceIcon className="w-20 h-20 text-primary opacity-90" />
          </div>
          <h3 className="font-hand text-3xl lg:text-4xl text-primary font-bold mb-6 tracking-wide uppercase">
            ESSENCE
          </h3>
          <p className="text-text-light font-body text-lg lg:text-xl leading-relaxed max-w-xs">
            We celebrate sweet moments and connections with baked goods that create lasting memories.
          </p>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="w-32 h-1 bg-primary/20 rounded-full"></div>
    </section>
    </div>
  );
}
