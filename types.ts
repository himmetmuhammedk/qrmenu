export enum CategoryId {
  GUNUN_MENUSU = 'gunun_menusu',
  ALAKART = 'alakart',
  IFTAR_MENULERI = 'iftar_menuleri',
  TATLILAR = 'tatlilar',
  PASTALAR = 'pastalar',
}

export interface MenuItem {
  id: string;
  categoryId: CategoryId;
  name: string;
  description: string;
  price: number;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  // calories removed
}

export interface Category {
  id: CategoryId;
  name: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface DailyMenu {
  date: string;
  day: string;
  soup: string;
  main: string;
  side: string;
  salad: string;
}