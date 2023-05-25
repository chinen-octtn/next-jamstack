/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  changefreq: false,
  priority: false,
  generateIndexSitemap: false,
  autoLastmod: false,
}
