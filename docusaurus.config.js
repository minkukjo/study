/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Harry',
  tagline: '매일 조금씩이라도 앞으로 나아가자',
  url: 'https://minkukjo.github.io',
  baseUrl: '/study/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'minkukjo', // Usually your GitHub org/user name.
  projectName: 'study', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Harry',
      logo: {
        alt: 'What is Logo?',
        src: 'img/logo.svg'
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Main'
        },
        { to: '/blog', label: 'About', position: 'left' },
        {
          href: 'https://github.com/minkukjo',
          label: 'GitHub',
          position: 'right'
        },
        {
          href: 'https://minkukjo.github.io/',
          label: 'Blog',
          position: 'right'
        }
      ]
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
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/minkukjo/study'
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl: 'https://github.com/facebook/docusaurus/edit/master/website/blog/'
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
