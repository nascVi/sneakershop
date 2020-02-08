import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Shoesone972" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead mb-5 font-weight-light">
              BEL BONJOU, BIENVENU sur shoesone972.com
              <br />
              le 1er site de destockage de sneakers en Martinique
            </p>
            <Link to="/shoesone">
              <button className="btn text-uppercase btn-yellow font-weight-bold">Infos</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
