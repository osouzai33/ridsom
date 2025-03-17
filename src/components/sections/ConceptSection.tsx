"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { FaCar, FaHandshake, FaTools } from "react-icons/fa";

export default function ConceptSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const conceptFeatures = [
        {
            icon: <FaHandshake className="text-white text-3xl" />,
            title: "信頼関係",
            description:
                "お客様との絆を第一に考え、末永いお付き合いを大切にします。",
        },
        {
            icon: <FaCar className="text-white text-3xl" />,
            title: "安心と快適",
            description:
                "安全な車選びと万全のアフターサポートで安心のカーライフを提供します。",
        },
        {
            icon: <FaTools className="text-white text-3xl" />,
            title: "総合サポート",
            description:
                "購入・買取・保険・メンテナンスまで一貫したサービスをお届けします。",
        },
    ];

    return (
        <section id="concept" className="py-16 bg-white">
            <div className="section-container" ref={ref}>
                {/* ヘッダー部分 - シンプルに */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary-700 mb-2">
                        ブランドコンセプト
                    </h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
                </div>

                {/* メインコンセプト - 大きく目立つように */}
                <div className="bg-primary-50 rounded-lg p-10 mb-16 text-center max-w-5xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary-700 mb-6">
                        {siteConfig.brand.concept}
                    </h3>
                    <p className="text-lg text-gray-700">
                        {siteConfig.brand.message}
                    </p>
                </div>

                {/* 3つの強み - 横並びカードで一目でわかるように */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {conceptFeatures.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={
                                isInView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 30 }
                            }
                            transition={{
                                duration: 0.5,
                                delay: 0.2 + index * 0.1,
                            }}
                            className="bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            {/* アイコンヘッダー */}
                            <div className="bg-primary-600 p-6 flex justify-center">
                                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                                    {feature.icon}
                                </div>
                            </div>

                            {/* テキストコンテンツ */}
                            <div className="p-6">
                                <h4 className="text-xl font-bold mb-3 text-primary-600">
                                    {feature.title}
                                </h4>
                                <p className="text-gray-700">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* タグライン - シンプルに強調 */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-center p-8 border-t border-gray-200 max-w-3xl mx-auto"
                >
                    <p className="text-2xl font-bold text-primary-600">
                        あなたのカーライフを、0から無限大まで。
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
