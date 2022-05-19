import type { GatsbyConfig } from "gatsby";

import fs from 'fs';
import path from 'path';

const loadAllFiles = (rootDir: string) => {
  if (fs.existsSync(path.resolve(rootDir, 'dump.yaml'))) {
    fs.rmSync(path.resolve(rootDir, 'dump.yaml'));
  }

  let text = "";

  fs.readdirSync(rootDir).forEach(file => {
    text += fs.readFileSync(path.resolve(rootDir, file)) + "\n---\n";
  });

  fs.writeFileSync(path.resolve(rootDir, 'dump.yaml'), text);
}

loadAllFiles(path.resolve(__dirname, 'src', 'tests'));


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
