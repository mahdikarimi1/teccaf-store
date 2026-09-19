import { Link } from "react-router-dom";
import { products, categories } from "../data/productsData";
import ProductsCard from "../components/ProuductCard";
import { useState } from "react";
import picture from '../assets/banner/b1.jpg'
import useScrollReveal from '../components/useScrollReveal';

function ShopPage({ onAddToCart }) {
    const [selectedCategory, setSelectedCategory] = useState('همه')
    const [searchTerm, setSearchTerm] = useState('')
    const [showDiscountedOnly, setShowDiscountedOnly] = useState(false) // محصولات تخفیف دار

    const normalizeText = (text) => {
        return text
            .toLowerCase()
            .trim()  // حذف فاصله از اول و آخر
    }

    // فیلتر محصولات بر اساس دسته بندی و جستجو و تخفیف
    const filteredProducts = products.filter(product => {
        // دسته بندی
        const matchCategory = selectedCategory === 'همه' || product.category === selectedCategory

        const normalizedSearch = normalizeText(searchTerm)
        const normalizedProductName = normalizeText(product.ProductName)
        const normalizedDescription = normalizeText(product.description)

        // سرچ
        const matchSearch = normalizedProductName.includes(normalizedSearch) ||
            normalizedDescription.includes(normalizedSearch)

        const matchDiscount = showDiscountedOnly ? (product.oldPrice && product.oldPrice > product.price) : true

        return matchCategory && matchSearch && matchDiscount
    })


    useScrollReveal('.stat-item');

    return (
            <div dir="rtl" className="bg-gray-50 min-h-screen py-12 stat-item">
                <div className="container mx-auto px-4">

                {/* عنوان صفحه */}
                <div className="relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden rounded-2xl mb-12">
                    {/* تصویر پس زمینه */}
                    <img
                        src={picture}
                        alt="فروشگاه تکاف "
                        className="w-full h-full object-cover"
                    />

                    {/* لایه تیره ) */}
                    <div className="absolute inset-0 bg-black/20"></div>

                    {/* متن روی تصویر */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                            فروشگاه تکاف
                        </h1>
                        <p className="text-base md:text-xl text-white/90 drop-shadow-md">
                            بهترین محصولات با بهترین قیمت‌ها
                        </p>
                    </div>
                </div>
                {/* بخش فیلتر و جست و جو */}
                <div className="bg-white rounded-2xl shadow-md p-6 mb-8">

                    {/* جست و جو */}
                    <div className="mb-6">
                        <input type="text" placeholder="جستجوی محصولات..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full border border-gray-300 rounded-xl px-3
                            py-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 text-[#111] "
                        />
                    </div>

                    {/* دسته بندی ها */}
                    <div className="flex flex-wrap gap-2">
                        <button
                            onClick={() => setSelectedCategory('همه')}
                            className={`px-4 py-2 rounded-full transition-all ${selectedCategory === 'همه'
                                ? 'bg-purple-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:text-[#111] hover:bg-gray-200'
                                }`}
                        >
                            همه محصولات
                        </button>

                        {/* دکمه نمایش محصولات تخفیف‌دار */}

                        <button
                            onClick={() => {
                                setShowDiscountedOnly(!showDiscountedOnly)
                                setSelectedCategory('همه') // ریست دسته بندی
                            }}
                            className={`w-full md:w-auto px-6 py-2 rounded-xl transition-all flex items-center justify-center gap-2 ${showDiscountedOnly
                                ? 'bg-orange-500 text-white hover:bg-orange-600'
                                : 'bg-gray-100 text-gray-700 hover:text-[#111] hover:bg-gray-200'
                                }`}
                        >
                            <span>🔥</span>
                            <span>{showDiscountedOnly ? 'نمایش همه محصولات' : 'نمایش محصولات تخفیف‌دار'}</span>
                        </button>

                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.name)}
                                className={`px-4 py-2 rounded-full transition-all flex items-center gap-1 ${selectedCategory === cat.name
                                    ? 'bg-purple-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:text-[#111] hover:bg-gray-200'
                                    }`}
                            >
                                <span>{cat.icon}</span>
                                <span>{cat.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* تعداد محصولات یافت شده */}
                <div className="mb-6 text-gray-600">
                    {filteredProducts.length} محصول یافت شد
                </div>

                {/* گرید محصولات */}
                {filteredProducts.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-bold text-gray-700">محصولی یافت نشد!</h3>
                        <p className="text-gray-500 mt-2">لطفا عبارت دیگری جست و جو کنید.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map(product => (
                            <ProductsCard key={product.id} product={product} onAddToCart={onAddToCart} />
                        ))}
                    </div>
                )
                }
            </div>
        </div>
    )
}

export default ShopPage;
