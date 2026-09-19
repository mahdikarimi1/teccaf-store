import useScrollReveal from '../components/useScrollReveal';

function AboutPage() {

    useScrollReveal('.stat-item');

    return (
        <div className="bg-gray-50 min-h-screen px-12 py-4 stat-item">
            <div className="container mx-auto px-4">

                {/* هدر صفحه */}
                <div className="text-center mb-12">
                    <span className="text-purple-600 font-semibold text-sm">
                        مرکز ورزش‌های الکترونیک تکاف
                    </span>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 mt-2">
                        درباره تکاف
                    </h1>

                    <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>

                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
                        جایی برای بازی، رقابت و تجربه‌ای متفاوت از دنیای گیم
                    </p>
                </div>

                {/* داستان ما */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
                    <div className="grid md:grid-cols-2 gap-8">

                        <div className="p-8 md:p-10">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                داستان تکاف
                            </h2>

                            <p className="text-gray-600 leading-relaxed mb-4">
                                تکاف با هدف ایجاد یک فضای حرفه‌ای و جذاب برای علاقه‌مندان
                                به بازی‌های ویدیویی و ورزش‌های الکترونیک فعالیت خود را آغاز کرده است.
                            </p>

                            <p className="text-gray-600 leading-relaxed mb-4">
                                در تکاف تلاش می‌کنیم محیطی مناسب برای بازی دوستانه،
                                رقابت‌های گروهی و تجربه بازی با تجهیزات مناسب فراهم کنیم.
                            </p>

                            <p className="text-gray-600 leading-relaxed">
                                هدف ما این است که هر بار که وارد تکاف می‌شوید،
                                یک تجربه خوب و به‌یادماندنی از دنیای گیم داشته باشید.
                            </p>
                        </div>

                        <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-8 md:p-10 flex items-center justify-center">
                            <div className="text-center text-white">
                                <div className="text-7xl mb-4">🎮</div>

                                <h3 className="text-2xl font-bold mb-2">
                                    دنیای گیم، دنیای تکاف
                                </h3>

                                <p className="text-purple-100">
                                    بازی کن، رقابت کن و لذت ببر
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* آمار و ارقام */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">

                    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
                        <div className="text-4xl mb-2">🎮</div>
                        <div className="text-2xl font-bold text-purple-600"> ۶+</div>
                        <div className="text-gray-500 text-sm">
                            پلی استیشن فور
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
                        <div className="text-4xl mb-2">💻</div>
                        <div className="text-2xl font-bold text-purple-600">۸+</div>
                        <div className="text-gray-500 text-sm">
                            کامپیوتر
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
                        <div className="text-4xl mb-2">🎱</div>
                        <div className="text-2xl font-bold text-purple-600">۱+</div>
                        <div className="text-gray-500 text-sm">
                            بیلیارد
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
                        <div className="text-4xl mb-2">🎮</div>
                        <div className="text-2xl font-bold text-purple-600">۱+</div>
                        <div className="text-gray-500 text-sm">
                            پلی استیشن فایو
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition">
                        <div className="text-4xl mb-2">🏎️</div>
                        <div className="text-2xl font-bold text-purple-600">۱+</div>
                        <div className="text-gray-500 text-sm">
                            شبیه ساز فرمان
                        </div>
                    </div>

                </div>

                {/* ارزش‌های ما */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">

                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
                        ارزش‌های ما
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">

                        <div className="text-center">
                            <div className="text-5xl mb-3">
                                🎯
                            </div>

                            <h3 className="font-bold text-lg mb-2">
                                تجربه متفاوت
                            </h3>

                            <p className="text-gray-500 text-sm">
                                تلاش می‌کنیم هر مراجعه به تکاف یک تجربه جذاب و متفاوت باشد.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-5xl mb-3">
                                🤝
                            </div>

                            <h3 className="font-bold text-lg mb-2">
                                فضای دوستانه
                            </h3>

                            <p className="text-gray-500 text-sm">
                                محیطی مناسب برای دورهمی، بازی و رقابت دوستانه.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-5xl mb-3">
                                🏆
                            </div>

                            <h3 className="font-bold text-lg mb-2">
                                رقابت و هیجان
                            </h3>

                            <p className="text-gray-500 text-sm">
                                ایجاد فضایی برای رقابت، پیشرفت و لذت بردن از بازی.
                            </p>
                        </div>

                    </div>
                </div>

                {/* خدمات تکاف */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">

                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
                        خدمات تکاف
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">

                        <div className="text-center">
                            <div className="text-5xl mb-3">
                                🎮
                            </div>

                            <h3 className="font-bold text-lg mb-2">
                                گیمینگ حرفه‌ای
                            </h3>

                            <p className="text-gray-500 text-sm">
                                تجربه بازی با سیستم‌ها و تجهیزات مناسب برای گیمرها
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-5xl mb-3">
                                👥
                            </div>

                            <h3 className="font-bold text-lg mb-2">
                                بازی گروهی
                            </h3>

                            <p className="text-gray-500 text-sm">
                                دورهمی دوستانه و رقابت‌های گروهی در فضای گیمینگ تکاف
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-5xl mb-3">
                                🎉
                            </div>

                            <h3 className="font-bold text-lg mb-2">
                                سرگرمی و دورهمی
                            </h3>

                            <p className="text-gray-500 text-sm">
                                فضایی برای تفریح، بازی و گذراندن اوقات خوش در کنار دوستان
                            </p>
                        </div>

                    </div>
                </div>

                {/* تیم ما */}
                <div className="text-center">

                    <h2 className="text-2xl font-bold text-gray-800 mb-8">
                        تیم ما
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">

                        {/* جعفر */}
                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-white">
                                👨‍🔧
                            </div>

                            <h3 className="font-bold text-lg">
                                جعفر آقا
                            </h3>

                            <p className="text-purple-600 text-sm mb-2">
                                آچار فرانسه
                            </p>

                            <p className="text-gray-500 text-sm">
                                استاد نصب بازی و تعمیرات
                            </p>
                        </div>

                        {/* جواد */}
                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-white">
                                🧠
                            </div>

                            <h3 className="font-bold text-lg">
                                جواد آقا
                            </h3>

                            <p className="text-purple-600 text-sm mb-2">
                                مدیر و مدبر
                            </p>

                            <p className="text-gray-500 text-sm">
                                استاد حل مشکلات و جذب مشتری
                            </p>
                        </div>

                        {/* مهدی */}
                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-white">
                                💡
                            </div>

                            <h3 className="font-bold text-lg">
                                مهدی آقا
                            </h3>

                            <p className="text-purple-600 text-sm mb-2">
                                R&D
                            </p>

                            <p className="text-gray-500 text-sm">
                                استاد دادن ایده های جدید
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutPage;
