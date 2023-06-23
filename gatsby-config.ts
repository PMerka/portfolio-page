import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Pavel Měrka`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  pathPrefix: "/portfolio-page",
  plugins: [ 
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: `markdown`,
      path: `${__dirname}/src/markdown/`,
    },
    __key: "markdown"
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: `static`,
      path: `${__dirname}/static/`,
    },
    __key: "markdown"
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {},
  },
  ]
};

export default config;
