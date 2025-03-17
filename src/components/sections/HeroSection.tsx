"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { siteConfig } from "@/lib/site-config";

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* 背景画像 */}
            <div className="absolute inset-0 z-0">
                <div
                    className="w-full h-full"
                    style={{
                        backgroundImage: "url('/img/track_big.jpeg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            </div>

            {/* 背景オーバーレイ */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

            {/* コンテンツ */}
            <div className="container mx-auto px-4 relative z-20 text-center text-white">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    {siteConfig.hero.catchPhrase}
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    {siteConfig.hero.subMessage}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    <ScrollLink
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="btn-primary text-lg"
                    >
                        お問い合わせ
                    </ScrollLink>
                </motion.div>
            </div>

            {/* スクロールダウンアイコン */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    duration: 1.5,
                    delay: 1,
                    repeat: Infinity,
                    repeatType: "loop",
                }}
            >
                <ScrollLink
                    to="concept"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="flex flex-col items-center cursor-pointer"
                >
                    <span className="mb-2 text-sm font-medium">詳しく見る</span>
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                    </svg>
                </ScrollLink>
            </motion.div>
        </section>
    );
}
