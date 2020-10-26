// .vuepress/config.js

module.exports = {
  title: 'Recettes',
  description: 'Recettes familiales',
  themeConfig: {
    repo: 'tintamarre/recettes',
    repoLabel: 'Contribute!',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    smoothScroll: true,
    displayAllHeaders: true, // Default: false
    nextLinks: false,
    prevLinks: false,
    // sidebar: [
    //   {
    //     title: 'Plats',   // required
    //     path: '/recettes/plats/',      // optional, link of the title, which should be an absolute path and must exist
    //     collapsable: false, // optional, defaults to true
    //     sidebarDepth: 1,    // optional, defaults to 1
    //     children: [
    //       '/recettes/plats/boulets'
    //     ]
    //   },
    //   {
    //     title: 'Desserts',
    //     children: [ /* ... */ ],
    //     initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
    //   }
    // ]
  },
};
