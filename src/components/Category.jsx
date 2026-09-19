import { categories } from '../data/productsData'
import useScrollReveal from '../components/useScrollReveal';

function Category() {

    useScrollReveal('.stat-item');

    return (
        <section dir="rtl" className="py-16 bg-gray-50 stat-item">
            <div className="container mx-auto px-4">

                {/* عنوان بخش */}
                <div className="text-center mb-12">
                    <span className="text-purple-600 font-semibold text-sm">
                        فروشگاه تکاف
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-3">
                        دسته‌بندی محصولات
                    </h2>

                    <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>

                    <p className="text-gray-500 mt-4">
                        تجهیزات مورد نیازت رو بر اساس دسته‌بندی پیدا کن
                    </p>
                </div>

                {/* لیست دسته‌بندی‌ها */}
                <div className="flex flex-wrap justify-center gap-5">

                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="
                                bg-white
                                rounded-2xl
                                p-6
                                text-center
                                border border-gray-100
                                hover:border-purple-200
                                hover:shadow-xl
                                transition-all
                                duration-300
                                hover:-translate-y-2
                                cursor-pointer
                                group
                                w-[160px]
                            "
                        >

                            <div className="
                                w-20
                                h-20
                                mx-auto
                                mb-4
                                rounded-2xl
                                bg-purple-50
                                flex
                                items-center
                                justify-center
                                text-5xl
                                group-hover:bg-purple-100
                                group-hover:scale-105
                                transition-all
                                duration-300
                            ">
                                {category.icon}
                            </div>

                            <h3 className="
                                font-bold
                                text-gray-800
                                group-hover:text-purple-600
                                transition-colors
                                duration-300
                            ">
                                {category.name}
                            </h3>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    )
}

export default Category;
