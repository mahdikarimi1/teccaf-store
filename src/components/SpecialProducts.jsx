import { products } from "../data/productsData";
import ProductsCard from "./ProuductCard";
import useScrollReveal from "./useScrollReveal";

function SpecialProducts({ onAddToCart }) {
    const specialProducts = products.filter(p => p.isSpecial === true);

    useScrollReveal('.stat-item');

    return (
        <section dir="rtl" className="py-16 bg-white stat-item">
            <div className="container mx-auto px-4">

                {/* عنوان بخش */}
                <div className="text-center mb-12">

                    <span className="text-purple-600 font-semibold text-sm">
                        پیشنهاد تکاف
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-3">
                        🔥 محصولات ویژه و پرفروش
                    </h2>

                    <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>

                    <p className="text-gray-500 mt-4">
                        محبوب‌ترین تجهیزات گیمینگ با پیشنهادهای ویژه
                    </p>

                </div>

                {/* گرید محصولات */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    {specialProducts.map(product => (
                        <ProductsCard
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
}

export default SpecialProducts;
