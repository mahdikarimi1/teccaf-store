import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { pathname, search, hash } = useLocation();

    useEffect(() => {
        // اگر هش وجود داشت (مثل #section)، به آن اسکرول نکن
        if (!hash) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }, [pathname, search, hash]); // هر بار مسیر تغییر کرد اجرا بشه

    return null;//چون چیزی برنمیگردونه فقط رفرش
}

export default ScrollToTop;