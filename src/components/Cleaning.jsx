import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export default function Cleaning({ cleaning }) {
  return (
    <div className="col-10 col-sm-8 col-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Link href="/cleanings/${cleaning.title}" className="image-link">
          {/* <Img fluid={cleaning.image.fluid} className="card-img-top" /> */}
        </Link>
        <div className="card-body text-center">
          <h6>{cleaning.title}</h6>
          <h6 className="text-yellow">{cleaning.price}€</h6>
          <div className="">
            <h6>{cleaning.type}</h6>
          </div>
          <button
            className="btn btn-yellow mt-3 text-capitalize"
            data-item-id={cleaning.id}
            // data-item-image={cleaning.image.fluid.src}
            data-item-price={cleaning.price}
            data-item-url="https://shoeso972.netlify.com/"
            data-item-name={cleaning.title}
          >
            Instagram 4 now!
          </button>
        </div>
      </div>
    </div>
  )
}
