import React from "react"
import { /*Link,*/ graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { GiRunningShoe } from "react-icons/gi"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/* <GiRunningShoe /> */}
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Shoes One 972"
    />
    <Info />
    <Menu
      items={data.menu}
    />
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "sneakersC.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    menu: allContentfulShoesOneItem {
      edges{
        node {
          id
          title
          size
          description{
            description
            }
          price
          category
          image{
            fixed(width: 50, height: 50){
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }

`

export default IndexPage
