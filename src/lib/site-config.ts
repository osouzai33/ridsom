import { SiteConfig } from "@/types";
import {
    FaCarSide,
    FaCarAlt,
    FaMoneyBillWave,
    FaShieldAlt,
    FaCarCrash,
    FaRoad,
} from "react-icons/fa";
import {
    BsLightningCharge,
    BsPeople,
    BsGlobe,
    BsGraphUp,
} from "react-icons/bs";

export const siteConfig: SiteConfig = {
    brand: {
        name: "RIDSOM Auto",
        concept: `信頼関係を築き、安心と快適を提供するカーライフパートナー。`,
        icon: "public/img/shake_hands_with_dealer.jpeg",
        message:
            "RIDSOM Autoはお客様との絆を大切にし、幅広いサービスと豊富な知識であなたの理想のカーライフを全力サポートします。若い力と確かな経験が、あなたの未来を走り出す一台を見つけます。",
    },
    hero: {
        catchPhrase: "あなたのカーライフを、0から無限大まで。",
        subMessage: "若い力と豊富な経験で、理想の一台とサービスを。",
    },
    services: [
        {
            title: "新車販売",
            description:
                "国内主要メーカーの新車を取り扱い。豊富な知識で最適な一台を提案します。",
            icon: "FaCarSide",
        },
        {
            title: "中古車販売",
            description:
                "独自ルートによる仕入れで、価格と品質に自信あり。全国対応。",
            icon: "FaCarAlt",
        },
        {
            title: "買取",
            description:
                "全国オークションや貿易ルートを活用し、他社にはない高額査定を実現。",
            icon: "FaMoneyBillWave",
        },
        {
            title: "自動車保険代理店",
            description:
                "事故時の手続きやサポートもお任せ。保険の見直し・最適プランを提案。",
            icon: "FaShieldAlt",
        },
        {
            title: "レンタカー事業",
            description:
                "急な移動や観光に対応。定期利用から短期利用まで柔軟にご案内。",
            icon: "FaCarAlt",
        },
        {
            title: "ロードサービス",
            description: "事故・故障時も24時間対応予定。安心のサポート体制。",
            icon: "FaCarCrash",
        },
    ],
    advantages: [
        {
            title: "若い力 × 豊富な経験",
            description:
                "27歳の起業家がトヨタディーラーで培った知識とネットワークを活かし、スピーディかつ丁寧に対応。",
            icon: "BsLightningCharge",
        },
        {
            title: "ワンストップサービス",
            description:
                "販売・買取・保険・レンタカー・ロードサービスまで一括対応。トラブル時も安心。",
            icon: "BsPeople",
        },
        {
            title: "全国対応",
            description: "地域の制限なく、全国のお客様と取引可能。",
            icon: "BsGlobe",
        },
        {
            title: "独自の買取ルート",
            description:
                "全国オークション・貿易取引を駆使し、買取査定額に自信あり。",
            icon: "BsGraphUp",
        },
    ],
    flow: [
        {
            step: 1,
            title: "お問い合わせ・ご相談",
            description: "ニーズや予算、納期などを丁寧にヒアリング。",
        },
        {
            step: 2,
            title: "車両提案 / 買取査定",
            description:
                "豊富なネットワークから最適な車両を選出。査定も同時に可能。",
        },
        {
            step: 3,
            title: "ご契約・書類手続き",
            description:
                "保険やオプション等も含めてご提案。必要書類の確認・締結。",
        },
        {
            step: 4,
            title: "納車準備・整備",
            description: "専門スタッフがしっかり整備・クリーニングを実施。",
        },
        {
            step: 5,
            title: "納車",
            description: "店舗受け取りまたはご自宅へお届け。",
        },
    ],
    company: {
        companyName: "RIDSOM Auto",
        representative: "大田 聡磨",
        address: "鳥取県鳥取市幸町148番地",
        phone: "0857-29-2345",
        fax: "0857-29-2344",
        businessHours: "10:00 ~ 18:30",
        regularHoliday: "毎週月曜日、第2・3日曜日",
        email: "info@ridsom-auto.com",
        establishment: "2023年",
        businessDescription:
            "新車・中古車販売、買取、保険代理店、レンタカー、ロードサービス",
    },
    contactMethods: [
        {
            type: "form",
            description: "メールフォーム (送信先: info@ridsom-auto.com)",
        },
        {
            type: "phone",
            description: "0857-29-2345 へお電話",
        },
        {
            type: "sns",
            description: "Instagram DMでのお問い合わせ",
        },
    ],
    snsLinks: [
        {
            platform: "Instagram",
            url: "https://www.instagram.com/ridsom_auto",
        },
    ],
    copyright: "© 2023 RIDSOM Auto",
};

export const colors = {
    primary: "#3498db", // ブルー
    secondary: "#2ecc71", // グリーン
    accent: "#e74c3c", // レッド
    background: "#f5f5f5", // ライトグレー
    text: "#333333", // ダークグレー
};

export const fonts = {
    primary: "'Roboto', sans-serif",
    secondary: "'Open Sans', sans-serif",
};
