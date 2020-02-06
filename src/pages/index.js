import React from "react"
import { /*StaticQuery,*/ graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { GiRunningShoe } from "react-icons/gi"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"
import Brands from "../components/Brands"
import Contact from "../components/Home/Contact"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Accueil" keywords={[`gatsby`, `application`, `react`]} />
      {/* <GiRunningShoe /> */}
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="shoesone972.com"
        styleClass="default-background"
        display="inherit"
      />
      <Brands brands={data.brands} />
      <Menu items={data.menu} />
      <Info />
      <Contact />
    </Layout>
  )
}

export const query = graphql`
  query {
    img: file(relativePath: { eq: "sneakersC.png" }) {
      childImageSharp {
        fluid(maxHeight: 2000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    menu: allContentfulShoesOneItem {
      edges {
        node {
          id
          title
          size
          description {
            id
            description
          }
          price
          category
          image {
            fluid(maxHeight: 15) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
