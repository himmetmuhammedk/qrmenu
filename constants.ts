import { Category, CategoryId, MenuItem, DailyMenu } from './types.ts';

export const CATEGORIES: Category[] = [
  { id: CategoryId.GUNUN_MENUSU, name: "Günün Menüsü", icon: "📅" },
  { id: CategoryId.ALAKART, name: "Alakart Menüler", icon: "🍽️" },
  { id: CategoryId.IFTAR_MENULERI, name: "İftar Menüleri", icon: "🌙" },
  { id: CategoryId.TATLILAR, name: "Tatlılar", icon: "🍮" },
  { id: CategoryId.PASTALAR, name: "Pastalar", icon: "🍰" },
];

export const DAILY_MENUS: DailyMenu[] = [
  // 1. Hafta (Kısmi)
  { date: '19.02.2026', day: 'Perşembe', soup: 'Mantar Çorbası', main: 'Uluırmak Kebabı', side: 'Pirinç Pilavı', salad: 'Salata' },
  { date: '20.02.2026', day: 'Cuma', soup: 'Mercimek Çorbası', main: 'Tas Kebabı', side: 'Bulgur Pilavı', salad: 'Salata' },
  { date: '21.02.2026', day: 'Cumartesi', soup: 'Domates Çorbası', main: 'İzmir Köfte', side: 'Pirinç Pilavı', salad: 'Cacık' },
  { date: '22.02.2026', day: 'Pazar', soup: 'Ezogelin Çorbası', main: 'Çiftlik Kebabı', side: 'Pirinç Pilavı', salad: 'Salata' },

  // 2. Hafta
  { date: '23.02.2026', day: 'Pazartesi', soup: 'Şehriye Çorbası', main: 'Rosto Köfte', side: 'Pirinç Pilavı', salad: 'Salata' },
  { date: '24.02.2026', day: 'Salı', soup: 'Mercimek Çorbası', main: 'Saksı Kebabı', side: 'Bulgur Pilavı', salad: 'Salata' },
  { date: '25.02.2026', day: 'Çarşamba', soup: 'Mantar Çorbası', main: 'Patlıcan Musakka', side: 'Pirinç Pilavı', salad: 'Cacık' },
  { date: '26.02.2026', day: 'Perşembe', soup: 'Domates Çorbası', main: 'Et Sote', side: 'Pirinç Pilavı', salad: 'Salata' },
  { date: '27.02.2026', day: 'Cuma', soup: 'Ezogelin Çorbası', main: 'Sebzeli Köfte', side: 'Bulgur Pilavı', salad: 'Salata' },
  { date: '28.02.2026', day: 'Cumartesi', soup: 'Şehriye Çorbası', main: 'Orman Kebabı', side: 'Bulgur Pilavı', salad: 'Salata' },
  { date: '01.03.2026', day: 'Pazar', soup: 'Mantar Çorbası', main: 'Karnıyarık', side: 'Pirinç Pilavı', salad: 'Cacık' },

  // 3. Hafta
  { date: '02.03.2026', day: 'Pazartesi', soup: 'Mercimek Çorbası', main: 'Uluırmak Kebabı', side: 'Pirinç Pilavı', salad: 'Salata' },
  { date: '03.03.2026', day: 'Salı', soup: 'Ezogelin Çorbası', main: 'Tas Kebabı', side: 'Bulgur Pilavı', salad: 'Salata' },
  { date: '04.03.2026', day: 'Çarşamba', soup: 'Domates Çorbası', main: 'İzmir Köfte', side: 'Pirinç Pilavı', salad: 'Cacık' },
  { date: '05.03.2026', day: 'Perşembe', soup: 'Şehriye Çorbası', main: 'Çiftlik Kebabı', side: 'Pirinç Pilavı', salad: 'Salata' },
  { date: '06.03.2026', day: 'Cuma', soup: 'Y.Yoğurt Çorbası', main: 'Rosto Köfte', side: 'Bulgur Pilavı', salad: 'Salata' },
  { date: '07.03.2026', day: 'Cumartesi', soup: 'Şehriye Çorbası', main: 'Saksı Kebabı', side: 'Pirinç Pilavı', salad: 'Salata' },
  { date: '08.03.2026', day: 'Pazar', soup: 'Mantar Çorbası', main: 'Patlıcan Musakka', side: 'Pirinç Pilavı', salad: 'Cacık' },

  // 4. Hafta
  { date: '09.03.2026', day: 'Pazartesi', soup: 'Mercimek Çorbası', main: 'Et Sote', side: 'Pirinç Pilavı', salad: 'Salata' },
  { date: '10.03.2026', day: 'Salı', soup: 'Ezogelin Çorbası', main: 'Sebzeli Köfte', side: 'Bulgur Pilavı', salad: 'Salata' },
  { date: '11.03.2026', day: 'Çarşamba', soup: 'Şehriye Çorbası', main: 'Orman Kebabı', side: 'Bulgur Pilavı', salad: 'Salata' },
  { date: '12.03.2026', day: 'Perşembe', soup: 'Mantar Çorbası', main: 'Karnıyarık', side: 'Pirinç Pilavı', salad: 'Cacık' },
  { date: '13.03.2026', day: 'Cuma', soup: 'Mercimek Çorbası', main: 'Uluırmak Kebabı', side: 'Pirinç Pilavı', salad: 'Salata' },
  { date: '14.03.2026', day: 'Cumartesi', soup: 'Ezogelin Çorbası', main: 'Tas Kebabı', side: 'Bulgur Pilavı', salad: 'Salata' },
  { date: '15.03.2026', day: 'Pazar', soup: 'Domates Çorbası', main: 'İzmir Köfte', side: 'Pirinç Pilavı', salad: 'Cacık' },

  // 5. Hafta
  { date: '16.03.2026', day: 'Pazartesi', soup: 'Şehriye Çorbası', main: 'Çiftlik Kebabı', side: 'Pirinç Pilavı', salad: 'Salata' },
  { date: '17.03.2026', day: 'Salı', soup: 'Ezogelin Çorbası', main: 'Rosto Köfte', side: 'Bulgur Pilavı', salad: 'Salata' },
  { date: '18.03.2026', day: 'Çarşamba', soup: 'Mercimek Çorbası', main: 'Saksı Kebabı', side: 'Bulgur Pilavı', salad: 'Salata' },
  { date: '19.03.2026', day: 'Perşembe', soup: 'Mantar Çorbası', main: 'Uluırmak Kebabı', side: 'Pirinç Pilavı', salad: 'Salata' },
];

export const MENU_ITEMS: MenuItem[] = [
  // İFTAR MENÜLERİ
  {
    id: 'i1',
    categoryId: CategoryId.IFTAR_MENULERI,
    name: 'İftar Et Sote',
    description: 'İftar Tabağı, Mercimek Çorbası, Et Sote, Pirinç Pilavı, Salata, Tatlı, Soğuk İçecek, Çay',
    price: 750,
  },
  {
    id: 'i2',
    categoryId: CategoryId.IFTAR_MENULERI,
    name: 'İftar Piliç Sarma',
    description: 'İftar Tabağı, Mercimek Çorbası, Piliç Sarma, Pirinç Pilavı, Salata, Tatlı, Soğuk İçecek, Çay',
    price: 550,
  },
  {
    id: 'i3',
    categoryId: CategoryId.IFTAR_MENULERI,
    name: 'İftar Rosto Köfte',
    description: 'İftar Tabağı, Mercimek Çorbası, Rosto Köfte, Patates Püresi, Salata, Tatlı, Soğuk İçecek, Çay',
    price: 700,
  },
  {
    id: 'i4',
    categoryId: CategoryId.IFTAR_MENULERI,
    name: 'İftar Tavuk Sote',
    description: 'İftar Tabağı, Mercimek Çorbası, Tavuk Sote, Pirinç Pilavı, Salata, Tatlı, Soğuk İçecek, Çay',
    price: 500,
  },
  {
    id: 'i5',
    categoryId: CategoryId.IFTAR_MENULERI,
    name: 'İftar Uluırmak Kebabı',
    description: 'İftar Tabağı, Mercimek Çorbası, Uluırmak Kebabı, Pirinç Pilavı, Salata, Tatlı, Soğuk İçecek, Çay',
    price: 650,
  },
  {
    id: 'i6',
    categoryId: CategoryId.IFTAR_MENULERI,
    name: 'İftar Uluırmak Köfte',
    description: 'İftar Tabağı, Mercimek Çorbası, Uluırmak Köfte, Pirinç Pilavı, Salata, Tatlı, Soğuk İçecek, Çay',
    price: 700,
  },

  // ALAKART MENÜLER
  {
    id: 'a1',
    categoryId: CategoryId.ALAKART,
    name: 'Tavuk Sote',
    description: 'Haydari, Gelveri Sos, Turşu, Günün Çorbası, Tavuk Sote, Günün Pilavı, Yeşil Salata, Kaşık Salata',
    price: 350,
  },
  {
    id: 'a2',
    categoryId: CategoryId.ALAKART,
    name: 'Tavuk Şiş',
    description: 'Haydari, Gelveri Sos, Turşu, Günün Çorbası, Tavuk Şiş, Günün Pilavı, Yeşil Salata, Kaşık Salata',
    price: 350,
  },
  {
    id: 'a3',
    categoryId: CategoryId.ALAKART,
    name: 'Tavuk Bonfile',
    description: 'Haydari, Gelveri Sos, Turşu, Günün Çorbası, Tavuk Bonfile, Günün Pilavı, Yeşil Salata, Kaşık Salata',
    price: 350,
  },
  {
    id: 'a4',
    categoryId: CategoryId.ALAKART,
    name: 'Mantar Sote',
    description: 'Haydari, Gelveri Sos, Turşu, Günün Çorbası, Mantar Sote, Günün Pilavı, Yeşil Salata, Kaşık Salata',
    price: 400,
    isVegetarian: true,
  },
  {
    id: 'a5',
    categoryId: CategoryId.ALAKART,
    name: 'Et Sote',
    description: 'Haydari, Gelveri Sos, Turşu, Günün Çorbası, Et Sote, Günün Pilavı, Yeşil Salata, Kaşık Salata',
    price: 450,
  },
  {
    id: 'a6',
    categoryId: CategoryId.ALAKART,
    name: 'Sac Kavurma',
    description: 'Haydari, Gelveri Sos, Turşu, Günün Çorbası, Sac Kavurma, Günün Pilavı, Yeşil Salata, Kaşık Salata',
    price: 600,
  },
  {
    id: 'a7',
    categoryId: CategoryId.ALAKART,
    name: 'Karışık Sote',
    description: 'Haydari, Gelveri Sos, Turşu, Günün Çorbası, Karışık Sote, Günün Pilavı, Yeşil Salata, Kaşık Salata',
    price: 450,
  },
  {
    id: 'a8',
    categoryId: CategoryId.ALAKART,
    name: 'Karışık Izgara',
    description: 'Haydari, Gelveri Sos, Turşu, Günün Çorbası, Karışık Izgara, Günün Pilavı, Yeşil Salata, Kaşık Salata',
    price: 600,
  },
  {
    id: 'a9',
    categoryId: CategoryId.ALAKART,
    name: 'Izgara Köfte',
    description: 'Haydari, Gelveri Sos, Turşu, Günün Çorbası, Izgara Köfte, Günün Pilavı, Yeşil Salata, Kaşık Salata',
    price: 400,
  },
  {
    id: 'a10',
    categoryId: CategoryId.ALAKART,
    name: 'Kılıçarslan Çökertmesi',
    description: 'Haydari, Gelveri Sos, Turşu, Günün Çorbası, Kılıçarslan Çökertmesi, Günün Pilavı, Yeşil Salata, Kaşık Salata',
    price: 450,
  },

  // TATLILAR
  { id: 't1', categoryId: CategoryId.TATLILAR, name: 'Helvadere', description: 'Özel sunumlu helva tatlısı.', price: 100 },
  { id: 't2', categoryId: CategoryId.TATLILAR, name: 'Sütlaç', description: 'Fırınlanmış sütlaç.', price: 90 },
  { id: 't3', categoryId: CategoryId.TATLILAR, name: 'Hasandağı Zirvesi', description: 'Özel spesiyal tatlı.', price: 190 },
  { id: 't4', categoryId: CategoryId.TATLILAR, name: 'Trileçe', description: 'Karamel soslu sütlü tatlı.', price: 90 },
  { id: 't5', categoryId: CategoryId.TATLILAR, name: 'Revani', description: 'Şerbetli irmik tatlısı.', price: 90 },
  { id: 't6', categoryId: CategoryId.TATLILAR, name: 'Güz Güneşi', description: 'Mevsim meyveleri ile hafif tatlı.', price: 90 },
  { id: 't7', categoryId: CategoryId.TATLILAR, name: 'Güllaç', description: 'Ramazan klasiği, cevizli ve sütlü.', price: 90 },
  { id: 't8', categoryId: CategoryId.TATLILAR, name: 'Kalburabastı', description: 'Cevizli şerbetli tatlı.', price: 90 },
  { id: 't9', categoryId: CategoryId.TATLILAR, name: 'Profiterol', description: 'Çikolata soslu klasik lezzet.', price: 140 },
  { id: 't10', categoryId: CategoryId.TATLILAR, name: 'İncim', description: 'Hafif sütlü tatlı.', price: 140 },
  { id: 't11', categoryId: CategoryId.TATLILAR, name: 'Lattem', description: 'Kahve aromalı tatlı.', price: 100 },
  { id: 't12', categoryId: CategoryId.TATLILAR, name: 'İncelek', description: 'Geleneksel lezzet.', price: 90 },
  { id: 't13', categoryId: CategoryId.TATLILAR, name: 'Kadayıf Burma', description: 'Fıstıklı burma kadayıf.', price: 175 },
  { id: 't14', categoryId: CategoryId.TATLILAR, name: 'Magnolya', description: 'Muzlu ve çilekli seçenekleriyle.', price: 90 },

  // PASTALAR
  { id: 'p1', categoryId: CategoryId.PASTALAR, name: 'Rulo Pasta', description: 'Meyveli rulo pasta.', price: 110 },
  { id: 'p2', categoryId: CategoryId.PASTALAR, name: 'Mozaik Pasta', description: 'Klasik bisküvili mozaik pasta.', price: 90 },
  { id: 'p3', categoryId: CategoryId.PASTALAR, name: 'Balbadem', description: 'Bal ve bademli özel pasta.', price: 175 },
  { id: 'p4', categoryId: CategoryId.PASTALAR, name: 'Sultanhanı', description: 'Fıstıklı özel yapım pasta.', price: 175 },
  { id: 'p5', categoryId: CategoryId.PASTALAR, name: 'Ekler', description: 'Çikolatalı ve kremalı ekler (Adet).', price: 30 },
  { id: 'p6', categoryId: CategoryId.PASTALAR, name: 'Eğri Minare', description: 'Şekilli özel tasarım pasta.', price: 200 },
  { id: 'p7', categoryId: CategoryId.PASTALAR, name: 'Aşıklı Höyük', description: 'Katmanlı özel pasta.', price: 190 },
  { id: 'p8', categoryId: CategoryId.PASTALAR, name: 'Ekecik', description: 'Çikolata ve meyve uyumu.', price: 200 },
  { id: 'p9', categoryId: CategoryId.PASTALAR, name: 'Profesör Pasta', description: 'Yoğun çikolatalı pasta.', price: 120 },
  { id: 'p10', categoryId: CategoryId.PASTALAR, name: 'Sarıkaraman', description: 'Limonlu ve meyveli pasta.', price: 250 },
  { id: 'p11', categoryId: CategoryId.PASTALAR, name: 'Topakkaya', description: 'Karamelli pasta.', price: 80 },
  { id: 'p12', categoryId: CategoryId.PASTALAR, name: 'Belisırma', description: 'Fındıklı pasta.', price: 100 },
];