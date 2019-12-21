import React from "react"
import { /*Link,*/ graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { GiRunningShoe } from "react-icons/gi"
import BackgroundSection from "../components/Globals/BackgroundSection"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    {/* <GiRunningShoe /> */}
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Qui est ShoesOne?!" style="about-background" />
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
        <br />
        <span>
          Progress is here to get us fast as cool, at catching the legendaries
          of our fantasies.
        </span>
        <br />
        <span>
          We share with you the best selection. treasures of the original, or
          modern flavor collections.
        </span>
      </p>
      <p>
        <span>
          Enjoy the tour, may you find the perfect match!
      </span>
      </p>
      <br />
    </div>
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "nikeB.png" }) {
      childImageSharp {
        fluid (maxHeight: 2000){
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default AboutPage
