"use client";

import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { siteConfig } from "@/lib/site-config";

export default function InventorySection() {
    // ダミーの在庫車データ
    const sampleInventory = [
        {
            id: 1,
            name: "トヨタ プリウス",
            year: "2019年",
            mileage: "23,000km",
            price: "188万円",
            image: "/inventory-1.jpg",
        },
        {
            id: 2,
            name: "ホンダ フィット",
            year: "2020年",
            mileage: "18,500km",
            price: "148万円",
            image: "/inventory-2.jpg",
        },
        {
            id: 3,
            name: "日産 セレナ",
            year: "2018年",
            mileage: "35,000km",
            price: "198万円",
            image: "/inventory-3.jpg",
        },
    ];

    return (
        <section id="inventory" className="py-12">
            <div className="section-container">
                <h2 className="section-title">在庫車情報</h2>

                <div className="text-center mb-12">
                    <p className="text-gray-600 max-w-3xl mx-auto mb-6">
                        最新の在庫車情報を随時更新しています。
                        お探しの車両が見つからない場合もお気軽にご相談ください。
                        全国からお客様のご希望に合った車両をお探しします。
                    </p>

                    <div className="flex justify-center space-x-4 mb-12">
                        <a
                            href={siteConfig.snsLinks[0].url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-primary-600 bg-primary-50 hover:bg-primary-100 px-6 py-3 rounded-md font-medium transition-colors"
                        >
                            <FaInstagram className="mr-2" />
                            最新情報はInstagramでもチェック
                        </a>
                    </div>
                </div>

                {/* サンプル在庫表示（後ほど実際の在庫と差し替え） */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sampleInventory.map((car) => (
                        <motion.div
                            key={car.id}
                            whileHover={{
                                y: -5,
                                boxShadow:
                                    "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                            }}
                            className="bg-white rounded-lg overflow-hidden shadow-md transition-shadow"
                        >
                            {/* 車両画像 */}
                            <div className="h-48 bg-gray-200 relative">
                                <div
                                    className="w-full h-full bg-gradient-to-r from-primary-800 to-primary-600 opacity-70"
                                    style={{
                                        backgroundPosition: "center",
                                        backgroundSize: "cover",
                                        backgroundBlendMode: "overlay",
                                    }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center text-white">
                                    <span className="font-bold text-xl">
                                        {car.name}
                                    </span>
                                </div>
                            </div>

                            {/* 車両情報 */}
                            <div className="p-4">
                                <div className="flex justify-between mb-3">
                                    <span className="text-gray-600">
                                        {car.year}
                                    </span>
                                    <span className="text-gray-600">
                                        {car.mileage}
                                    </span>
                                </div>
                                <div className="text-xl font-bold text-primary-600 mb-3">
                                    {car.price}
                                </div>
                                <div className="flex justify-center">
                                    <ScrollLink
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        className="btn-secondary w-full text-center"
                                    >
                                        詳細を問い合わせる
                                    </ScrollLink>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-6">
                        掲載していない車両も多数ございます。
                        お探しの車種がございましたら、ぜひお問い合わせください。
                    </p>
                    <ScrollLink
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="btn-primary"
                    >
                        在庫のお問い合わせ
                    </ScrollLink>
                </div>
            </div>
        </section>
    );
}
