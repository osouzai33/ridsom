"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/lib/site-config";

export default function FlowSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <section id="flow" className="py-12 bg-gray-50">
            <div className="section-container">
                <h2 className="section-title">ご利用の流れ</h2>
                <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
                    RIDSOM
                    Autoでは、お客様のご購入から納車までをスムーズにサポートいたします。
                    安心してお任せください。
                </p>

                <div ref={ref} className="max-w-4xl mx-auto relative">
                    {/* 中央のライン */}
                    <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-primary-200 transform -translate-x-1/2 z-0" />

                    {/* ステップアイテム */}
                    {siteConfig.flow.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                                isInView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 20 }
                            }
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className={`flex ${
                                index % 2 === 0
                                    ? "flex-row"
                                    : "flex-row-reverse"
                            } items-center mb-12 last:mb-0 relative z-10`}
                        >
                            {/* ステップ番号 */}
                            <div className="w-20 h-20 flex-shrink-0 bg-primary-500 text-white rounded-full flex justify-center items-center text-2xl font-bold z-20 shadow-lg">
                                {step.step}
                            </div>

                            {/* 矢印と内容 */}
                            <div
                                className={`${
                                    index % 2 === 0 ? "ml-6" : "mr-6"
                                } bg-white p-6 rounded-lg shadow-md w-full max-w-md`}
                            >
                                <h3 className="text-xl font-bold mb-2 text-primary-700">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 p-8 bg-white rounded-lg shadow-md text-center max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-4 text-primary-700">
                        お客様に寄り添ったサポート
                    </h3>
                    <p className="text-gray-700 mb-4">
                        RIDSOM
                        Autoでは、お客様のニーズに合わせて柔軟にサポートいたします。
                        納車後のアフターフォローも万全ですので、お車に関することなら何でもご相談ください。
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        <div className="bg-primary-50 p-4 rounded-md">
                            <span className="font-medium text-primary-700">
                                遠方からのご購入も安心
                            </span>
                        </div>
                        <div className="bg-primary-50 p-4 rounded-md">
                            <span className="font-medium text-primary-700">
                                買取と購入の同時対応可能
                            </span>
                        </div>
                        <div className="bg-primary-50 p-4 rounded-md">
                            <span className="font-medium text-primary-700">
                                各種ローンプランをご用意
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
