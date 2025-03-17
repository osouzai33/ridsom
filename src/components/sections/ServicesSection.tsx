"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/lib/site-config";
import {
    FaCarSide,
    FaCarAlt,
    FaMoneyBillWave,
    FaShieldAlt,
    FaCarCrash,
    FaRoad,
} from "react-icons/fa";

export default function ServicesSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

    // アイコンマッピング
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case "FaCarSide":
                return <FaCarSide className="w-12 h-12 text-primary-500" />;
            case "FaCarAlt":
                return <FaCarAlt className="w-12 h-12 text-primary-500" />;
            case "FaMoneyBillWave":
                return (
                    <FaMoneyBillWave className="w-12 h-12 text-primary-500" />
                );
            case "FaShieldAlt":
                return <FaShieldAlt className="w-12 h-12 text-primary-500" />;
            case "FaCarCrash":
                return <FaCarCrash className="w-12 h-12 text-primary-500" />;
            case "FaRoad":
                return <FaRoad className="w-12 h-12 text-primary-500" />;
            default:
                return <FaCarSide className="w-12 h-12 text-primary-500" />;
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
            },
        },
    };

    return (
        <section id="services" className="py-12">
            <div className="section-container">
                <h2 className="section-title">サービス</h2>
                <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
                    RIDSOM
                    Autoでは、お客様のカーライフを総合的にサポートするため、
                    各種サービスをワンストップで提供しております。
                </p>

                <div ref={ref} className="mt-12">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {siteConfig.services.map((service, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group"
                            >
                                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {getIcon(service.icon || "")}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-800">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
