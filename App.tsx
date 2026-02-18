import React from 'react';
import { CATEGORIES, MENU_ITEMS, DAILY_MENUS } from './constants';
import { CategoryId } from './types';
import { Header } from './components/Header';
import { MenuItemCard } from './components/MenuItemCard';
import { Calendar, ChefHat, Utensils, Users } from 'lucide-react';

const App: React.FC = () => {
  // Get current date in DD.MM.YYYY format
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const year = today.getFullYear();
  const todayFormatted = `${day}.${month}.${year}`;
  
  const dailyMenu = DAILY_MENUS.find(m => m.date === todayFormatted);
  const currentDayName = today.toLocaleDateString('tr-TR', { weekday: 'long' });

  return (
    <div className="min-h-screen bg-[#fdfbf7] pb-10">
      <Header />
      
      <main className="max-w-3xl mx-auto px-4 pt-4 md:pt-6 space-y-8 md:space-y-12">
        {CATEGORIES.map((cat) => {
          // Özel Durum: Günün Menüsü
          if (cat.id === CategoryId.GUNUN_MENUSU) {
            return (
              <section key={cat.id} id={`category-${cat.id}`} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div className="h-px bg-amber-200 flex-1 opacity-50"></div>
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-emerald-950 flex items-center gap-2 whitespace-nowrap">
                     {cat.name}
                  </h2>
                  <div className="h-px bg-amber-200 flex-1 opacity-50"></div>
                </div>

                <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-md border border-amber-100 relative overflow-hidden">
                   {/* Decorative background */}
                   <div className="absolute top-0 right-0 p-6 md:p-10 opacity-5">
                      <ChefHat size={100} className="md:w-[150px] md:h-[150px]" />
                   </div>

                   <div className="relative z-10">
                     <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-4 mb-4 md:mb-6 border-b border-gray-100 pb-3 md:pb-4">
                        <div>
                           <div className="flex items-center gap-2 text-emerald-800 font-semibold mb-1">
                              <Calendar size={18} className="md:w-5 md:h-5" />
                              <span className="text-base md:text-lg">{todayFormatted}</span>
                           </div>
                           <div className="text-gray-500 text-sm capitalize">
                             {dailyMenu ? dailyMenu.day : currentDayName}
                           </div>
                        </div>
                        <div className="bg-emerald-50 px-3 md:px-4 py-2 rounded-full text-emerald-900 font-bold text-sm self-start md:self-auto flex items-center gap-2">
                           <span className="text-base">300 ₺ <span className="text-xs font-normal opacity-70">/ Kişi Başı</span></span>
                        </div>
                     </div>

                     {dailyMenu ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-y-6 gap-x-8">
                           {[
                             { label: 'Çorba', value: dailyMenu.soup },
                             { label: 'Ana Yemek', value: dailyMenu.main },
                             { label: 'Yardımcı Yemek', value: dailyMenu.side },
                             { label: 'Salata / İçecek', value: dailyMenu.salad }
                           ].map((item, idx) => (
                             <div key={idx} className="flex items-start gap-3">
                                <div className="bg-amber-100 p-1.5 md:p-2 rounded-full text-amber-700 shrink-0 mt-0.5">
                                   <Utensils size={14} className="md:w-[18px] md:h-[18px]" />
                                </div>
                                <div>
                                   <span className="block text-[10px] md:text-xs text-gray-400 uppercase tracking-wider font-bold">{item.label}</span>
                                   <span className="text-base md:text-lg text-gray-800 font-serif font-medium">{item.value}</span>
                                </div>
                             </div>
                           ))}
                        </div>
                     ) : (
                        <div className="text-center py-8 text-gray-500">
                           <p>Bugün ({todayFormatted}) için belirlenmiş bir menü bulunamadı.</p>
                           <p className="text-xs mt-2 text-gray-400">Menüler ileri tarihler için planlanmış olabilir.</p>
                        </div>
                     )}
                   </div>
                </div>
              </section>
            );
          }

          // Diğer Kategoriler
          const items = MENU_ITEMS
            .filter(item => item.categoryId === cat.id)
            .sort((a, b) => a.name.localeCompare(b.name, 'tr-TR'));

          if (items.length === 0) return null;

          // Tatlılar ve Pastalar için açıklamaları gizle ve 2'li grid kullan
          const isDessertOrPastry = cat.id === CategoryId.TATLILAR || cat.id === CategoryId.PASTALAR;
          
          return (
            <section key={cat.id} id={`category-${cat.id}`} className="scroll-mt-24">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="h-px bg-amber-200 flex-1 opacity-50"></div>
                <h2 className="font-serif text-xl md:text-2xl font-bold text-emerald-950 flex items-center gap-2 whitespace-nowrap">
                   {cat.name}
                </h2>
                <div className="h-px bg-amber-200 flex-1 opacity-50"></div>
              </div>

              {/* İftar Menüleri için 10 Kişi Uyarısı */}
              {cat.id === CategoryId.IFTAR_MENULERI && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 md:p-4 mb-4 flex items-start md:items-center gap-3 shadow-sm">
                  <Users className="text-amber-600 shrink-0 mt-0.5 md:mt-0" size={20} />
                  <p className="text-amber-800 text-sm md:text-base font-medium">
                    Bu menüler yalnızca 10 kişi ve üzeri gruplar için servis edilmektedir.
                  </p>
                </div>
              )}
              
              <div className={`grid gap-3 md:gap-4 ${isDessertOrPastry ? 'grid-cols-2' : 'grid-cols-1 md:grid-cols-2'}`}>
                {items.map(item => (
                  <MenuItemCard 
                    key={item.id} 
                    item={item} 
                    hideDescription={isDessertOrPastry} 
                  />
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
};

export default App;