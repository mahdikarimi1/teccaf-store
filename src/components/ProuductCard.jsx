import { Link } from "react-router-dom"

function ProductsCard({ product, onAddToCart }) {
    // فرمت قیمت به تومان
    const formatPrice = (price) => {
        return price.toLocaleString('fa-IR') + 'تومان'
    }

    // محاسبه درصد تخفیف
    const discountPercent = product.oldPrice
        ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
        : 0

    return (
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden group">
            {/* بخش تصویر */}
            {/* لینک به صفحه جزئیات محصول */}
            <Link to={`/product/${product.id}`}>
                <div className="relative overflow-hidden h-48 bg-[#ffff]">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 flex flex-col gap-1">
                        {product.isSpecial && (
                            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">🔥 ویژه</span>
                        )}

                        {product.isNew && (
                            <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-lg">🆕 جدید</span>
                        )}

                        {discountPercent > 0 && (
                            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-lg">{discountPercent}٪ تخفیف</span>
                        )}
                    </div>
                </div>
            </Link>

            <div className="p-4">
                <Link to={`/product/${product.id}`}>
                    <h3 className="font-bold text-lg text-gray-800 mb-1 line-clamp-1 hover:text-purple-600 transition">
                        {product.ProductName}
                    </h3>
                </Link>

                <p className="text-gray-500 text-sm mb-3 line-clamp-1">
                    {product.description}
                </p>


                <div className="flex items-center gap-1 mb-3">
                    <span className="text-yellow-400">⭐</span>
                    <span className="text-sm text-gray-600">{product.rating}</span>
                    <span className="text-gray-400 text-sm">(نظر 123)</span>
                </div>

                <div className="flex items-center justify-between mt-4">
                    <div className="">
                        {product.oldPrice && (
                            <span className="text-gray-400 line-through text-sm block">
                                {formatPrice(product.oldPrice)}
                            </span>
                        )}
                        <span className="text-xl font-bold text-purple-600">
                            {formatPrice(product.price)}
                        </span>
                    </div>

                    <button onClick={() => onAddToCart(product)}
                        className="bg-purple-600 text-white hover:bg-white hover:text-purple-600 px-4 py-2 rounded-xl transition-all duration-500 hover:shadow-lg text-sm font-medium flex items-center gap-1">
                        🛒 خرید
                    </button>
                </div>

            </div>
        </div>

    )
}

export default ProductsCard;
