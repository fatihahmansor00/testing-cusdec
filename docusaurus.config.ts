import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://fatihahmansor00.github.io/testing-cusdec/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/testing-cusdec/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'fatihahmansor00', // Usually your GitHub org/user name.
  projectName: 'testing-cusdec', // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en','ms'],
    path:'i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        path: 'en',
      },
      my: {
        label: 'Bahasa Malaysia',
        direction: 'ltr',
        htmlLang: 'ms-MY',
        path: 'my'
      }
    }
  },
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/tree/main/demo",
          docItemComponent: "@theme/ApiItem",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "GTM-THVM29S",
          anonymizeIP: false,
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          crud: {
            specPath: "examples/crud.yaml",
            outputDir: "docs/crud",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          mycieds: {
            specPath: "examples/swagger.json",
            outputDir: "docs/mycieds",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
          myciedscors: {
            specPath: "https://localhost:44319/swagger/v1/swagger.json",
            outputDir: "docs/myciedscors",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        }
      },
    ]
  ],
  themes: ["docusaurus-theme-openapi-docs"], // export theme components

  themeConfig: {
    announcementBar: {
      id: 'support_us',
      content:
        'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
      backgroundColor: '#fafbfc',
      textColor: '#091E42',
      isCloseable: true,
    },
    colorMode: {
      disableSwitch: false,
    },
    docs:{
    sidebar: {
      autoCollapseCategories: true,
      hideable: true,
    },
  },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
         {
           type: 'docSidebar',
           sidebarId: 'tutorialSidebar',
           position: 'left',
           label: 'Tutorial',
         },
         {to: '/blog', label: 'Blog', position: 'left'},
         { to: '/swagger', label: 'API Docs', position: 'left' },
         {
          type: 'docSidebar',
          sidebarId: 'mycieds',
          label: "MyCIEDS",
          position: 'left',
        },
        {
          type: 'docSidebar',
          sidebarId: 'crud',
          label: "CRUD",
          position: 'left',
        },
         {
           href: 'https://github.com/facebook/docusaurus',
           label: 'GitHub',
           position: 'right',
        },
        {
            type: "localeDropdown",
            position: "left",
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    api: {
      authPersistance: "localStorage",
      serverVariablesPersistance: "localStorage",
    },
  } satisfies Preset.ThemeConfig, 
};

export default config;
