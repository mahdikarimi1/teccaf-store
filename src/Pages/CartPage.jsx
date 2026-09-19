import { Link } from "react-router-dom";

function CartPage({ cart, removeFromCart, updateQuantity }) {

    // محاسبه مجموع قیمت
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0)

    // فرمت قیمت
    const formatPrice = (price) => {
        return price.toLocaleString('fa-IR') + ' تومان'
    }

    if (cart.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-20">
                <div className="text-7xl mb-4 animate-bounce">🛒</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">سبد خرید خالی است!</h2>
                <p className="text-gray-500 mb-6">هنوز محصولی به سبد خرید اضافه نکرده‌اید.</p>
                <Link to="/shop" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl transition-all">
                    شروع خرید 🛍️
                </Link>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                🛒 سبد خرید
            </h1>

            <div className="flex flex-col lg:flex-row gap-8">

                {/* لیست محصولات */}
                <div className="lg:w-2/3">
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                        {/* هدر جدول - مخصوص دسکتاپ */}
                        <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-100 p-4 font-semibold text-gray-700">
                            <div className="col-span-5">محصول</div>
                            <div className="col-span-2 text-center">قیمت</div>
                            <div className="col-span-2 text-center">تعداد</div>
                            <div className="col-span-2 text-center">مجموع</div>
                            <div className="col-span-1 text-center"></div>
                        </div>

                        {cart.map((item) => (
                            <div key={item.id} className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b border-gray-100 items-center">

                                {/* اطلاعات محصول - 5 ستون */}
                                <div className="md:col-span-5 flex items-center gap-4">
                                    <img
                                        src={item.image}
                                        alt={item.ProductName}
                                        className="w-16 h-16 object-cover rounded-lg"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-gray-800">
                                            {item.ProductName}
                                        </h3>
                                        <p className="text-gray-500 text-sm">
                                            {item.category}
                                        </p>
                                    </div>
                                </div>

                                {/* قیمت */}
                                <div className="md:col-span-2">
                                    <span className="md:hidden font-semibold text-sm text-gray-500 block mb-1">
                                        قیمت:
                                    </span>
                                    <span className="text-purple-600 md:text-center block">
                                        {formatPrice(item.price)}
                                    </span>
                                </div>

                                {/* تعداد */}
                                <div className="md:col-span-2">
                                    <span className="md:hidden font-semibold text-sm text-gray-500 block mb-1">
                                        تعداد:
                                    </span>
                                    <div className="flex items-center justify-start md:justify-center gap-2">

                                        {/* - */}
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full transition"
                                        >
                                            -
                                        </button>

                                        {/* عدد */}
                                        <span className="w-8 text-center font-medium">
                                            {item.quantity}
                                        </span>

                                        {/* + */}
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full transition"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                {/* مجموع */}
                                <div className="md:col-span-2">
                                    <span className="md:hidden font-semibold text-sm text-gray-500 block mb-1">
                                        مجموع:
                                    </span>
                                    <span className="font-bold text-gray-800 md:text-center block">
                                        {formatPrice(item.price * item.quantity)}
                                    </span>
                                </div>

                                {/* حذف */}
                                <div className="md:col-span-1">
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:text-red-700 transition block mx-auto"
                                    >
                                        🗑️
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* خلاصه سبد خرید */}
                <div className="lg:w-1/3">
                    <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">
                            خلاصه سبد خرید
                        </h3>

                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between">
                                <span className="text-gray-600">تعداد محصولات:</span>
                                <span className="font-medium">
                                    {cart.reduce((sum, item) => sum + item.quantity, 0)} عدد
                                </span>
                            </div>
                            <div className="flex justify-between border-t pt-3">
                                <span className="text-lg font-bold text-gray-800">
                                    مجموع:
                                </span>
                                <span className="text-xl font-bold text-purple-600">
                                    {formatPrice(totalPrice)}
                                </span>
                            </div>
                        </div>

                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-bold transition-all">
                            ادامه فرآیند خرید ➤
                        </button>

                        <Link to="/shop" className="block text-center mt-4 text-purple-600 hover:text-purple-700">
                            ← ادامه خرید
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartPage;