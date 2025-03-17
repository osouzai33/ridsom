"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/lib/site-config";
import {
    BsLightningCharge,
    BsPeople,
    BsGlobe,
    BsGraphUp,
} from "react-icons/bs";

export default function AdvantagesSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    // 画像パスのマッピング
    const getImagePath = (iconName: string) => {
        switch (iconName) {
            case "BsLightningCharge":
                return "/img/engine_watching_man.jpeg"; // 若い力と経験を表す画像
            case "BsPeople":
                return "/img/loadservice_circle.jpeg"; // ワンストップサービスを表す画像
            case "BsGlobe":
                return "/img/japan_full_size.jpeg"; // 全国対応を表す画像
            case "BsGraphUp":
                return "/img/car_buy_high.jpeg"; // 独自買取ルートを表す画像
            default:
                return "/img/cool_woman_driving.jpeg"; // デフォルト画像
        }
    };

    return (
        <section id="advantages" className="py-12 bg-gray-50">
            <div className="section-container">
                <h2 className="section-title text-black">選ばれる理由</h2>
                <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
                    RIDSOM Autoが多くのお客様から選ばれる理由をご紹介します。
                    お客様のカーライフを末永くサポートするためのこだわりです。
                </p>

                <div ref={ref} className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {siteConfig.advantages.map((advantage, index) => (
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
                                    delay: index * 0.2,
                                }}
                                className="relative w-full h-72 md:h-96 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                            >
                                {/* 画像部分（正方形中央配置） */}
                                <div
                                    className="absolute inset-0 w-full h-full flex items-center justify-center bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{
                                        backgroundImage: `url(${getImagePath(
                                            advantage.icon || ""
                                        )})`,
                                    }}
                                />

                                {/* オーバーレイ（透過グラデーション） */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70"></div>

                                {/* テキストコンテンツ（下部配置） */}
                                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                    <h3 className="text-3xl font-bold mb-3 drop-shadow-lg">
                                        {advantage.title}
                                    </h3>
                                    <p className="text-white/90 text-lg max-w-md">
                                        {advantage.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-12 p-8 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg shadow-lg text-center text-white"
                >
                    <h3 className="text-2xl font-bold mb-4">
                        お客様満足度を第一に
                    </h3>
                    <p className="max-w-3xl mx-auto leading-relaxed">
                        RIDSOM
                        Autoでは、お客様との信頼関係を最も大切にしています。
                        一度のお取引で終わりではなく、カーライフ全般を通じたお付き合いを心がけ、
                        お客様のニーズに合わせたサービスを提供し続けます。
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
