import React from 'react';
import { StaticQuery, graphql } from 'gatsby'

const getQuery = graphql`
    {
        products: allContentfulShoesOneProduct{
            edges{
                node{
                id
                title
                price
                size
                    image{
                    fluid(maxHeight:500){
                    ...GatsbyContentfulFluid_tracedSVG
                    }
                    }
                }
            }
        }
    }
`

export default function Brands() {
    return (
        <>
            <StaticQuery>
                Here are displayed the brands in our account
            </StaticQuery>
        </>
    );
}
