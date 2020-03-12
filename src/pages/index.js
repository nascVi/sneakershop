import React from "react"
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
import { /*StaticQuery,*/ graphql } from "gatsby"
import BackgroundSection from "../components/Globals/BackgroudSection"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"
import Brands from "../components/Home/Brands"
import Contact from "../components/Home/Contact"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Accueil" keywords={[`gatsby`, `application`, `react`]} />
    {/* <GiRunningShoe /> */}
    {/* <Jumbotron /> */}
    
    {/* Former JSX */}
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
    {/* Former JSX */}
{/* 
    <MDBContainer>
      <MDBRow>
        <MDBCol size="auto" md="8">
          <h1 className="pb-3">Hi people</h1>
          <p className="lead grey-text">
            Welcome to your new Gatsby site. Kick off your next, great Gatsby
            project with this default starter. This barebones starter ships with
            the main Gatsby configuration files you might need.
          </p>
          <h4 className="py-3">
            This starter is configured for the following;
          </h4>
          <div>
            <MDBBadge size="lg" color="dark" className="mr-3 mb-3 p-2">
              Sass Ready
            </MDBBadge>
            <MDBBadge size="lg" color="dark" className="mr-3 mb-3 p-2">
              Font Awesome Icons
            </MDBBadge>
            <MDBBadge size="lg" color="dark" className="mr-3 mb-3 p-2">
              Progressive Web App
            </MDBBadge>
          </div>
          <div className="py-5">
            <Link to="/page-2/">
              <MDBBtn color="primary" outline>
                Go to page 2
                <MDBIcon icon="caret-right" className="ml-2" />
              </MDBBtn>
            </Link>
          </div>
        </MDBCol>
        <MDBCol size="auto" md="4" className="d-none d-md-block">
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer> */}
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
