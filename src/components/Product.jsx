import React from 'react';
import { Link } from "gatsby"
import Img from 'gatsby-image'

export default function Product({ product }) {
    return (
        <div className="col-10 col-sm-8 col-6 col-lg-4 mx-auto my-3">
            <div className="card" style={{ minHeight: "100%" }}>
                <a href="/maboutique/${product}" className="image-link">
                    <Img fluid={product.image.fluid} className="card-img-top" />
                </a>
                <div className="card-body text-center">
                    <h6>{product.title}</h6>
                    <h6 className="text-yellow">{product.price}€</h6>
                    <div className="">
                        <h6>{product.size}</h6>
                    </div>
                    <button className="btn btn-yellow mt-3 text-capitalize"
                        data-item-id={product.id}
                        data-item-image={product.image.fluid.src}
                        data-item-price={product.price}
                        data-item-url="https://shoeso972.netlify.com/"
                        data-item-name={product.title}
                    >
                        Plus
                    </button>
                </div>
            </div>
        </div>
    );
}
