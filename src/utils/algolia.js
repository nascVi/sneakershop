const itemQuery = `{
items: allContentfulShoesOneItem{
    edges {
      node {
        id
        title
        size
        description {
          description
        }
        category
        price
        createdAt(fromNow: true)
      }
    }
  }
}`

const productQuery = `{
products: allContentfulShoesOneProduct{
    edges {
      node {
        id
        title
        size
        description {
          description
        }
        category
        price
        createdAt(fromNow: true)
      }
    }
  }
}`

const flatten = arr =>
  arr.map(({ node: { ...rest } }) => ({
    ...rest,
  }))
const settings = {
  attributesToSnippet: [
    'title',
    'size',
    'category',
    'createdAt'
  ]
}
const queries = [
  {
    query: itemQuery,
    transformer: ({ data }) => flatten(data.items.edges),
    indexName: `Items`,
    settings,
  },
  {
    query: productQuery,
    transformer: ({ data }) => flatten(data.products.edges),
    indexName: `Products`,
    settings,
  }
]

module.exports = queries
