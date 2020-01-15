const pageQuery = `{
pages: allContentfulShoesOneProduct {
    edges {
      node {
        title
        description {
          id
          description
        }
        price
        size
      }
    }
  }
}`
const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))
// const settings = { attributesToSnippet: [`excerpt:20`] }
const queries = [
  // {
  //   query: sizeQuery,
  //   transformer: ({ data }) => flatten(data.pages.edges)
  // },
  {
    query: pageQuery,
    transformer: ({ data }) => flatten(data.pages.edges),
  }
]

module.exports = queries
