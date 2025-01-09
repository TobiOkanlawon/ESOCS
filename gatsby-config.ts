import type { GatsbyConfig } from "gatsby";
import path from "path";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "The Eternal Sacred Order of The Cherubim & Seraphim",
    siteUrl: `https://www.yourdomain.tld`,
    description: `The Web homepage of The Eternal Sacred Order of the Cherubim & Seraphim`,
    author: `Everniti Limited`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-source-filesystem",
      options: {
	name: "images",
	path: path.join(__dirname, "src", "images"),
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "https://super-vault.esocs.net/graphql",
        hostingWPCOM: false,
        useACF: true,
        develop: {
          hardCacheMediaFiles: true,
        },
      },
    },
  ],
};

export default config;

// schema: {
//   typePrefix: "Wp",
// },
