module.exports = {
  title: "Namek",
  tagline: "Documentation and Guides",
  url: "https://docs.uniswap.org/",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  favicon: "img/favicon.png",
  organizationName: "Namek", // Usually your GitHub org/user name.
  projectName: "namek-docs", // Usually your repo name.
  themeConfig: {
    // hideableSidebar: true,
    prism: {
      additionalLanguages: ["solidity"],
    },
    algolia: {
      apiKey: "32465e2ab6f7554ff014e64c0d92171c",
      indexName: "v3-docs",
      appId: "S0IDD0YGLZ"
    },
    navbar: {
      title: "Namek Documentation",
      logo: {
        alt: "Namekku",
        src: "img/uni_dark_icon.svg",
      },
      items: [
        {
          label: 'Protocol',
          position: 'left',
          to: '/'
        },
        {
          label: 'SDK',
          position: 'left',
          to: 'SDK/'
        },
        {
          label: "Whitepaper",
          to: "https://uniswap.org/whitepaper-v3.pdf",
          position: "right",
        },
        {
          href: "https://github.com/uniswap/uniswap-docs",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://github.com/Uniswap/uniswap-v3-sdk",
          label: "SDK",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Ecosystem",
          items: [
            {
              label: "Home",
              href: "https://uniswap.org/",
            },
            {
              label: "App",
              href: "https://app.uniswap.org/",
            },
            {
              label: "Analytics",
              href: "https://info.uniswap.org/home",
            },
          ],
        },
        {
          title: "Developers",
          items: [
            {
              label: "Bug Bounty",
              href: "https://github.com/Uniswap/uniswap-v3-periphery/blob/main/bug-bounty.md",
            },
            {
              label: "GitHub",
              href: "https://github.com/uniswap",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Governance",
              href: "https://gov.uniswap.org/",
            },
            {
              label: "Discord",
              href: "https://discord.gg/FCfyBSbCU5",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/Uniswap",
            },
            {
              label: "Blog",
              href: "https://uniswap.org/blog/",
            },
          ],
        },
      ],
      // copyright: `unlicensed`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          id: "versionthree",
          path: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          includeCurrentVersion: true,
          editUrl: "https://github.com/namek-finance/namek-docs/tree/main/",
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
          customCss2: require.resolve("./src/css/colors.css"),
        },
      },
    ],
  ],
};
