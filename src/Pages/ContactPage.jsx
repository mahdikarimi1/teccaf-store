import useScrollReveal from "../components/useScrollReveal";

function ContactPage() {
    useScrollReveal(".start-item");

    const faqs = [
        {
            question: "تکاف چه خدماتی ارائه می‌دهد؟",
            answer:
                "در تکاف خدمات بازی به صورت حضوری، PS4، PS5، سیستم‌های گیمینگ، بیلیارد، اسنوکر و شبیه‌ساز رانندگی ارائه می‌شود. همچنین فروش تجهیزات گیمینگ، نصب بازی، تعمیر دسته و دستگاه، دور فن‌گیری و اجاره دستگاه نیز انجام می‌شود.",
        },
        {
            question: "ساعات کاری تکاف چه زمانی است؟",
            answer:
                "شنبه تا چهارشنبه از ساعت ۱۶ الی ۲۳، پنجشنبه از ساعت ۱۴ الی ۲۳ و جمعه از ساعت ۱۶ تا پاسی از شب در خدمت شما هستیم.",
        },
        {
            question: "آیا امکان اجاره دستگاه وجود دارد؟",
            answer:
                "بله، امکان اجاره دستگاه برای استفاده در منزل وجود دارد. برای اطلاع از شرایط و هزینه اجاره می‌توانید با شماره‌های تماس تکاف در ارتباط باشید.",
        },
        {
            question: "آیا تجهیزات گیمینگ هم می‌فروشید؟",
            answer:
                "بله، تکاف انواع تجهیزات و لوازم مورد نیاز گیمرها را عرضه می‌کند. برای اطلاع از موجودی محصولات می‌توانید با ما تماس بگیرید یا صفحه فروشگاه را مشاهده کنید.",
        },
        {
            question: "آیا به شهرهای دیگر هم ارسال دارید؟",
            answer:
                "بله، امکان ارسال محصولات به سراسر شهرهای ایران وجود دارد. هزینه ارسال پیش از ارسال کالا دریافت می‌شود.",
        },
        {
            question: "آیا امکان تعمیر دسته و دستگاه وجود دارد؟",
            answer:
                "بله، خدمات تعمیر دسته و دستگاه‌های بازی در تکاف انجام می‌شود. برای بررسی مشکل دستگاه می‌توانید حضوری مراجعه کنید.",
        },
        {
            question: "چطور می‌توانم با تکاف در ارتباط باشم؟",
            answer:
                "می‌توانید از طریق شماره‌های ۰۹۱۵۴۲۸۶۸۰۰ و ۰۹۱۵۹۰۲۱۳۰۰، ایمیل mahdikarimi757@gmail.com یا شبکه‌های اجتماعی تکاف با ما در ارتباط باشید.",
        },
    ];

    return (
        <div
            dir="rtl"
            className="bg-gray-50 min-h-screen px-4 md:px-12 py-6 start-item"
        >
            <div className="container mx-auto">

                {/* عنوان صفحه */}
                <div className="text-center mb-10">
                    <span className="text-purple-600 font-semibold text-sm">
                        تکاف
                    </span>

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-3">
                        تماس با ما
                    </h1>

                    <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>

                    <p className="text-gray-500 mt-4">
                        ما همیشه آماده شنیدن نظرات و پاسخ به سوالات شما هستیم
                    </p>
                </div>

                {/* اطلاعات تماس */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

                    {/* آدرس */}
                    <div className="bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-lg transition">
                        <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl">
                            📍
                        </div>

                        <h3 className="font-bold text-gray-800 mb-2">
                            آدرس
                        </h3>

                        <p className="text-gray-500 text-sm leading-7">
                            خراسان رضوی، شهرستان خواف
                            <br />
                            بلوار عطار، نبش عطار ۱۴
                        </p>
                    </div>

                    {/* شماره تماس */}
                    <div className="bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-lg transition">
                        <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl">
                            📞
                        </div>

                        <h3 className="font-bold text-gray-800 mb-2">
                            شماره تماس
                        </h3>

                        <div className="space-y-2" dir="ltr">
                            <p className="text-gray-500 text-sm">
                                ۰۹۱۵ ۴۲۸ ۶۸۰۰
                            </p>

                            <p className="text-gray-500 text-sm">
                                ۰۹۱۵ ۹۰۲ ۱۳۰۰
                            </p>
                        </div>
                    </div>

                    {/* ایمیل */}
                    <div className="bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-lg transition">
                        <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl">
                            ✉️
                        </div>

                        <h3 className="font-bold text-gray-800 mb-2">
                            ایمیل
                        </h3>

                        <p
                            className="text-gray-500 text-sm break-all"
                            dir="ltr"
                        >
                            mahdikarimi757@gmail.com
                        </p>
                    </div>

                    {/* ساعات کاری */}
                    <div className="bg-white rounded-2xl p-5 text-center shadow-sm hover:shadow-lg transition">
                        <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl">
                            🕐
                        </div>

                        <h3 className="font-bold text-gray-800 mb-2">
                            ساعات کاری
                        </h3>

                        <div className="text-gray-500 text-sm leading-6">
                            <p>شنبه تا چهارشنبه: ۱۶ الی ۲۳</p>
                            <p>پنجشنبه: ۱۴ الی ۲۳</p>
                            <p>جمعه: مگه میشه تعطیل باشیم؟!</p>
                            <p>از ۱۶ الی پاسی از شب</p>
                        </div>
                    </div>
                </div>

                {/* محل تکاف + شبکه های اجتماعی */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">

                    {/* محل تکاف */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm">

                        <div className="text-center mb-5">
                            <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl">
                                📍
                            </div>

                            <h2 className="text-2xl font-bold text-gray-800">
                                محل تکاف
                            </h2>

                            <div className="w-16 h-1 bg-purple-600 mx-auto mt-3 rounded-full"></div>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6 text-center">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                مرکز ورزش‌های الکترونیک تکاف
                            </h3>

                            <p className="text-gray-500 leading-8">
                                خراسان رضوی، شهرستان خواف
                                <br />
                                بلوار عطار، نبش عطار ۱۴
                            </p>

                            <div className="mt-5 inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-5 py-2 rounded-xl text-sm font-medium">
                                🎮 منتظر حضور شما هستیم
                            </div>
                        </div>

                    </div>

                    {/* شبکه های اجتماعی */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm">

                        <div className="text-center mb-5">
                            <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-purple-100 flex items-center justify-center text-3xl">
                                📱
                            </div>

                            <h2 className="text-2xl font-bold text-gray-800">
                                ما را در شبکه‌های اجتماعی دنبال کنید
                            </h2>

                            <div className="w-16 h-1 bg-purple-600 mx-auto mt-3 rounded-full"></div>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6">

                            <p className="text-gray-500 text-center mb-6">
                                برای اطلاع از اخبار، تخفیف‌ها، محصولات و برنامه‌های تکاف
                                ما را دنبال کنید.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                                <a
                                    href="https://instagram.com/khafteccaf"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-xl transition font-medium"
                                >
                                    📷 اینستاگرام
                                </a>

                                <a
                                    href="https://t.me/khafteccaf"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-xl transition font-medium"
                                >
                                    ✈️ تلگرام
                                </a>

                            </div>

                            <div className="text-center mt-5 text-gray-500 text-sm">
                                <p dir="ltr">
                                    Instagram: @khafteccaf
                                </p>

                                <p dir="ltr" className="mt-1">
                                    Telegram: @khafteccaf
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* خدمات */}
                <div className="bg-white rounded-2xl p-6 md:p-8 mb-8 shadow-sm">

                    <div className="text-center mb-8">
                        <span className="text-purple-600 font-semibold text-sm">
                            خدمات تکاف
                        </span>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
                            چه خدماتی ارائه می‌دهیم؟
                        </h2>

                        <div className="w-16 h-1 bg-purple-600 mx-auto mt-3 rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

                        <div className="bg-gray-50 rounded-xl p-5 text-center">
                            <div className="text-3xl mb-3">🎮</div>
                            <p className="font-medium text-gray-700">PS4</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-5 text-center">
                            <div className="text-3xl mb-3">🎮</div>
                            <p className="font-medium text-gray-700">PS5</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-5 text-center">
                            <div className="text-3xl mb-3">🖥️</div>
                            <p className="font-medium text-gray-700">
                                سیستم‌های گیمینگ
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-5 text-center">
                            <div className="text-3xl mb-3">🎱</div>
                            <p className="font-medium text-gray-700">
                                بیلیارد و اسنوکر
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-5 text-center">
                            <div className="text-3xl mb-3">🏎️</div>
                            <p className="font-medium text-gray-700">
                                شبیه‌ساز رانندگی
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-5 text-center">
                            <div className="text-3xl mb-3">🛒</div>
                            <p className="font-medium text-gray-700">
                                فروش تجهیزات گیمینگ
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-5 text-center">
                            <div className="text-3xl mb-3">💿</div>
                            <p className="font-medium text-gray-700">
                                نصب بازی
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-5 text-center">
                            <div className="text-3xl mb-3">🔧</div>
                            <p className="font-medium text-gray-700">
                                تعمیر دسته و دستگاه
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-5 text-center">
                            <div className="text-3xl mb-3">⚙️</div>
                            <p className="font-medium text-gray-700">
                                دور فن‌گیری
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-5 text-center">
                            <div className="text-3xl mb-3">🚚</div>
                            <p className="font-medium text-gray-700">
                                ارسال به سراسر ایران
                            </p>
                        </div>

                    </div>
                </div>

                {/* خرید و ارسال */}
                <div className="bg-gradient-to-l from-purple-700 to-indigo-700 rounded-2xl p-6 md:p-10 text-white mb-8">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">

                        <div>
                            <div className="text-4xl mb-3">🚚</div>

                            <h3 className="font-bold text-lg mb-2">
                                ارسال به سراسر ایران
                            </h3>

                            <p className="text-purple-100 text-sm">
                                هزینه ارسال پیش از ارسال کالا دریافت می‌شود.
                            </p>
                        </div>

                        <div>
                            <div className="text-4xl mb-3">💳</div>

                            <h3 className="font-bold text-lg mb-2">
                                پرداخت آنلاین
                            </h3>

                            <p className="text-purple-100 text-sm">
                                امکان پرداخت آنلاین برای خرید محصولات
                            </p>
                        </div>

                        <div>
                            <div className="text-4xl mb-3">🔄</div>

                            <h3 className="font-bold text-lg mb-2">
                                امکان مرجوعی
                            </h3>

                            <p className="text-purple-100 text-sm">
                                محصولات طبق شرایط فروش امکان مرجوعی دارند.
                            </p>
                        </div>

                    </div>
                </div>

                {/* سوالات متداول */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">

                    <div className="text-center mb-8">
                        <span className="text-purple-600 font-semibold text-sm">
                            راهنمای تکاف
                        </span>

                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">
                            سوالات متداول
                        </h2>

                        <div className="w-16 h-1 bg-purple-600 mx-auto mt-3 rounded-full"></div>

                        <p className="text-gray-500 mt-3">
                            پاسخ برخی از سوالات متداول شما درباره خدمات تکاف
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-3">

                        {faqs.map((faq, index) => (
                            <details
                                key={index}
                                className="group bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
                            >
                                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 font-bold text-gray-800 hover:text-purple-600 transition">
                                    <span>{faq.question}</span>

                                    <span className="text-purple-600 text-xl group-open:rotate-45 transition-transform duration-300">
                                        +
                                    </span>
                                </summary>

                                <div className="px-5 pb-5 text-gray-500 text-sm leading-8 border-t border-gray-100 pt-4">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}

                    </div>

                </div>

            </div>
        </div>
    );
}

export default ContactPage;
