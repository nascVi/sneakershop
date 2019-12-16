import React from 'react';
import Img from 'gatsby-image'

export default function Product({ product }) {
    return (
        <div className="col-10 col-sm-8 col-6 col-lg-4 mx-auto my-3">
            <div className="card" style={{ minHeight: "100%" }}>
                <Img fluid={product.image.fluid} className="card-img-top" />
                <div className="card-body text-center">
                    <h6>{product.title}</h6>
                    <h6 className="text-yellow">{product.price}€</h6>
                    <div className="">
                        <h6>{product.size}</h6>
                    </div>
                    <button className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
                        data-item-id={product.id}
                        data-item-price={product.price}
                        data-item-image={product.image.fluid.src}
                        data-item-url="https://shoeso972.netlify.com/"
                        data-item-name={product.title}
                    >
                        up my cart
                    </button>
                </div>
            </div>
        </div>
    );
}
