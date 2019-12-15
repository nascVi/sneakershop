import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { GiRunningShoe } from "react-icons/gi"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"
import Products from "../components/Home/Products";


const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {/* <GiRunningShoe /> */}
      <BackgroundSection
        img={data.img.childImageSharp.fluid}
        title="Shoes One 972"
        styleClass="default-background"
      />
      <Info />
      <Menu items={data.menu} />
      <Products />
    </Layout>
  );
};

export const query = graphql`
  query {
    img: file(relativePath: { eq: "sneakersC.png" }) {
      childImageSharp {
        fluid {
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
            description
          }
          price
          category
          image {
            fixed(width:150, height: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
