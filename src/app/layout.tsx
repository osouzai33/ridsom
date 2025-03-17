import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "RIDSOM Auto | カーライフパートナー",
    description:
        "RIDSOM Autoはお客様との絆を大切にし、幅広いサービスと豊富な知識であなたの理想のカーライフを全力サポート。若い力と確かな経験が、あなたの未来を走り出す一台を見つけます。",
    keywords:
        "中古車, 新車販売, 車買取, 自動車保険, ロードサービス, 鳥取, カーライフ",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
