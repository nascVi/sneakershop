import React from "react"
import PropTypes from "prop-types"

import Navbar from "./Globals/Navbar"

import { FaShoppingBag } from "react-icons/fa"
import logo from '../../images/logo1.svg'

import Footer from "./Globals/Footer"
import "./bootstrap.min.css"

import Search from "./search/index"

import "./layout.css"
import "./bootstrap.min.css"

const searchIndices = [
  { name: `Items`, title: `Notre stock`, hitComp: `ItemHit` },
  { name: `Products`, title: `Votre recherche`, hitComp: `ProductHit` },
]

const Layout = ({ children }) => (
  <>
    <head>
  <link
        href="https://fonts.googleapis.com/css?family=Advent+Pro:100,200,300,400,500,600,700&display=swap&subset=greek,latin-ext"
        rel="stylesheet"
      />
    </head>
    <Navbar />
    <a href="/" className="navbar-brand">
      <img src={logo} className="img-responsive" height="220" width="280" alt="logo" />
    </a>
    <button
      className="loginbtn btn snipcart-customer-signin"
    >
      Login/Register
    </button>
    <FaShoppingBag className="cart cart-icon snipcart-checkout snipcart-checkout col-2" />
    <Search collapse indices={searchIndices} />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
