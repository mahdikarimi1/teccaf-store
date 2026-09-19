import { useState } from "react";
import { Link } from "react-router-dom";
import ps4orps5 from '../assets/ps4orps5.jpeg'
import protection from '../assets/protection.png'
import region from '../assets/region.jpg'
import itstaketwo from '../assets/itstaketwo.jpg'
import giftcard from '../assets/giftcard.jpg'
import ps5b1 from '../assets/ps5-b1.jpg'
import useScrollReveal from "../components/useScrollReveal";

const articles = [
    {
        id: 1,
        title: "راهنمای خرید پلی‌استیشن ۵؛ کدام مدل مناسب شماست؟",
        excerpt: "قبل از خرید PS5 با مدل‌های مختلف کنسول، تفاوت نسخه‌ها و نکاتی که هنگام خرید باید به آن‌ها توجه کنید آشنا شوید.",
        image: ps5b1,
        category: "راهنما",
        date: "۲۵ شهریور ۱۴۰۵",
        author: "مهدی کریمی",
        readTime: "۸ دقیقه"
    },
    {
        id: 2,
        title: "PS4 یا PS5؛ کدام کنسول را انتخاب کنیم؟",
        excerpt: "تفاوت‌های PS4 و PS5 را از نظر قدرت سخت‌افزاری، امکانات، بازی‌ها و تجربه گیمینگ بررسی می‌کنیم.",
        image: ps4orps5,
        category: "مقایسه",
        date: "۲۰ شهریور ۱۴۰۵",
        author: "مهدی کریمی",
        readTime: "۱۰ دقیقه"
    },
    {
        id: 3,
        title: "بهترین بازی‌های پلی‌استیشن برای دورهمی",
        excerpt: "معرفی چند بازی جذاب برای تجربه گروهی و دورهمی‌های دوستانه در گیم‌سنتر و خانه.",
        image: itstaketwo,
        category: "معرفی بازی",
        date: "۱۵ شهریور ۱۴۰۵",
        author: "مهدی کریمی",
        readTime: "۶ دقیقه"
    },
    {
        id: 4,
        title: "گیفت کارت پلی‌استیشن چیست و چه کاربردی دارد؟",
        excerpt: "با کاربرد گیفت کارت پلی‌استیشن و نکاتی که قبل از خرید و استفاده از آن باید بدانید آشنا شوید.",
        image: giftcard,
        category: "آموزشی",
        date: "۱۰ شهریور ۱۴۰۵",
        author: "مهدی کریمی",
        readTime: "۵ دقیقه"
    },
    {
        id: 5,
        title: "ریجن اکانت پلی‌استیشن چیست و چرا اهمیت دارد؟",
        excerpt: "ریجن اکانت چه تأثیری روی خرید بازی، گیفت کارت و محتوای فروشگاه پلی‌استیشن دارد؟",
        image: region,
        category: "پلی‌استیشن",
        date: "۵ شهریور ۱۴۰۵",
        author: "مهدی کریمی",
        readTime: "۷ دقیقه"
    },
    {
        id: 6,
        title: "نکات مهم نگهداری از PS4 و PS5",
        excerpt: "چند نکته ساده برای نگهداری بهتر کنسول، جلوگیری از داغ شدن بیش از حد و افزایش طول عمر دستگاه.",
        image: protection,
        category: "آموزشی",
        date: "۱ شهریور ۱۴۰۵",
        author: "مهدی کریمی",
        readTime: "۹ دقیقه"
    }
]

const categories = [
    "همه",
    "راهنما",
    "مقایسه",
    "معرفی بازی",
    "آموزشی",
    "پلی‌استیشن"
]

function BlogPage() {

    useScrollReveal('.start-item')

    const [selectedCategory, setSelectedCategory] = useState('همه')
    const [searchTerm, setSearchTerm] = useState('')

    //فیلتر مقالات
    const filteredArticles = articles.filter(article => {
        const matchCategory = selectedCategory === 'همه' || article.category === selectedCategory
        const matchSearch = article.title.includes(searchTerm) || article.excerpt.includes(searchTerm)

        return matchCategory && matchSearch
    })

    return (
        <div className="bg-gray-50 min-h-screen py-12 start-item">
            <div className="container mx-auto px-4">

                {/* هدر صفحه */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        مجله گیم کلاب تکاف خواف
                    </h1>
                    <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        آخرین اخبار، مقالات و راهنماهای دنیای پلی‌استیشن و گیمینگ
                    </p>
                </div>

                {/* جست و جو */}
                <div className="max-w-xl mx-auto mb-8">
                    <input type="text" placeholder="جستجوی مقالات..." value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none text-[#111]  focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                {/* دسته بندی ها */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full duration-200 transition-all ${selectedCategory === cat
                                ? 'bg-purple-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* تعداد مقالات */}
                <div className="mb-6 text-gray-500 text-center">
                    {filteredArticles.length} مقاله یافت شد
                </div>

                {/* گرید مقالات */}
                {filteredArticles.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-bold text-gray-700">مقاله‌ای یافت نشد!</h3>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredArticles.map(article => (
                            <div key={article.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all group">
                                <div className="overflow-hidden">
                                    <img src={article.image} alt={article.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full">
                                            {article.date}
                                        </span>
                                    </div>
                                    <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-purple-600 transition">
                                        <Link to={`/blog/${article.id}`}>{article.title}</Link>
                                    </h2>
                                    <p className="text-gray-500 text-sm mb-4 line-clamp-2">{article.excerpt}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2">
                                            <span className="text-gray-400 text-sm">
                                                ✍️ {article.author}
                                            </span>
                                        </div>
                                        <Link to={`/blog/${article.id}`}
                                            className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                                            ادامه مطلب ←
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* خبرنامه */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 mt-16 text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">عضویت در خبرنامه</h3>
                    <p className="text-purple-100 mb-6">اولین نفری باش که از تخفیف‌ها و مقالات جدید تکاف مطلع می‌شی!</p>
                    <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" action="">
                        <input type="text"
                            placeholder="ایمیل شما"
                            className="flex-1 px-4 py-2 rounded-xl text-[#111] focus:outline-none"
                        />
                        <button className="bg-white text-purple-600 px-6 py-2 rounded-xl font-bold hover:bg-purple-100 transition">
                            عضویت
                        </button>
                    </form>
                </div>

            </div>
        </div >
    )
}

export default BlogPage;
