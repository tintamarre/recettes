// .vuepress/config.js

module.exports = {
  title: 'Recettes',
  description: 'Recettes familiales',
  themeConfig: {
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'tintamarre/recettes',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',
    // defaults to false, set to true to enable
    editLinks: true,
    smoothScroll: true,
    displayAllHeaders: true, // Default: false
    // default value is true. Set it to false to hide next page links on all pages
    nextLinks: false,
    // default value is true. Set it to false to hide prev page links on all pages
    prevLinks: false,
    sidebar: [
      {
        title: 'Plats',   // required
        path: '/recettes/plats/',      // optional, link of the title, which should be an absolute path and must exist
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/recettes/plats/boulets'
        ]
      },
      {
        title: 'Desserts',
        children: [ /* ... */ ],
        initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
      }
    ]
  },
};
