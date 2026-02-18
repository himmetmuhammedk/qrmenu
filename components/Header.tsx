import React from 'react';
import { Moon, Star } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="relative bg-emerald-950 text-amber-50 overflow-hidden shadow-lg pb-6 md:pb-10 rounded-b-[2rem] md:rounded-b-[2.5rem]">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-1/4 -translate-y-1/4">
        <Moon size={120} className="md:w-[180px] md:h-[180px]" />
      </div>
      <div className="absolute top-8 left-8 opacity-20">
        <Star size={16} className="text-amber-300 animate-pulse md:w-5 md:h-5" />
      </div>
      
      <div className="relative z-10 px-4 md:px-6 pt-8 md:pt-12 text-center">
        <div className="flex justify-center items-center gap-2 mb-2 text-amber-400">
           <Moon size={20} className="md:w-6 md:h-6" fill="currentColor" />
           <span className="font-serif tracking-widest uppercase text-xs md:text-sm">Hayırlı Ramazanlar</span>
        </div>
        <h1 className="font-serif text-3xl md:text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 leading-tight">
          Uluırmak Uygulama Oteli
        </h1>
        <p className="text-emerald-200/80 text-xs md:text-base max-w-md mx-auto px-4">
          Geleneksel lezzetlerimizle iftar sofranız şenlensin.
        </p>
      </div>
    </header>
  );
};