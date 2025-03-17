"use client";

import React, { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import ConceptSection from "@/components/sections/ConceptSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AdvantagesSection from "@/components/sections/AdvantagesSection";
import InventorySection from "@/components/sections/InventorySection";
import FlowSection from "@/components/sections/FlowSection";
import CompanySection from "@/components/sections/CompanySection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
    // ページ読み込み時のスクロール位置を先頭に設定
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <Layout>
            <HeroSection />
            <ConceptSection />
            <ServicesSection />
            <AdvantagesSection />
            <InventorySection />
            <FlowSection />
            <CompanySection />
            <ContactSection />
        </Layout>
    );
}
