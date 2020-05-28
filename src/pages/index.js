import React  from 'react'
import { Link } from "gatsby"
import {
  MDBContainer,
  MDBBtn,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBBadge,
} from "mdbreact"


import Layout from "../components/layout"
import SEO from "../components/seo"

// former version  imports
import { StaticQuery, graphql } from "gatsby"
import BackgroundSection from "../components/Globals/BackgroudSection"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"
import Brands from "../components/Home/Brands"
import Contact from "../components/Home/Contact"

const IndexPage = ({ data }) => (
  <Layout>
  <SEO title="Accueil" keywords={[`gatsby`, `application`, `react`]} />
   <div>
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
   </div>
  </Layout>
)

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
