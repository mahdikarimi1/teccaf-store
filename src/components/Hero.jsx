import { Link } from "react-router-dom";
import useScrollReveal from "../components/useScrollReveal";

function Hero() {
  useScrollReveal(".stat-item");

  return (
    <section
      dir="rtl"
      className="bg-gradient-to-br from-gray-950 via-purple-950 to-indigo-950 text-white py-20 px-4"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* متن اصلی */}
          <div className="text-center md:text-right">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-400/20 rounded-full px-5 py-2 mb-6">
              <span className="text-xl">🎮</span>
              <span className="text-purple-200 text-sm">
                مرکز ورزش‌های الکترونیک تکاف
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 whitespace-nowrap">
              دنیای بازی
              <span className="text-purple-400"> از آنجا شروع نمی شود</span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-8 max-w-xl mx-auto md:mx-0 mb-8">
              کنسول و لوازم گیمینگ مورد نیازت را پیدا کن و تجربه‌ای حرفه‌ای‌تر
              از بازی داشته باش.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/shop"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:scale-105"
              >
                مشاهده فروشگاه 🛒
              </Link>

              <Link
                to="/about"
                className="border border-purple-400/50 hover:bg-purple-500/10 font-bold py-3 px-8 rounded-xl transition-all duration-300"
              >
                درباره تکاف
              </Link>
            </div>
          </div>

          {/* بخش تصویری */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-600/20 blur-3xl rounded-full"></div>

              <div className="relative bg-white/5 border border-white/10 backdrop-blur-sm rounded-3xl p-10 shadow-2xl">
                <div className="flex justify-center mb-6">
                  <img
                    src="/logoo.png"
                    alt="TECCAF Logo"
                    className="w-40 h-40 object-contain"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-black/30 rounded-xl p-4 text-center">
                    <div className="text-2xl">🖥️</div>
                    <span className="text-xs text-gray-300">سیستم گیمینگ</span>
                  </div>

                  <div className="bg-black/30 rounded-xl p-4 text-center">
                    <div className="text-2xl">🎧</div>
                    <span className="text-xs text-gray-300">تجهیزات</span>
                  </div>

                  <div className="bg-black/30 rounded-xl p-4 text-center">
                    <div className="text-2xl">🎮</div>
                    <span className="text-xs text-gray-300">کنسول</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* آمار */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-white/10 stat-item">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-purple-400">
              100%
            </div>
            <div className="text-gray-400 text-sm mt-1">تضمین کیفیت</div>
          </div>

          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-purple-400">
              24/7
            </div>
            <div className="text-gray-400 text-sm mt-1">پشتیبانی</div>
          </div>

          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-purple-400">
              +100
            </div>
            <div className="text-gray-400 text-sm mt-1">محصول گیمینگ</div>
          </div>

          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-purple-400">
              تکاف
            </div>
            <div className="text-gray-400 text-sm mt-1">انتخاب گیمرها</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
