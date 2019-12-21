import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Shoes One" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              We are concieving our e-commerce from the french west-indies...
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                Infos
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
