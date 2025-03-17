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

    // アイコンマッピング
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "BsLightningCharge":
                return <BsLightningCharge className="w-12 h-12 text-white" />;
            case "BsPeople":
                return <BsPeople className="w-12 h-12 text-white" />;
            case "BsGlobe":
                return <BsGlobe className="w-12 h-12 text-white" />;
            case "BsGraphUp":
                return <BsGraphUp className="w-12 h-12 text-white" />;
            default:
                return <BsLightningCharge className="w-12 h-12 text-white" />;
        }
    };

    return (
        <section id="advantages" className="py-12 bg-gray-50">
            <div className="section-container">
                <h2 className="section-title">選ばれる理由</h2>
                <p className="text-gray-600 text-center max-w-3xl mx-auto mb-10">
                    RIDSOM Autoが多くのお客様から選ばれる理由をご紹介します。
                    お客様のカーライフを末永くサポートするためのこだわりです。
                </p>

                <div ref={ref} className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            >
                                <div className="flex items-center">
                                    <div className="bg-primary-600 p-5 flex items-center justify-center h-full">
                                        {getIcon(advantage.icon || "")}
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-xl font-bold mb-3 text-primary-600">
                                            {advantage.title}
                                        </h3>
                                        <p className="text-gray-700">
                                            {advantage.description}
                                        </p>
                                    </div>
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
