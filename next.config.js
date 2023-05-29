/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    appDir: true,
    basePath: '',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                port: '',
                pathname: '/u/**',
            }
        ]
    },
    swcMinify: true,
}

module.exports = {
    ...nextConfig,
    env: {
        GITHUB_ID: process.env.GITHUB_ID,
        GITHUB_SECRET: process.env.GITHUB_SECRET
    },

}
