import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import { GiRunningShoe } from "react-icons/gi"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"
import Products from "../components/Home/Products";
import Contact from "../components/Home/Contact";

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
      <Products />
      <Menu items={data.menu} />
      <Info />
      <Contact />
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
          image{
            fluid(maxHeight: 500){
            ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
  
`;

export default IndexPage;
