import { useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from '../components/ThemeToggle'

function Navbar({ cartItemCount }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link to='/' className='flex items-center gap-2'>
                        <span className='text-3xl'>🎮</span>
                        <h1 className='text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent'>تکاف خواف</h1>
                    </Link>
                    <div className="hidden md:flex gap-8 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
                        <Link to='/' className='text-gray-700 hover:text-purple-600 font-medium transition-all'>خانه</Link>

                        <Link to='/shop' className='text-gray-700 hover:text-purple-600 font-medium transition-all'>فروشگاه</Link>

                        <Link to='/about' className='text-gray-700 hover:text-purple-600 font-medium transition-all'>درباره ما</Link>

                        <Link to='/blog' className='text-gray-700 hover:text-purple-600 font-medium transition-all'>مجله تکاف </Link>

                        <Link to='/contact' className='text-gray-700 hover:text-purple-600 font-medium transition-all'>تماس با ما</Link>
                    </div>


                    <div className="flex items-center gap-4">

                        <ThemeToggle />

                        <Link to='/cart' className='relative'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 hover:text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6M18 13l1.5 6M9 21h6M12 15v6" />
                            </svg>
                            {cartItemCount > 0 && (
                                <span className='absolute -top-2 -right-2  bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center'>{cartItemCount}</span>
                            )}
                        </Link>

                        {/* دکمه منو برای موبایل همبرگر*/}
                        <button className='md:hidden text-gray-700' onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* جزعیات منوی همبرگر*/}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pt-4 border-t border-gray-100">
                        <div className="flex flex-col gap-3">
                            <Link to='/' className='text-gray-700 hover:text-purple-600 font-medium transition-all'>خانه</Link>

                            <Link to='/shop' className='text-gray-700 hover:text-purple-600 font-medium transition-all'>فروشگاه</Link>

                            <Link to='/about' className='text-gray-700 hover:text-purple-600 font-medium transition-all'>درباره ما</Link>

                            <Link to='/blog' className='text-gray-700 hover:text-purple-600 font-medium transition-all'>مجله تکاف </Link>

                            <Link to='/contact' className='text-gray-700 hover:text-purple-600 font-medium transition-all'>تماس با ما</Link>
                        </div>
                    </div>
                )}

            </div>
        </nav>
    )
}

export default Navbar;
