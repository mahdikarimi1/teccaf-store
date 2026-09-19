import console1 from "../assets/console1.webp";
import console2 from "../assets/console2.webp";
import console3 from "../assets/console3.webp";
import ps5Controller from "../assets/ps5-controller.jpg";
import ps5Bag from "../assets/ps5-bag.jpg";
import ps5Stand1 from "../assets/ps5-stand1.jpg";
import ps5Skin1 from "../assets/ps5-skin1.webp";
import ps5Account1 from "../assets/ps5-accuont1.jpg";
import ps4BlueRayDisk from "../assets/ps4-blue-ray-disk.webp";
import figor from "../assets/figor.webp";
import installGame1 from "../assets/install-game1.webp";
import cd1 from "../assets/cd1.webp";
import cd2 from "../assets/cd2.webp";
import coverRangi from "../assets/cover-rangi.jpg";
import cd3 from "../assets/cd3.webp";
import cd4 from "../assets/cd4.webp";
import standPs4 from "../assets/stand-ps4.jpeg";
import cd5 from "../assets/cd5.webp";
import cd6 from "../assets/cd6.webp";
import gameing1 from "../assets/gameing1.webp";
import gameing2 from "../assets/gameing2.webp";

export const categories = [
  { id: 1, name: "پلی‌استیشن ۵", icon: "🎮" },
  { id: 2, name: "پلی‌استیشن ۴", icon: "🎮" },
  { id: 3, name: "سی‌دی بازی", icon: "💿" },
  { id: 4, name: "نصب بازی", icon: "🛠️" },
  { id: 5, name: "کیف", icon: "🎒" },
  { id: 6, name: "پایه و شارژر", icon: "🔌" },
  { id: 7, name: "اسکین و کاور", icon: "🎨" },
  { id: 8, name: "دسته بازی", icon: "🕹️" },
  { id: 9, name: "اکانتی", icon: "👤" },
  { id: 10, name: "کپی‌خور", icon: "🔓" },
  { id: 11, name: "اکشن فیگور", icon: "🧸" },
  { id: 12, name: "تجهیزات گیمینگ", icon: "🖱️" },
];
export const products = [
  {
    id: 1,
    ProductName: "PlayStation 5",
    category: "پلی‌استیشن ۵",
    description:
      "کنسول بازی نسل نهم سونی با پشتیبانی از رزولوشن ۸K، سرعت فوق‌العاده SSD و کنترلر DualSense پیشرفته",
    price: 120000000,
    oldPrice: 128000000,
    image: console1,
    isSpecial: true,
    isNew: false,
    rating: 4.7,
  },
  {
    id: 2,
    ProductName: "PlayStation 5 Digital",
    category: "پلی‌استیشن ۵",
    description:
      "نسخه دیجیتال PS5 بدون درایو دیسک، با طراحی مدرن و کتابخانه عظیم بازی‌های انحصاری سونی",
    price: 110000000,
    oldPrice: 115000000,
    image: console2,
    isSpecial: false,
    isNew: true,
    rating: 4.6,
  },
  {
    id: 3,
    ProductName: "PlayStation 4 slim 1T",
    category: "پلی‌استیشن ۴",
    description: "پی اس فور اسلیم یک ترابایت ۲۰۱۶ اروپا ",
    price: 49000000,
    oldPrice: null,
    image: console3,
    isSpecial: false,
    isNew: false,
    rating: 4.6,
  },
  {
    id: 4,
    ProductName: "نصب بازی PS4 و PS5",
    category: "نصب بازی",
    description: "نصب و آماده‌سازی بازی‌های پلی‌استیشن ۴ و ۵",
    price: 250000,
    oldPrice: 250000,
    image: installGame1,
    isSpecial: false,
    isNew: false,
    rating: 4.8,
  },

  {
    id: 5,
    ProductName: "Assassins Creed Unity",
    category: "سی‌دی بازی",
    description:
      "بازی محبوب Assassins Creed Unity برای پلی استیشن و ایکس باکس، با گرافیک فوق‌العاده و داستان جذاب",
    price: 1500000,
    oldPrice: 2500000,
    image: cd1,
    isSpecial: true,
    isNew: false,
    rating: 4.3,
  },
  {
    id: 6,
    ProductName: "پایه PS4",
    category: "پایه و شارژر",
    description: "پایه مناسب برای قرارگیری و نگهداری کنسول پلی‌استیشن ۴",
    price: 499000,
    oldPrice: 699000,
    image: standPs4,
    isSpecial: false,
    isNew: true,
    rating: 4.6,
  },
  {
    id: 7,
    ProductName: "Control",
    category: "سی‌دی بازی",
    description:
      "بازی برنده جوایز Control، تجربه‌ای منحصر‌به‌فرد از دنیای رمزآلود و قدرت‌های ماورایی",
    price: 1200000,
    oldPrice: 1800000,
    image: cd2,
    isSpecial: false,
    isNew: false,
    rating: 4.6,
  },
  {
    id: 8,
    ProductName: "اکشن فیگور گیمینگ",
    category: "اکشن فیگور",
    description: "اکشن فیگور مناسب برای دکور اتاق گیمینگ و علاقه‌مندان به بازی",
    price: 2800000,
    oldPrice: 3970000,
    image: figor,
    isSpecial: false,
    isNew: true,
    rating: 4.6,
  },
  {
    id: 9,
    ProductName: "Assassins Creed Revelations",
    category: "سی‌دی بازی",
    description:
      "نسخه کلاسیک Assassins Creed Revelations، پایان حماسه Ezio با داستانی به یادماندنی",
    price: 1000000,
    oldPrice: 1500000,
    image: cd3,
    isSpecial: false,
    isNew: true,
    rating: 4.4,
  },
  {
    id: 10,
    ProductName: "کپی‌خور PS4",
    category: "کپی‌خور",
    description: "سرویس کپی‌خور و اجرای بازی‌های پلی‌استیشن ۴",
    price: 800000,
    oldPrice: 1200000,
    image: ps4BlueRayDisk,
    isSpecial: false,
    isNew: true,
    rating: 4.5,
  },
  {
    id: 11,
    ProductName: "کاور دسته ضد لغزش",
    category: "اسکین و کاور",
    description:
      "کاور رنگی ضد لغزش برای دسته بازی، مناسب برای کنترل بهتر و محافظت از دسته در برابر خط و خش",
    price: 450000,
    oldPrice: 600000,
    image: coverRangi,
    isSpecial: true,
    isNew: true,
    rating: 4.7,
  },
  {
    id: 12,
    ProductName: "Resident Evil Biohazard",
    category: "سی‌دی بازی",
    description:
      "بازی ترسناک و محبوب Resident Evil Biohazard، بازگشت به ریشه‌های وحشت",
    price: 1800000,
    oldPrice: 2800000,
    image: cd4,
    isSpecial: true,
    isNew: false,
    rating: 4.8,
  },
  {
    id: 13,
    ProductName: "Resident Evil 2 Remake",
    category: "سی دی بازی ",
    description:
      "نسخه بازسازی شده Resident Evil 2 با گرافیک نسل جدید و گیم‌پلی هیجان‌انگیز",
    price: 1900000,
    oldPrice: 2900000,
    image: cd5,
    isSpecial: true,
    isNew: true,
    rating: 4.9,
  },

  {
    id: 14,
    ProductName: "Call Of Duty MW3",
    category: "سی‌دی بازی",
    description:
      "نسخه بازسازی شده call of duty با گرافیک نسل جدید و گیم‌پلی هیجان‌انگیز",
    price: 1300000,
    oldPrice: 2400000,
    image: cd6,
    isSpecial: true,
    isNew: true,
    rating: 4.9,
  },

  {
    id: 15,
    ProductName: "Logitech G502 Hero",
    category: "تجهیزات گیمینگ",
    description:
      "ماوس گیمینگ حرفه‌ای لاجیتک با سنسور ۲۵K DPI و ۱۱ دکمه قابل برنامه‌ریزی",
    price: 3500000,
    oldPrice: 4500000,
    image: gameing1,
    isSpecial: true,
    isNew: false,
    rating: 4.8,
  },
  {
    id: 16,
    ProductName: "کیف حمل پلی‌استیشن ۵",
    category: "کیف",
    description: "کیف مناسب حمل و نگهداری کنسول پلی‌استیشن ۵ و لوازم جانبی",
    price: 2900000,
    oldPrice: 2900000,
    image: ps5Bag,
    isSpecial: false,
    isNew: false,
    rating: 3.9,
  },
  {
    id: 17,
    ProductName: "اکانت بازی PS5",
    category: "اکانتی",
    description: "اکانت بازی پلی‌استیشن ۵ مناسب استفاده روی کنسول PS5",
    price: 15500000,
    oldPrice: 17000000,
    image: ps5Account1,
    isSpecial: false,
    isNew: true,
    rating: 4.6,
  },
  {
    id: 18,
    ProductName: "دسته بازی PS5",
    category: "دسته بازی",
    description: "دسته بازی بی‌سیم DualSense مناسب کنسول پلی‌استیشن ۵",
    price: 12500000,
    oldPrice: 14000000,
    image: ps5Controller,
    isSpecial: false,
    isNew: true,
    rating: 4.8,
  },
  {
    id: 19,
    ProductName: "پایه PS5",
    category: "پایه و شارژر",
    description: "پایه مناسب برای قرارگیری و نگهداری کنسول پلی‌استیشن ۵",
    price: 4700000,
    oldPrice: 4700000,
    image: ps5Stand1,
    isSpecial: false,
    isNew: false,
    rating: 4.7,
  },
  {
    id: 20,
    ProductName: "اسکین PS5",
    category: "اسکین و کاور",
    description: "اسکین محافظ و زیبا برای کنسول پلی‌استیشن ۵",
    price: 490000,
    oldPrice: 780000,
    image: ps5Skin1,
    isSpecial: false,
    isNew: true,
    rating: 4.7,
  },
  {
    id: 21,
    ProductName: "Razer BlackWidow V4",
    category: "تجهیزات گیمینگ",
    description:
      "کیبورد مکانیکی مخصوص گیمینگ با سوئیچ‌های سبز ریزر و نورپردازی RGB",
    price: 5500000,
    oldPrice: 7000000,
    image: gameing2,
    isSpecial: true,
    isNew: true,
    rating: 4.9,
  },
];

