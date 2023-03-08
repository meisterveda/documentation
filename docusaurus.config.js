// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Meisterveda Documentation",
  tagline:
    "Meisterveda Knowledge-base. You can find code-snippets, technical documentation, cheat-sheets, templates and command references for tools and technologies.",
  url: "https://documentation.meisterveda.com/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "meisterveda", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "code-snippets",
        path: "code-snippets",
        routeBasePath: "code-snippets",
        sidebarPath: require.resolve("./sidebarcodesnippets.js"),
      }),
    ],
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "cheat-sheets",
        path: "cheat-sheets",
        routeBasePath: "cheat-sheets",
        sidebarPath: require.resolve("./sidebarcheatsheets.js"),
      }),
    ],
    [
      "content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "templates",
        path: "templates",
        routeBasePath: "templates",
        sidebarPath: require.resolve("./sidebartemplates.js"),
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "My Site",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documents",
          },
          {
            to: "/code-snippets/intro",
            docId: "intro",
            label: "Code-Snippets",
            position: "left",
          },
          {
            to: "/cheat-sheets/intro",
            docId: "intro",
            label: "Cheat-Sheets",
            position: "left",
          },
          {
            to: "/templates/intro",
            docId: "intro",
            label: "Templates",
            position: "left",
          },
          {
            href: "https://github.com/meisterveda/documentation",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
              {
                label: "Code-Snippets",
                to: "/code-snippets/intro",
              },
              {
                label: "Cheat-Sheets",
                to: "/cheat-sheets/intro",
              },
              {
                label: "Templates",
                to: "/templates/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/users/10208401/gustavo-cabezal",
              },
              // {
              //   label: "Discord",
              //   href: "https://discordapp.com/invite/docusaurus",
              // },
              {
                label: "Twitter",
                href: "https://twitter.com/Meistervedasys",
              },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/in/gustavo-cabezal-sys/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Portfolio",
                href: "https://meisterveda.com",
              },
              {
                label: "GitHub",
                href: "https://github.com/meisterveda",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Meisterveda, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
