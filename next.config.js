const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: !!process.env.BUNDLE_ANALYZE,
})

module.exports = bundleAnalyzer({
  images: {
    domains: ['cdn11.bigcommerce.com'],
  },
  i18n: {
    locales: ['en-US', 'es', 'pt-BR'],
    defaultLocale: 'pt-BR',
  },
  rewrites() {
    return [
      {
        source: '/checkout',
        destination: '/api/bigcommerce/checkout',
      },
      {
        source: '/logout',
        destination: '/api/bigcommerce/customers/logout?redirect_to=/',
      },
      // Rewrites for /search
      {
        source: '/search/designers/:name',
        destination: '/search',
      },
      {
        source: '/search/designers/:name/:category',
        destination: '/search',
      },
      {
        // This rewrite will also handle `/search/designers`
        source: '/search/:category',
        destination: '/search',
      },
    ]
  },
})
