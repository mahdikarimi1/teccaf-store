// src/components/Footer.jsx
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer
            dir="rtl"
            className="bg-zinc-100 dark:bg-zinc-900 text-white pt-12 pb-6 mt-16"
        >
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

                    {/* درباره تکاف */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-2xl">🎮</span>
                            <h3 className="text-xl font-bold">
                                تکاف
                            </h3>
                        </div>

                        <p className="text-gray-400 text-sm leading-7">
                            مرکز ورزش‌های الکترونیک تکاف؛
                            مجموعه‌ای برای تجربه بازی، رقابت و سرگرمی
                            در کنار ارائه تجهیزات و خدمات گیمینگ.
                        </p>

                        <p className="text-gray-500 text-sm leading-7 mt-3">
                            خواف، بلوار عطار، نبش عطار ۱۴
                        </p>
                    </div>


                    {/* دسترسی سریع */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">
                            دسترسی سریع
                        </h3>

                        <ul className="space-y-3 text-gray-400">

                            <li>
                                <Link
                                    to="/"
                                    className="hover:text-purple-400 transition"
                                >
                                    خانه
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/shop"
                                    className="hover:text-purple-400 transition"
                                >
                                    فروشگاه
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/about"
                                    className="hover:text-purple-400 transition"
                                >
                                    درباره ما
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/blog"
                                    className="hover:text-purple-400 transition"
                                >
                                    مجله تکاف
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className="hover:text-purple-400 transition"
                                >
                                    تماس با ما
                                </Link>
                            </li>

                        </ul>
                    </div>


                    {/* خدمات مشتریان */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">
                            خدمات مشتریان
                        </h3>

                        <ul className="space-y-3 text-gray-400">

                            <li>
                                <Link
                                    to="/contact"
                                    className="hover:text-purple-400 transition"
                                >
                                    سوالات متداول
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className="hover:text-purple-400 transition"
                                >
                                    رویه‌های بازگشت کالا
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className="hover:text-purple-400 transition"
                                >
                                    ارسال به سراسر ایران
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className="hover:text-purple-400 transition"
                                >
                                    قوانین و مقررات
                                </Link>
                            </li>

                        </ul>
                    </div>


                    {/* اطلاعات تماس */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">
                            تماس با ما
                        </h3>

                        <ul className="space-y-3 text-gray-400 text-sm">

                            <li>
                                📞 ۰۹۱۵-۴۲۸-۶۸۰۰
                            </li>

                            <li>
                                📞 ۰۹۱۵-۹۰۲-۱۳۰۰
                            </li>

                            <li dir="ltr">
                                📧 mahdikarimi757@gmail.com
                            </li>

                            <li className="leading-6">
                                📍 خراسان رضوی، شهرستان خواف،
                                بلوار عطار، نبش عطار ۱۴
                            </li>

                        </ul>

                        {/* شبکه‌های اجتماعی */}
                        <div className="flex gap-4 mt-5">

                            <a
                                href="https://instagram.com/khafteccaf"
                                target="_blank"
                                rel="noreferrer"
                                className="text-2xl hover:text-purple-400 transition"
                                title="اینستاگرام تکاف"
                            >
                                📷
                            </a>

                            <a
                                href="https://t.me/khafteccaf"
                                target="_blank"
                                rel="noreferrer"
                                className="text-2xl hover:text-purple-400 transition"
                                title="تلگرام تکاف"
                            >
                                ✈️
                            </a>

                        </div>
                    </div>

                </div>


                {/* ساعات کاری */}
                <div className="border-t border-gray-800 pt-6 pb-6">

                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">

                        <div className="text-gray-500 text-center md:text-right">
                            <span className="text-gray-400 font-medium">
                                ساعات کاری:
                            </span>
                            {" "}
                            شنبه تا چهارشنبه ۱۶ الی ۲۳
                            {" | "}
                            پنجشنبه ۱۴ الی ۲۳
                            {" | "}
                            جمعه از ۱۶ الی پاسی از شب
                        </div>

                        <div className="text-gray-500">
                            🎮 مگه میشه جمعه تعطیل باشیم؟!
                        </div>

                    </div>

                </div>


                {/* کپی‌رایت */}
                <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">

                    <p>
                        © ۱۴۰۵ تمامی حقوق برای مرکز ورزش‌های الکترونیک تکاف محفوظ است.
                    </p>

                </div>

            </div>
        </footer>
    )
}

export default Footer
