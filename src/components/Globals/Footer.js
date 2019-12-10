import React from "react"

export default function Footer() {
    return (
        <footer className="footer py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
                        <h7>
                            ©{new Date().getFullYear()} - <span className="footer-brand"> Shoes One 972</span> - At {` `}
                            <a className="footer-link" href="https://lpchamps.cf">lpchamps<span className="footer-link-ts">`</span></a> make
                        </h7>
                    </div>
                </div>
            </div>
        </footer>
    )
}
