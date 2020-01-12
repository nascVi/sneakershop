const sizeQuery = `{
    allContentfulShoesOneProduct {
    edges {
      node {
        price
        size
        title
        description{
          id
          description
        }
      }
    }
  }
}`
// const flatten = arr =>
//   arr.map(({ node: { frontmatter, ...rest } }) => ({
//     ...frontmatter,
//     ...rest,
//   }))
// const settings = { attributesToSnippet: [`excerpt:20`] }
const queries = [
  // {
  //   query: sizeQuery,
  //   transformer: ({ data }) => flatten(data.pages.edges)
  // },
  {
    query: sizeQuery,
    transformer: ({ data }) => data.allContentfulShoesOneProduct.edges,
  }
]

module.exports = queries