import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// سوالات متداول
function Accordion({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-r-4 border-purple-600 pr-4">
            {/* سوال - با کلیک باز/بسته می‌شود */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full text-right font-bold text-gray-800 p-4 hover:bg-purple-50 dark:hover:bg-[#252525] transition-colors"
            >
                <span>{question}</span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-purple-600"
                >
                    ▼
                </motion.span>
            </button>

            {/* جواب - با انیمیشن نمایش/مخفی می‌شود */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-500 text-sm pb-4 px-4">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Accordion;