const blogQuery = `
{
  allContentfulShoesOneProduct {
    edges {
      node {
        id
        title
        description {
          description
        }
        price
        size
        category
        image {
          fixed(width: 150, height: 150) {
            src
          }
        }
      }
    }
  }
}`

const queries = [
  {
    query: blogQuery,
    transformer: ({ data }) => data.allContentfulShoesOneProduct.edges.node
  },
]

module.exports = queries
