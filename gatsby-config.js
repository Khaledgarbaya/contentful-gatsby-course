module.exports = {
  siteMetadata: {
    title: `Contentful eggheadio`,
    description: `This is an example of egghea.io built using Gatsby and Contentful`,
    author: `@khaked_garbaya`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sqip`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        accessToken: '1263e08307d38bcd0de7b7cee4135dafb0759bc0e4ddbb0bdfca2eb1a9b23764',
        spaceId: '869smavrbwfg'
      }
    },
    `gatsby-plugin-postcss`
  ]
}
