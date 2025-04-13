let userConfig = undefined
try {
    // try to import ESM first
    userConfig = await
    import ('./v0-user-next.config.mjs')
} catch (e) {
    try {
        // fallback to CJS import
        userConfig = await
        import ("./v0-user-next.config");
    } catch (innerError) {
        // ignore error
    }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        domains: ['localhost'],
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    experimental: {
        webpackBuildWorker: true,
        parallelServerBuildTraces: true,
        parallelServerCompiles: true,
        optimizeCss: true,
        turbo: {
            rules: {
                '*.svg': ['@svgr/webpack'],
            },
        },
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    poweredByHeader: false,
    reactStrictMode: true,
    swcMinify: true,
}

if (userConfig) {
    // ESM imports will have a "default" property
    const config = userConfig.default || userConfig

    for (const key in config) {
        if (
            typeof nextConfig[key] === 'object' &&
            !Array.isArray(nextConfig[key])
        ) {
            nextConfig[key] = {
                ...nextConfig[key],
                ...config[key],
            }
        } else {
            nextConfig[key] = config[key]
        }
    }
}

export default nextConfig