"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
    { id: "concept", label: "コンセプト" },
    { id: "services", label: "サービス" },
    { id: "advantages", label: "選ばれる理由" },
    { id: "inventory", label: "在庫情報" },
    { id: "flow", label: "ご利用の流れ" },
    { id: "company", label: "会社概要" },
    { id: "contact", label: "お問い合わせ" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // モバイルメニューのトグル
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
            }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* ロゴ */}
                <ScrollLink
                    to="hero"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="cursor-pointer"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-xl md:text-2xl font-bold"
                    >
                        <span
                            className={`${
                                isScrolled ? "text-primary-600" : "text-white"
                            }`}
                        >
                            {siteConfig.brand.name}
                        </span>
                    </motion.div>
                </ScrollLink>

                {/* デスクトップナビゲーション */}
                <nav className="hidden md:flex space-x-6 items-center">
                    {navItems.map((item) => (
                        <ScrollLink
                            key={item.id}
                            to={item.id}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className={`${
                                isScrolled
                                    ? "text-gray-800 hover:text-primary-500"
                                    : "text-white hover:text-primary-200"
                            } cursor-pointer transition-colors font-medium`}
                        >
                            {item.label}
                        </ScrollLink>
                    ))}
                    <ScrollLink
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="btn-primary ml-4"
                    >
                        お問い合わせ
                    </ScrollLink>
                </nav>

                {/* モバイルメニューボタン */}
                <button
                    className="md:hidden text-2xl focus:outline-none"
                    onClick={toggleMobileMenu}
                    aria-label={
                        mobileMenuOpen ? "メニューを閉じる" : "メニューを開く"
                    }
                >
                    {mobileMenuOpen ? (
                        <FaTimes
                            className={
                                isScrolled ? "text-gray-800" : "text-white"
                            }
                        />
                    ) : (
                        <FaBars
                            className={
                                isScrolled ? "text-gray-800" : "text-white"
                            }
                        />
                    )}
                </button>
            </div>

            {/* モバイルメニュー */}
            <motion.div
                initial={false}
                animate={{
                    height: mobileMenuOpen ? "auto" : 0,
                    opacity: mobileMenuOpen ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className={`md:hidden overflow-hidden bg-white shadow-lg`}
            >
                <div className="container mx-auto px-4 py-3">
                    <div className="flex flex-col space-y-4">
                        {navItems.map((item) => (
                            <ScrollLink
                                key={item.id}
                                to={item.id}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="text-gray-800 hover:text-primary-500 py-2 font-medium"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.label}
                            </ScrollLink>
                        ))}
                        <ScrollLink
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="btn-primary text-center"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            お問い合わせ
                        </ScrollLink>
                    </div>
                </div>
            </motion.div>
        </header>
    );
}
