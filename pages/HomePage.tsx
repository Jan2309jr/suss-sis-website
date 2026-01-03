
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Heart, Award, Users, ShoppingBag } from 'lucide-react';
import { MenuItem } from '../types';

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



      {/* About suss sis*/}
     <section className="bg-[#f6f4ee] py-28">
  <div className="max-w-7xl mx-auto px-4">

    {/* Top Row */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start mb-24">

      {/* OUR STORY */}
      <h2 className="text-[#ac2729] text-6xl md:text-7xl font-serif font-bold leading-tight">
        OUR<br />STORY
      </h2>

      {/* SUSS SIS Meaning */}
      <div className="md:col-span-2 text-center space-y-6">
        <h3 className="text-[#ac2729] text-4xl md:text-5xl font-serif font-bold">
          SUSS SIS
        </h3>
        <div className="flex justify-center items-center gap-10 text-[#ac2729] text-sm font-semibold tracking-widest uppercase">
          <span>Sweet</span>
          <span className="opacity-50">↔</span>
          <span>Sisters</span>
        </div>
      </div>
    </div>

    {/* Bottom Columns */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">

      {/* Name Origin */}
      <div className="space-y-6">
        <h4 className="text-[#ac2729] text-xl font-serif font-bold uppercase tracking-wider">
          Name Origin
        </h4>
        <p className="text-[#6b4a4a] text-sm leading-relaxed max-w-sm mx-auto">
          <strong>"Suss"</strong> symbolizes sweetness, mirroring the delightful
          flavors in our treats.<br /><br />
          <strong>"Sis"</strong> stands for the bonds of sisterhood and community
          that inspire our creations.
        </p>
      </div>

      {/* Founding */}
      <div className="space-y-6">
        <h4 className="text-[#ac2729] text-xl font-serif font-bold uppercase tracking-wider">
          Founding
        </h4>
        <p className="text-[#6b4a4a] text-sm leading-relaxed max-w-sm mx-auto">
          What began as a home kitchen has grown into a beloved bakery,
          café & kitchen known for its warm atmosphere and exceptional products.
        </p>
      </div>

      {/* Essence */}
      <div className="space-y-6">
        <h4 className="text-[#ac2729] text-xl font-serif font-bold uppercase tracking-wider">
          Essence
        </h4>
        <p className="text-[#6b4a4a] text-sm leading-relaxed max-w-sm mx-auto">
          We celebrate sweet moments and connections with baked goods
          that create lasting memories.
        </p>
      </div>

    </div>
  </div>
</section>
 
{/* Google Reviews Section */}
<section className="bg-[#f6f4ee] py-24">
  <div className="max-w-7xl mx-auto px-4 text-center space-y-10">
    
    <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#ac2729]">
      Loved by Our Customers
    </h2>

    <p className="text-[#6b4a4a] max-w-2xl mx-auto">
      Real stories, real experiences — directly from Google Reviews.
    </p>

    <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-xl border border-[#ac2729]/10">
      <iframe
        src="PASTE_YOUR_GOOGLE_EMBED_URL_HERE"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0"
      />
    </div>

  </div>
</section>

      {/* Best Sellers */}
      <section className="bg-white py-32 border-y border-[#ac2729]/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-20">
            <div className="max-w-xl">
              <span className="text-[#ac2729] text-[10px] font-bold uppercase tracking-[0.5em] mb-4 block">Hand-picked</span>
              <h2 className="text-5xl serif font-bold text-[#ac2729] leading-tight">Trending Treats</h2>
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
    </div>
  );
}
