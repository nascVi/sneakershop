const itemsQuery = `{
    items: allContentfulShoesOneProduct {
    edges {
      node {
        size
        price
        id
        spaceId
        updatedAt
        title
        description {
          description
          id
        }
        image{
          fixed{
            width
          }
        }
      }
    }
  }
}`

const productsQuery = `{
    products: allContentfulShoesOneProduct {
    edges {
      node {
        size
        price
        id
        spaceId
        updatedAt
        title
        description {
          description
          id
        }
        image{
          fixed{
            width
          }
        }
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { ...rest } }) => ({
    ...rest,
  }))
// const settings = { attributesToSnippet: [`excerpt:20`] }
const queries = [
  {
    query: itemsQuery,
    transformer: ({ data }) => flatten(data.items.edges),
    indexName: `Items`,
  },
  {
    query: productsQuery,
    transformer: ({ data }) => flatten(data.products.edges),
    indexName: `Products`,
  },
]
module.exports = queries
