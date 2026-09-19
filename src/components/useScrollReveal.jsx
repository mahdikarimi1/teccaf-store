
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const useScrollReveal = (selector, options = {}) => {
    useEffect(() => {
        // تنظیمات پیش‌فرض
        const defaultConfig = {
            duration: 600,        // مدت زمان انیمیشن (میلی‌ثانیه)
            delay: 0,             // تأخیر قبل از شروع (بهتره صفر باشه، فاصله با interval تنظیم بشه)
            distance: '30px',     // فاصله حرکت (از کجا بیاد)
            origin: 'bottom',     // جهت حرکت (bottom, top, left, right)
            opacity: 0,           // از چه مقدار شفافیتی شروع بشه
            reset: false,         // وقتی از دید خارج شد دوباره اجرا بشه؟ (معمولاً false)
            easing: 'ease-out',   // نوع نرم‌افزاری انیمیشن
            interval: 100,        // فاصله زمانی بین هر المان (میلی‌ثانیه)
            mobile: true,         // در موبایل هم اجرا بشه     // چند درصد از المان دیده بشه تا اجرا شود (0.2 = 20%)
        };

        // ترکیب تنظیمات پیش‌فرض با تنظیمات سفارشی
        const config = { ...defaultConfig, ...options };

        const sr = ScrollReveal();

        // اجرای انیمیشن روی المنت‌های مورد نظر
        sr.reveal(selector, config);

        // تمیزکاری
        return () => {
            if (sr && sr.destroy) {
                sr.destroy();
            }
        };
    }, [selector, options]);
};

export default useScrollReveal;