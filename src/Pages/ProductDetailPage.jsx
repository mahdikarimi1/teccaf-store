import { useParams, Link } from "react-router-dom";
import { products } from "../data/productsData";
import ProductsCard from "../components/ProuductCard";

function ProductDetailPage({ onAddToCart }) {
    const { id } = useParams()
    const product = products.find(p => p.id === parseInt(id))
    const nearChoseItem = products.filter(p => p.category === product.category && p.id !== product.id)


    const formatPrice = (price) => {
        return price.toLocaleString('fa-IR') + 'تومان'
    }

    // گرفتن ۴ محصول تصادفی
    const randomProducts = [...nearChoseItem]
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);


    if (!product) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-20">
                <div className="text-7xl mb-4">😞</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    محصول یافت نشد!
                </h2>
                <Link to='/shop' className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl transition-all">
                    بازگشت به فروشگاه
                </Link>
            </div>
        )
    }



    return (
        <div className="container mx-auto px-4 py-12 mt-10">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="flex flex-col justify-center items-center md:flex-row lg:justify-around ">

                    {/* تصویر محصول */}
                    <div className="bg-[#ffff] rounded-2xl overflow-hidden p-3 mb-10 w-96 h-96">
                        <img src={product.image} alt={product.ProductName} className="w-full h-auto object-cover" />
                    </div>

                    {/* اطلاعات محصول */}
                    <div className="">
                        <h1 className="text-3xl font-bold text-gray-800 mb-3">
                            {product.ProductName}
                        </h1>
                        <p className="text-gray-500 mb-4">
                            {product.description}
                        </p>

                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-yellow-400 text-xl">⭐</span>
                            <span className="font-medium">{product.rating}</span>
                            <span className="font-medium">(نظر 123)</span>
                        </div>

                        <div className="mb-6">
                            {product.oldPrice && (
                                <span className="text-gray-400 line-through text-lg block">
                                    {formatPrice(product.oldPrice)}
                                </span>
                            )}
                            <span className="text-3xl font-bold text-purple-600">
                                {formatPrice(product.price)}
                            </span>
                        </div>

                        <button onClick={() => onAddToCart(product)}
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-bold text-lg transition-all mb-4">
                            🛒 افزودن به سبد خرید
                        </button>

                        <Link to='/shop' className="block text-center text-purple-600 hover:text-gray-700">
                            ← بازگشت به فروشگاه
                        </Link>
                    </div>
                </div>
                {/* محصولات مشابه */}
                {nearChoseItem.length > 0 && (
                    <div className="border-t border-gray-200 mt-8 pt-8 px-6 pb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-right">
                            محصولات مشابه
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                            {randomProducts.map(item => (
                                <ProductsCard
                                    key={item.id}
                                    product={item}
                                    onAddToCart={onAddToCart}
                                />
                            ))}

                        </div>
                    </div>
                )}
            </div>
        </div>
    )

}

export default ProductDetailPage;