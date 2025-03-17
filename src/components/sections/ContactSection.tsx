"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { FaPhone, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function ContactSection() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("フォーム送信:", formData);
        setFormSubmitted(true);
        // ここに実際の送信処理を追加
    };

    const contactMethods = [
        {
            icon: <FaPhone className="w-12 h-12 text-primary-500" />,
            title: "お電話",
            description: "お気軽にお電話ください",
            info: siteConfig.company.phone,
            action: "電話をかける",
            link: `tel:${siteConfig.company.phone.replace(/-/g, "")}`,
        },
        {
            icon: <FaEnvelope className="w-12 h-12 text-primary-500" />,
            title: "メール",
            description: "メールでのお問い合わせ",
            info: siteConfig.company.email,
            action: "メールを送る",
            link: `mailto:${siteConfig.company.email}`,
        },
        {
            icon: <FaInstagram className="w-12 h-12 text-primary-500" />,
            title: "Instagram",
            description: "DMでのお問い合わせも可能です",
            info: "@ridsom_auto",
            action: "DMを送る",
            link: siteConfig.snsLinks[0].url,
        },
    ];

    return (
        <section
            id="contact"
            className="py-12 bg-gradient-to-b from-primary-800 to-primary-900 text-white"
        >
            <div className="section-container">
                <h2 className="section-title text-white">お問い合わせ</h2>
                <p className="text-white text-center max-w-3xl mx-auto mb-16 opacity-90">
                    サービス内容や在庫車情報、買取査定のご相談など
                    お気軽にお問い合わせください。
                </p>

                <div
                    ref={ref}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
                >
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={
                                isInView
                                    ? { opacity: 1, y: 0 }
                                    : { opacity: 0, y: 20 }
                            }
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-md text-center h-full flex flex-col border border-white/20"
                        >
                            <div className="flex justify-center mb-4">
                                {React.cloneElement(
                                    method.icon as React.ReactElement,
                                    {
                                        className: "w-12 h-12 text-white",
                                    }
                                )}
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">
                                {method.title}
                            </h3>
                            <p className="text-white/80 mb-4">
                                {method.description}
                            </p>
                            <p className="text-white font-medium text-lg mb-6">
                                {method.info}
                            </p>
                            <div className="mt-auto">
                                <a
                                    href={method.link}
                                    target={
                                        method.title === "Instagram"
                                            ? "_blank"
                                            : undefined
                                    }
                                    rel={
                                        method.title === "Instagram"
                                            ? "noopener noreferrer"
                                            : undefined
                                    }
                                    className="inline-block bg-white hover:bg-gray-100 text-primary-700 px-6 py-2 rounded-md font-medium transition-colors"
                                >
                                    {method.action}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-md max-w-3xl mx-auto border border-white/20"
                >
                    <h3 className="text-2xl font-bold mb-6 text-center text-white">
                        お問い合わせフォーム
                    </h3>

                    {formSubmitted ? (
                        <div className="text-center py-8">
                            <div className="text-white text-5xl mb-4">✓</div>
                            <h4 className="text-xl font-bold mb-2 text-white">
                                送信完了
                            </h4>
                            <p className="text-white/80">
                                お問い合わせありがとうございます。内容を確認の上、担当者より折り返しご連絡いたします。
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-white font-medium mb-2"
                                    >
                                        お名前{" "}
                                        <span className="text-red-300">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-white font-medium mb-2"
                                    >
                                        メールアドレス{" "}
                                        <span className="text-red-300">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label
                                        htmlFor="phone"
                                        className="block text-white font-medium mb-2"
                                    >
                                        電話番号
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-white font-medium mb-2"
                                    >
                                        お問い合わせ項目{" "}
                                        <span className="text-red-300">*</span>
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white"
                                    >
                                        <option
                                            value=""
                                            className="bg-primary-800"
                                        >
                                            選択してください
                                        </option>
                                        <option
                                            value="新車について"
                                            className="bg-primary-800"
                                        >
                                            新車について
                                        </option>
                                        <option
                                            value="中古車について"
                                            className="bg-primary-800"
                                        >
                                            中古車について
                                        </option>
                                        <option
                                            value="買取査定について"
                                            className="bg-primary-800"
                                        >
                                            買取査定について
                                        </option>
                                        <option
                                            value="自動車保険について"
                                            className="bg-primary-800"
                                        >
                                            自動車保険について
                                        </option>
                                        <option
                                            value="レンタカーについて"
                                            className="bg-primary-800"
                                        >
                                            レンタカーについて
                                        </option>
                                        <option
                                            value="その他"
                                            className="bg-primary-800"
                                        >
                                            その他
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-white font-medium mb-2"
                                >
                                    お問い合わせ内容{" "}
                                    <span className="text-red-300">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-2 bg-white/10 border border-white/30 rounded-md focus:outline-none focus:ring-2 focus:ring-white text-white"
                                ></textarea>
                            </div>

                            <div className="text-center">
                                <button
                                    type="submit"
                                    className="bg-white hover:bg-gray-100 text-primary-700 px-8 py-3 rounded-md font-medium transition-colors"
                                >
                                    送信する
                                </button>
                            </div>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
