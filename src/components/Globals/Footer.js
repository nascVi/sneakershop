import React from "react"
import { IoLogoFacebook } from "react-icons/io"
import { IoLogoInstagram } from "react-icons/io"
import { IoLogoGithub } from "react-icons/io"
import { IoLogoWhatsapp } from "react-icons/io"

export default function Footer() {
    return (
        <footer className="footer py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
                        <div>
                            ©{new Date().getFullYear()} - <span className="footer-brand"> Shoes One 972</span> - At {` `}
                            <a className="footer-link" href="https://lpchamps.cf">lpchamps<span className="footer-link-ts">`</span></a> make
                        </div>
                        <div className="footer-soc-meds mx-auto col-5 py-2">
                            <a href="/"><IoLogoFacebook className="footer-Fb-med  mr-3" /></a>
                            <a href="https://www.instagram.com/shoesone972/"><IoLogoInstagram className="footer-Insta-med mr-3" /></a>
                            <a href="/"><IoLogoGithub className="footer-Git-med mr-3" /></a>
                            <a href="/"><IoLogoWhatsapp className="footer-Wa-med" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
