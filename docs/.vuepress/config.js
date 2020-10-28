// .vuepress/config.js

module.exports = {
  plugins: ['@vuepress/last-updated', '@vuepress/back-to-top'],
  title: 'Recettes familiales',
  description: 'Recettes de cuisine familiales traversant les générations la famille',
  'base': 'recettes', 
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
