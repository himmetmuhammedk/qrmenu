import React from 'react';
import { MenuItem, CategoryId } from '../types';
import { Flame, Leaf, Users } from 'lucide-react';

interface MenuItemCardProps {
  item: MenuItem;
  hideDescription?: boolean;
}

export const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, hideDescription }) => {
  const isDessertOrPastry = item.categoryId === CategoryId.TATLILAR || item.categoryId === CategoryId.PASTALAR;
  const priceUnit = isDessertOrPastry ? '/ Adet' : '/ Kişi Başı';

  return (
    <div className="bg-white rounded-2xl p-4 md:p-5 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-emerald-100 flex flex-col justify-between h-full">
      
      <div className="flex justify-between items-start gap-3 mb-2">
        <h3 className="font-serif text-lg md:text-xl font-bold text-emerald-950 leading-tight">{item.name}</h3>
        <div className="flex gap-1 shrink-0">
          {item.isSpicy && (
            <div className="bg-red-50 p-1 rounded-full border border-red-100" title="Acılı">
              <Flame size={14} className="text-red-500 fill-red-500" />
            </div>
          )}
          {item.isVegetarian && (
            <div className="bg-green-50 p-1 rounded-full border border-green-100" title="Vejetaryen">
              <Leaf size={14} className="text-green-600 fill-green-600" />
            </div>
          )}
        </div>
      </div>

      {!hideDescription && (
        <div className="mb-3 md:mb-4">
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{item.description}</p>
        </div>
      )}
      
      <div className={`flex justify-between items-center ${!hideDescription ? 'pt-3 border-t border-gray-50 mt-auto' : 'mt-2'}`}>
        <div className="flex items-baseline gap-1">
          <span className="text-emerald-900 font-bold text-lg md:text-xl">{item.price} ₺</span>
          <span className="text-xs text-gray-500 font-medium">{priceUnit}</span>
        </div>
        
        {item.categoryId === CategoryId.IFTAR_MENULERI && (
          <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 text-amber-800 text-[10px] md:text-xs px-2 py-1 rounded-full font-bold shadow-sm">
            <Users size={12} className="text-amber-600" />
            <span className="whitespace-nowrap">10+ Kişi</span>
          </div>
        )}
      </div>
    </div>
  );
};