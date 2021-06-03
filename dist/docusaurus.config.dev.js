"use strict";

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '도전하는 개발자 조민국',
  tagline: '매일 조금씩이라도 앞으로 나아가자',
  url: 'https://minkukjo.github.io',
  baseUrl: '/study/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'minkukjo',
  // Usually your GitHub org/user name.
  projectName: 'study',
  // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Home',
      items: [{
        type: 'doc',
        docId: 'intro',
        position: 'left',
        label: 'Docs'
      }, {
        to: '/blog',
        label: 'Blog',
        position: 'left'
      }, {
        to: '/portfolio',
        label: 'Portfolio',
        position: 'left'
      }, {
        href: 'https://github.com/minkukjo',
        label: 'GitHub',
        position: 'right'
      }, {
        href: 'https://minkukjo.github.io/',
        label: 'Blog',
        position: 'right'
      }]
    },
    prism: {
      additionalLanguages: ['java']
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Tutorial',
      //         to: '/docs/intro'
      //       }
      //     ]
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus'
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus'
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus'
      //       }
      //     ]
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: '/blog'
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus'
      //       }
      //     ]
      //   }
      // ],
      copyright: "Copyright \xA9 ".concat(new Date().getFullYear(), " Harry's Study, Inc. Built with Docusaurus.")
    }
  },
  presets: [['@docusaurus/preset-classic', {
    docs: {
      sidebarPath: require.resolve('./sidebars.js'),
      editUrl: 'https://github.com/minkukjo/study/edit/master/',
      showLastUpdateTime: true
    },
    blog: {
      showReadingTime: true,
      editUrl: 'https://github.com/minkukjo/study/edit/master/'
    },
    theme: {
      customCss: require.resolve('./src/css/custom.css')
    }
  }]]
};