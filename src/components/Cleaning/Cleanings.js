import React from 'react'
import Cleaning from './Cleaning'
import Title from '../Globals/Title'
import { StaticQuery, graphql } from 'gatsby'

const getCleanings = graphql`
  {
    cleanings: allContentfulShoesOneCleaning {
        edges {
          node {
            id
            title
            price
            image {
                fluid {
                  ...GatsbyContentfulFluid_tracedSVG
                }
            }
          }
        }
    }
  }
`

export default function Cleanings() {
  return (
    <StaticQuery
      query={getCleanings}
      render={data => {
        return (
          <section className="cleanings py-5">
            <div className="container">
              <Title title="Cleanings et Techniques" />
              <div className="row">
                {data.cleanings.edges.map(({ node: cleaning }) => {
                  return <Cleaning key={cleaning.id} cleaning={cleaning} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
