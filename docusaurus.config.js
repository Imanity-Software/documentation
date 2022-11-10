// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Imanity Docs',
  tagline: 'Dinosaurs are cool',
  url: 'https://docs.imanity.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Imanity-Software', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/Imanity-Software/documentation/edit/main',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Imanity Docs',
        logo: {
          alt: 'Imanity Software Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://go.imanity.dev/discord',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://go.imanity.dev/shop',
            label: 'Shop',
            position: 'right',
          },
          {
            href: 'https://github.com/Imanity-Software',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Imanity Software Logo',
          src: 'img/logo_copped.png',
          href: 'https://imanity.dev',
          height: 60,
        },
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'ImanitySpigot',
                to: '/category/imanityspigot',
              },
              {
                label: 'Frequently Asked Question',
                to: '/category/faq',
              },
            ],
          },
          {
            title: 'Products',
            items: [
              {
                label: 'ImanitySpigot',
                href: 'https://imanity.dev/spigot',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/GBZKR3n',
              },
              {
                label: 'Help',
                href: 'https://discord.gg/GBZKR3n',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UChj3XcHz-Mls10mjFeSUZJA',
              },
              {
                label: 'Github',
                href: 'https://github.com/Imanity-Software',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Imanity Software`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['java', 'groovy'],
      },
    }),
};

module.exports = config;
