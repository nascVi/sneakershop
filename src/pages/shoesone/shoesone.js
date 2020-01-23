import React from "react"
import { /*Link,*/ graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
// import { GiRunningShoe } from "react-icons/gi"
import BackgroundSection from "../../components/Globals/BackgroundSection"

import snapcode from "../../images/snapcode.svg"
import whatsapp from "../../images/WhatsApp.svg"

import Map from "./map"

const shoesone = ({ data }) => (
  <Layout>
    <SEO title="Shoesone972" keywords={[`gatsby`, `application`, `react`]} />
    {/* <GiRunningShoe /> */}
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="" style="about-background" />
    <br />
    <br />
    <div className="about text-center">
      <h3 className="about-greatings text-weight-blod">
        BEL BONJOU , BIENVENUE , WELCOME  sur ShoesOne972.com <br /><i>le 1er site de destockage de sneakers en Martinique (centré)!</i>
      </h3>
      <br />
      <p className="about-text display-7">
        <span>
          <h5>SHOESONE972</h5> est une boutique en ligne spécialisée
      <br />de vente de sneakers en destockage et prenium basée en Martinique.
      <br />Ce site est géré par la société Alexandre Agbassé n° Siret: 81489520700095
      </span>
      </p>
      <p>
        <span>
          Nous vous proposons une sélection des meilleures marques de sneakers en destockage
          et en premium.
          <br />Tous nos articles sont 100% AUTHENTIQUES et sont prêts à l’envoi avec des stocks en Martinique et en France métropolitaine.
          </span>
        <br />
        <br />
        <h5>NOTRE EQUIPE</h5>
        <span>
          Nous sommes des passionnés de sneakers et nous restons à votre disposition
        <br />afin de passer vos commandes sur internet.
        </span>
        <br />
        <br />
        <h5>NOUS CONTACTER</h5>
        <span>
          Pour toute questions n’hésitez pas à nous contacter en utilisant le formulaire de contact
          <br />ou sur : <a href="mailto:contact@shoesone972.com">contact@shoesone972.com</a>. Nous vous répondrons dans de brefs délais (24h maximum).
          <br />Vous pouvez également nous contacter via Snapchat <a href=""><img src={snapcode} height="40px" width="40px" alt="snapShoesone" /></a> ou
          <a href="https://chat.whatsapp.com/K1L90FRUWeBDZqX49OqgMY"><img src={whatsapp} height="50px" width="50px" alt="whatsAppShoesone" /></a> au: <a href="tel:+596696882892">+596 696882892</a>.
          </span>
      </p>
      <p>
        <br />
        <h5>NOUS SUIVRE</h5>
        <span>
          Si vous voulez en savoir plus sur nos dernières sorties , nos achats et échanger avec nous,
          <br />vous pouvez également nous rejoindre sur nos différents réseaux sociaux (liens après la map en bas de page).
          </span>
      </p>
      <br />
      <Map />
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

export default shoesone
