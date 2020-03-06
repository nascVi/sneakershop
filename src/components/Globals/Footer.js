import React from "react"
import { IoLogoFacebook } from "react-icons/io"
import { IoLogoInstagram } from "react-icons/io"
import { IoLogoGithub } from "react-icons/io"
import { IoLogoWhatsapp } from "react-icons/io"
import { Link } from "gatsby"


export default function Footer() {
    return (
        <footer className="footer py-5">
            <div className="container">
                <div className="row text-yellow text-capitalize">
                    <section className="col FootLefLeg">
                    <div className="copyrights">
                        ©{new Date().getFullYear()} - <span className="footer-brand"> Shoes One 972</span> - At {` `}
                        <a className="footer-link" href="https://lpchamps.cf">lpchamps<span className="footer-link-ts">`</span></a> make
                    </div>
                    <div className="footer-soc-meds">
                        <a href="https://www.facebook.com/shoesone972"><IoLogoFacebook className="footer-Fb-med  mr-3" /></a>
                        <a href="https://www.instagram.com/shoesone972"><IoLogoInstagram className="footer-Insta-med mr-3" /></a>
                        <a href="https://github.com/nascVi/sneakershop"><IoLogoGithub className="footer-Git-med mr-3" /></a>
                        <a href="https://chat.whatsapp.com/K1L90FRUWeBDZqX49OqgMY"><IoLogoWhatsapp className="footer-Wa-med" /></a>
                    </div>
                    </section>
                    <section className="col FootCenLeg">

                        Imagin a Logo

                    </section>
                    <section className="FootRighLeg">
                        <div className="ULContent">
                            <ul>
                            <li className="row">
                                <h4>-</h4>
                                <Link to="faq">
                                <span>FAQ</span>
                                </Link>
                            </li>
                            <li className="row">
                                <h4>-</h4>
                                <Link to="/">
                                 Leg1 kzsjfmlskrgkqsjfdmklqsjfkldsqj
                                </Link>
                            </li>
                            </ul>
                        </div>
                    </section>
                </div>
            </div>
        </footer>
    )
}
