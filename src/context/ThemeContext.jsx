// src/context/ThemeContext.jsx
import { createContext, useState, useContext, useEffect } from 'react'

const ThemeContext = createContext()//محیط مشترک برای داده‌ها بین کامپوننت‌ها یا یک دفتر


export function ThemeProvider({ children }) {
    // این تابع مشخص میکند که تم اولیه چی بشاد که با تم ویندوز هماهنگ میشه
    const getInitialTheme = () => {
        const savedTheme = localStorage.getItem('theme')
        if (savedTheme) {
            return savedTheme//اگر در لوکال استوریج چیزی هست همونو برگردون
        }
        // بررسی تم سیستم عامل کاربر
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark'
        }
        return 'light'
    }

    const [theme, setTheme] = useState(getInitialTheme)

    // تغییر تم
    const toggleTheme = () => {
        setTheme(prevTheme => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light'
            localStorage.setItem('theme', newTheme)
            return newTheme
            // مقدار جدید برمی‌گردد و در state می‌نشیند.
        })
    }

    // اعمال تم به المان html
    useEffect(() => {
        const root = document.documentElement
        if (theme === 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
    }, [theme])

    const value = {
        theme,
        toggleTheme,
        isDark: theme === 'dark'
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    const context = useContext(ThemeContext)
    return context
}
