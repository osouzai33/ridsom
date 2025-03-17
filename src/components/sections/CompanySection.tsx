"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/lib/site-config";
import {
    FaMapMarkerAlt,
    FaPhone,
    FaFax,
    FaClock,
    FaCalendarAlt,
    FaEnvelope,
} from "react-icons/fa";

export default function CompanySection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    // 会社情報項目
    const companyInfoItems = [
        {
            icon: <FaMapMarkerAlt className="text-primary-500 w-5 h-5" />,
            label: "所在地",
            value: siteConfig.company.address,
        },
        {
            icon: <FaPhone className="text-primary-500 w-5 h-5" />,
            label: "電話番号",
            value: siteConfig.company.phone,
        },
        {
            icon: <FaFax className="text-primary-500 w-5 h-5" />,
            label: "FAX",
            value: siteConfig.company.fax,
        },
        {
            icon: <FaClock className="text-primary-500 w-5 h-5" />,
            label: "営業時間",
            value: siteConfig.company.businessHours,
        },
        {
            icon: <FaCalendarAlt className="text-primary-500 w-5 h-5" />,
            label: "定休日",
            value: siteConfig.company.regularHoliday,
        },
        {
            icon: <FaEnvelope className="text-primary-500 w-5 h-5" />,
            label: "メール",
            value: siteConfig.company.email,
        },
    ];

    return (
        <section id="company" className="py-12 bg-white">
            <div className="section-container">
                <h2 className="section-title text-black">会社概要</h2>

                <div
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12"
                >
                    {/* 会社情報 */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={
                            isInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: -30 }
                        }
                        transition={{ duration: 0.5 }}
                        className="bg-white p-8 rounded-lg shadow-md"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-primary-700 pb-2 border-b border-gray-200">
                            {siteConfig.company.companyName}
                        </h3>
                        <div className="space-y-4">
                            <p className="text-gray-700 mb-6">
                                <span className="font-bold">代表者:</span>{" "}
                                {siteConfig.company.representative}
                            </p>
                            <p className="text-gray-700 mb-6">
                                <span className="font-bold">設立:</span>{" "}
                                {siteConfig.company.establishment}
                            </p>
                            <p className="text-gray-700 mb-6">
                                <span className="font-bold">事業内容:</span>{" "}
                                {siteConfig.company.businessDescription}
                            </p>

                            <ul className="space-y-4">
                                {companyInfoItems.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={
                                            isInView
                                                ? { opacity: 1, y: 0 }
                                                : { opacity: 0, y: 10 }
                                        }
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.1 + index * 0.1,
                                        }}
                                        className="flex items-start"
                                    >
                                        <div className="mt-1 mr-3">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <span className="font-medium text-gray-700 block">
                                                {item.label}
                                            </span>
                                            <span className="text-gray-600">
                                                {item.value}
                                            </span>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Googleマップ埋め込み */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={
                            isInView
                                ? { opacity: 1, x: 0 }
                                : { opacity: 0, x: 30 }
                        }
                        transition={{ duration: 0.5 }}
                        className="rounded-lg overflow-hidden shadow-md h-[450px] flex items-center justify-center"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.265662969727!2d134.23739447621968!3d35.5450443443273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355700b390066d8f%3A0xf1a772f6ea5667c1!2z6bOl5Y-W55yM6bOl5Y-W5biC5bmL55S677yR77yU77yY!5e0!3m2!1sja!2sjp!4v1710643611845!5m2!1sja!2sjp"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="RIDSOM Auto地図"
                            aria-label="RIDSOM Auto所在地のGoogleマップ"
                        ></iframe>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
