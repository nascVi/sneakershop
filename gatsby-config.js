const queries = require("./src/utils/algolia")
require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Shoesone Gatsby + MDBReact version`,
    description: `Shoes One est un sneakers shop pour les amoureux des sneakers.`,
    author: `@lpchamps and @zlidev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        // name: `backgrounds`,
        // path: `${__dirname}/src/bg`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-snipcart",
      options: {
        apiKey: process.env.SNIPCART_APIKEY,
        js: "https://cdn.snipcart.com/themes/v3.0.14/default/snipcart.js",
        styles: "https://cdn.snipcart.com/themes/v3.0.14/default/snipcart.css",
        autopop: false,
        credit_cards: ["visa", "mastercard", "amex"],
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        queries,
        chunkSize: 10000,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Shoesone`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Wlogo.svg`, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
