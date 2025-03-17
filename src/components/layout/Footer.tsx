"use client";

import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { siteConfig } from "@/lib/site-config";
import { FaInstagram } from "react-icons/fa";

const footerLinks = [
    { id: "concept", label: "コンセプト" },
    { id: "services", label: "サービス" },
    { id: "advantages", label: "選ばれる理由" },
    { id: "inventory", label: "在庫情報" },
    { id: "flow", label: "ご利用の流れ" },
    { id: "company", label: "会社概要" },
    { id: "contact", label: "お問い合わせ" },
];

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* ブランド情報 */}
                    <div className="md:col-span-1">
                        <h2 className="text-xl font-bold mb-4">
                            {siteConfig.brand.name}
                        </h2>
                        <p className="text-sm text-gray-300 mb-4">
                            {siteConfig.brand.concept}
                        </p>
                        <div className="flex space-x-4 text-2xl">
                            {siteConfig.snsLinks.map((sns, index) => (
                                <a
                                    key={index}
                                    href={sns.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-primary-300 transition-colors"
                                    aria-label={sns.platform}
                                >
                                    {sns.platform === "Instagram" && (
                                        <FaInstagram />
                                    )}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* サイトマップ */}
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-medium mb-4">
                            サイトマップ
                        </h3>
                        <ul className="space-y-2">
                            {footerLinks.map((link) => (
                                <li key={link.id}>
                                    <ScrollLink
                                        to={link.id}
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        className="text-gray-300 hover:text-primary-300 transition-colors cursor-pointer text-sm"
                                    >
                                        {link.label}
                                    </ScrollLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 会社情報 */}
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-medium mb-4">会社情報</h3>
                        <address className="text-sm text-gray-300 not-italic">
                            <p className="mb-2">{siteConfig.company.address}</p>
                            <p className="mb-2">
                                TEL: {siteConfig.company.phone}
                            </p>
                            <p className="mb-2">
                                FAX: {siteConfig.company.fax}
                            </p>
                            <p className="mb-2">
                                営業時間: {siteConfig.company.businessHours}
                            </p>
                            <p className="mb-2">
                                定休日: {siteConfig.company.regularHoliday}
                            </p>
                        </address>
                    </div>

                    {/* お問い合わせ */}
                    <div className="md:col-span-1">
                        <h3 className="text-lg font-medium mb-4">
                            お問い合わせ
                        </h3>
                        <p className="text-sm text-gray-300 mb-4">
                            サービス内容や在庫車情報、買取査定のご相談などお気軽にお問い合わせください。
                        </p>
                        <ScrollLink
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="btn-primary text-sm"
                        >
                            お問い合わせフォーム
                        </ScrollLink>
                    </div>
                </div>

                {/* 下部コピーライト */}
                <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400">
                        {siteConfig.copyright}
                    </p>
                    <div className="mt-4 md:mt-0">
                        <a
                            href="#"
                            className="text-sm text-gray-400 hover:text-primary-300 transition-colors"
                        >
                            プライバシーポリシー
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
