import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default function brand({ brand }) {
  return (
    <div className="col-10 col-sm-8 col-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Link href="/maboutique/${brand.title}" className="image-link">
          <Img fluid={brand.image.fluid} className="card-img-top" />
        </Link>
        <div className="card-body text-center">
          <h6>{brand.title}</h6>
          <h6 className="text-yellow">A partir de {brand.price}€</h6>
          <div className="">
            <h6>{brand.date}</h6>
          </div>
          <button
            className="btn btn-yellow mt-3 text-capitalize"
            data-item-url="https://shoeso972.netlify.com/"
          >
            Juste pour voir
          </button>
        </div>
      </div>
    </div>
  )
}
