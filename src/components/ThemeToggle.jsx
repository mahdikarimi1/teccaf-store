import { useTheme } from '../context/ThemeContext'

function ThemeToggle() {
    const { theme, toggleTheme, isDark } = useTheme()

    return (
        <button
            onClick={toggleTheme}
            className={`w-12 h-6 rounded-full {isDark ? 'dark:bg-gray-700' : 'bg-gray-200} transition-colors duration-300 focus:outline-none`}
            aria-label='تغییر تم'
        >
            <div className='
               rounded-full w-12 h-6  transition-transform duration-300 flex items-center justify-center
                '>

                {isDark ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 18v-1M4.21 4.21l1.42 1.42m12.56 12.56-1.42 1.42M4 12H3m18 0h-1M4.21 19.79l1.42-1.42M19.79 4.21l-1.42 1.42M12 7a5 5 0 100 10 5 5 0 000-10z"></path>
                </svg>

                    : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 12.5a9 9 0 11-8.314-7.883A9 9 0 0017.05 12.5h.001z"></path>
                    </svg>

                }


            </div>
        </button>
    )
}

export default ThemeToggle;
