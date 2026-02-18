import React from 'react';
import { Category, CategoryId } from '../types';

interface CategoryNavProps {
  categories: Category[];
  activeCategoryId: CategoryId;
  onSelectCategory: (id: CategoryId) => void;
}

export const CategoryNav: React.FC<CategoryNavProps> = ({ categories, activeCategoryId, onSelectCategory }) => {
  return (
    <div className="sticky top-0 z-40 bg-[#fdfbf7]/95 backdrop-blur-sm py-4 shadow-sm border-b border-amber-100">
      <div className="flex overflow-x-auto px-4 gap-3 scrollbar-hide snap-x">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`
              flex items-center gap-2 px-5 py-2.5 rounded-full whitespace-nowrap transition-all duration-300 snap-center
              ${activeCategoryId === cat.id 
                ? 'bg-emerald-900 text-amber-400 shadow-md transform scale-105 font-medium' 
                : 'bg-white text-gray-600 border border-gray-100 hover:border-emerald-200'}
            `}
          >
            <span className="text-lg">{cat.icon === 'kebap' ? '🍖' : cat.icon}</span>
            <span className={activeCategoryId === cat.id ? 'font-sans' : 'font-sans'}>{cat.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};