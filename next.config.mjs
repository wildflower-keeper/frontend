/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'wild-flower.s3.ap-northeast-2.amazonaws.com',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
