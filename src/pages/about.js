import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { GiRunningShoe } from "react-icons/gi"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    {/* <GiRunningShoe /> */}
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Who we are!"
    />
    <br />
    <br />
    <div className="about text-center">
      <h4 className="about-greatings text-weight-blod">
        Warm welcome to the shop!
      </h4>
      <br />
      <p className="about-text display-7">
        <span>
          We came up with our brand new sneakers e-commerce with passion for
          brands.
        </span>
      </p>
      <p>
        <span>
          they designed our past 70's, 80's, 90's, Millenium, and now running,
          running, running.
        </span>
      </p>
      <p>
        <span>
          Progress is here to get us fast as cool, at catching the legendaries
          of our fantasies.
        </span>
      </p>
      <p>
        <span>
          We share with you the best selection. treasures of the original, or
          modern flavor collections
        </span>
      </p>
      <br />
    </div>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "jForce1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
