/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://snappyapp.vercel.app/',
  generateRobotsTxt: true,
};
