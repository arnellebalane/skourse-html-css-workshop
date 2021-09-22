const path = require('path');
const { description } = require('../../package');

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'HTML and CSS Workshop',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Ref: https://vuepress.vuejs.org/config/#dest
   */
  dest: path.resolve(__dirname, '../../dist'),

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    search: false,
    nav: [],
    sidebar: [
      {
        title: 'Getting started',
        path: '/getting-started/',
        collapsable: false,
        children: [
          '/getting-started/',
          '/getting-started/setup-local',
          '/getting-started/setup-codesandbox',
          '/getting-started/personal-portfolio'
        ]
      },
      {
        title: 'HTML',
        path: '/html/',
        collapsable: false,
        children: ['/html/', '/html/our-first-page']
      }
    ]
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom']
};
