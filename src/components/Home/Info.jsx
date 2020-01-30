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
            <p className="lead text-muted mb-5">
              BEL BONJOU, BIENVENUE, WELCOME sur ShoesOne972.com,
              <span>
                <i>le 1er site de destockage de sneakers en Martinique</i>
              </span>
              ...
            </p>
            <Link to="/shoesone">
              <button className="btn text-uppercase btn-yellow">Infos</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
