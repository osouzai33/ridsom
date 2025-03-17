// サービス項目の型定義
export interface ServiceItem {
    title: string;
    description: string;
    icon?: string;
}

// 強み項目の型定義
export interface AdvantageItem {
    title: string;
    description: string;
    icon?: string;
}

// 利用の流れステップの型定義
export interface FlowStep {
    step: number;
    title: string;
    description: string;
}

// 会社情報の型定義
export interface CompanyInfo {
    companyName: string;
    representative: string;
    address: string;
    phone: string;
    fax?: string;
    businessHours: string;
    regularHoliday: string;
    email: string;
    establishment?: string;
    businessDescription: string;
}

// SNSリンクの型定義
export interface SnsLink {
    platform: string;
    url: string;
    icon?: string;
}

// お問い合わせ方法の型定義
export interface ContactMethod {
    type: string;
    description: string;
    icon?: string;
}

// サイト全体の設定情報
export interface SiteConfig {
    brand: {
        name: string;
        concept: string;
        icon: string;
        message: string;
    };
    hero: {
        catchPhrase: string;
        subMessage: string;
    };
    services: ServiceItem[];
    advantages: AdvantageItem[];
    flow: FlowStep[];
    company: CompanyInfo;
    contactMethods: ContactMethod[];
    snsLinks: SnsLink[];
    copyright: string;
}
