/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'tortacms-back.vercel.app',
                port: ''
            }
        ]
    }
}

module.exports = nextConfig
