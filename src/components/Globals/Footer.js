import React from "react"

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
            <h6>
              © {new Date().getFullYear()}, At {` `}
              <a href="https://lpchamps.cf">lpchamps</a> make
            </h6>
          </div>
        </div>
      </div>
    </footer>
  )
}
