import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/nav';
import HomePage from './Pages/HomePage'
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import { Toaster, toast } from 'react-hot-toast'
import CartPage from './Pages/CartPage';
import ShopPage from './Pages/ShopPage';
import ProductDetailPage from './Pages/ProductDetailPage';
import ScrollToTop from './components/ScrollToTop';
import AboutPage from './Pages/AboutPage';
import BlogPage from './Pages/BlogPage';
import ContactPage from './Pages/ContactPage'

function App() {

  const [cart, setCart] = useState(() => {
    // فقط در کلاینت (مرورگر) اجرا شود
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('shoppingCart')
      return savedCart ? JSON.parse(savedCart) : []
    }
    return []
  })

  // توابع ذخیره و بازیابی از localStorage
  const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('shoppingCart', JSON.stringify(cart))
  }

  const loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('shoppingCart')
    return savedCart ? JSON.parse(savedCart) : []
  }

  // تابع اضافه کردن به سبد خرید
  const addToCart = (product) => {

    setCart((prevCart) => {
      // اصلاح: عملگر مقایسه درست
      const existingItem = prevCart.find(item => item.id === product.id)

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      } else {
        return [...prevCart, { ...product, quantity: 1 }]
      }
    })

    // نمایش نوتیفیکیشن
    toast.success(` کالای ${product.ProductName} اضافه شد 🎉`, {
      duration: 3000,
      position: 'bottom-left',
      icon: '🛒',
      style: {
        background: '#8B5CF6',
        color: '#fff',
        borderRadius: '16px',
        padding: '12px 24px',
      },
    })
  }

  // تابع حذف از سبد خرید
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== productId))
    toast.success('محصول از سبد خرید حذف شد!', {
      duration: 3000,
      position: 'bottom-left',
      icon: '🗑️',
      style: {
        color: '#fff',
        borderRadius: '16px',
        padding: '12px 24px',
      }
    })
  }

  // تابع تغییر تعداد
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId)
      return
    }
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    )
  }


  useEffect(() => {
    saveCartToLocalStorage(cart)
  }, [cart])

  // تعداد کل محصولات توی سبد خرید
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div dir='rtl'>
        <Navbar cartItemCount={cartItemCount} />
        <Routes>

          <Route path="/" element={<HomePage onAddToCart={addToCart} />} />
          <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path='/product/:id' element={<ProductDetailPage onAddToCart={addToCart} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          } />
        </Routes>
        <Footer />
        <Toaster
          position="bottom-left"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />
      </div>
    </BrowserRouter>
  )
}

export default App;
