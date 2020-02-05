import React from 'react'
import Title from '../../components/Globals/Title'
import { StaticQuery, graphql } from 'gatsby'
import Cleaning from '../../components/Cleaning'

const getServices = graphql`
  {
    cleanings: allContentfulShoesOneCleaning {
        edges {
          node {
            title
            video {
              file {
                url
              }
            }
            description {
              description
              id
            }
            image {
              fluid(maxHeight: 250) {
                tracedSVG
              }
            }
          }
        }
    }
  }
`

export default function cleaning() {
    return (
    <StaticQuery
    query={getServices}
    render={data => {
        <section className="py-5">
        <div className="container">
          <Title title="Les Services et Techniques" />
          <div className="row">
            {data.cleanings.edges.map(({ node: cleaning }) => {
              return <Cleaning key={cleaning.id} product={cleaning} />
            })}
          </div>
        </div>
      </section>
    }}
    />
  )
}
