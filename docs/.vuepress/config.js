// .vuepress/config.js

module.exports = {
  plugins: ['@vuepress/last-updated'],
  title: 'Recettes familiales',
  description: 'Recettes de cuisine familiales traversant les générations la famille',
  themeConfig: {
    repo: 'tintamarre/recettes',
    repoLabel: 'Contribute!',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    smoothScroll: true,
    displayAllHeaders: true, // Default: false
    nextLinks: true,
    prevLinks: true,
  },
};
