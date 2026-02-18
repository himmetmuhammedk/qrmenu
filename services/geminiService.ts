import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS, CATEGORIES, DAILY_MENUS } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Get current date for context
const today = new Date();
const day = String(today.getDate()).padStart(2, '0');
const month = String(today.getMonth() + 1).padStart(2, '0');
const year = today.getFullYear();
const todayFormatted = `${day}.${month}.${year}`;

const dailyMenu = DAILY_MENUS.find(m => m.date === todayFormatted);

// Construct a context string from the menu data
const menuContext = `
Restoran Menüsü:

Kategori: Günün Menüsü (${todayFormatted})
${dailyMenu ? 
  `- Çorba: ${dailyMenu.soup}\n- Ana Yemek: ${dailyMenu.main}\n- Yan: ${dailyMenu.side}\n- Salata: ${dailyMenu.salad}` 
  : 'Bugün için özel menü yok. (Not: Menü verileri 2026 yılına ait olabilir, lütfen tarihi kontrol et.)'}

${CATEGORIES.filter(c => c.id !== 'gunun_menusu').map(cat => {
  const items = MENU_ITEMS.filter(item => item.categoryId === cat.id);
  return `\nKategori: ${cat.name}\n${items.map(item => 
    `- ${item.name} (${item.price} TL): ${item.description} [${item.isSpicy ? 'Acılı' : ''} ${item.isVegetarian ? 'Vejetaryen' : ''}]`
  ).join('\n')}`;
}).join('\n')}
`;

const systemInstruction = `
Sen "Uluırmak Uygulama Oteli" adlı bir Türk restoranının yardımsever ve nazik yapay zeka garsonusun. 
Ramazan ayındayız, bu yüzden üslubun saygılı, sıcak ve Ramazan ruhuna uygun olmalı.
Bugünün tarihi: ${todayFormatted}.
Kullanıcının sorularına sadece yukarıdaki menüdeki yemekleri kullanarak cevap ver.
Eğer kullanıcı "Günün Menüsü"nü sorarsa, yukarıdaki günün menüsü kısmındaki yemekleri say. Eğer bugün için menü yoksa, nazikçe bugün özel menü olmadığını belirt.
Menüde olmayan bir şey istenirse nazikçe menüde bulunmadığını belirt ve benzer bir alternatif öner.
Cevapların kısa, öz ve iştah açıcı olsun. Fiyat bilgisi vermekten çekinme.
Özellikle iftar için kombinasyonlar (örneğin: Çorba + Ana Yemek + Tatlı) öner.
`;

export const sendMessageToGemini = async (userMessage: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: menuContext + systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "Üzgünüm, şu an cevap veremiyorum.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Bağlantıda bir sorun oluştu, lütfen tekrar deneyin.";
  }
};