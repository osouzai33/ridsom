/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    typescript: {
        // ビルド時にエラーがあってもビルドを続行
        ignoreBuildErrors: true,
    },
    eslint: {
        // ビルド時にエラーがあってもビルドを続行
        ignoreDuringBuilds: true,
    },
};

module.exports = nextConfig;
