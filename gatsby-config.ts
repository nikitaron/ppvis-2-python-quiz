import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Python Quiz`,
    siteUrl: `https://brainforge.xyz`
  },
  plugins: ["gatsby-plugin-mdx", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "tests",
      "path": "./src/tests/"
    }
  },
  "gatsby-transformer-yaml-full"
  ]
};

export default config;
