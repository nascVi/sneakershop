import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBListGroup, MDBListGroupItem } from "mdbreact";

import { IoLogoFacebook } from "react-icons/io"
import { IoLogoInstagram } from "react-icons/io"
import { IoLogoGithub } from "react-icons/io"
import { IoLogoWhatsapp } from "react-icons/io"
import { Link } from "gatsby"
import logo from '../../images/logo.svg'

const Footer = () => {
    return (
        <MDBFooter color="black" className="footer font-small pt-4 mt-4">
            <br />
            <MDBContainer fluid className="container text-center text-md-left">
                <MDBRow className="FContent">
                    <MDBCol className="FLogo" md="3">
                        <img src={logo} width="180" heihgt="110" />
                    </MDBCol>
                    <MDBCol className="footer-soc-meds" md="5">
                        <h5 className="title">Nous sommes aussi @:</h5>
                        <a href="https://www.facebook.com/shoesone972"><IoLogoFacebook className="footer-Fb-med  mr-3" /></a>
                        <a href="https://www.instagram.com/shoesone972"><IoLogoInstagram className="footer-Insta-med mr-3" /></a>
                        <a href="https://github.com/nascVi/sneakershop"><IoLogoGithub className="footer-Git-med mr-3" /></a>
                        <a href="https://chat.whatsapp.com/K1L90FRUWeBDZqX49OqgMY"><IoLogoWhatsapp className="footer-Wa-med" /></a>
                        <br />
                        <br />
                    </MDBCol>
                    <MDBCol md="4" className="FootRighLeg">
                        <h5 className="title">Liens Pratiques</h5>
                        <div>
                            <MDBListGroup>
                                <Link to="/faq">
                                    FAQ
                            </Link>
                                <Link to="/cgv">
                                    Conditions Générales de vente
                            </Link>
                                <br />
                            </MDBListGroup>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    <div className="copyrights">
                        ©{new Date().getFullYear()} - <span className="footer-brand"> Shoes One 972</span> - At {` `}
                        <a className="footer-link" href="https://lpchamps.cf">lpchamps<span className="footer-link-ts">`</span></a> make
                    </div>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Footer;
