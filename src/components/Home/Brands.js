import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Title from "../Globals/Title"
// import Brand from "./Brand"
import ScrollAnimation from 'react-animate-on-scroll'

const getBrands = graphql`
  {
    brands: allContentfulShoesOneBrands {
      edges {
        node {
          title
          id
          image {
            fluid(maxHeight: 500) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          info {
            id
            info
          }
          price
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`

export default function Brands() {
  return (
    <StaticQuery
      query={getBrands}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <ScrollAnimation
                animateIn="fadeIn"
                animateOnce={true}
                initiallyVisible={false}
              >
                <Title title="Notre choix des marques" />
              </ScrollAnimation>
              <div className="row">
                {data.brands.edges.map(({ node: brand }) => {
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
