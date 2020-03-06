import React from "react"
import PropTypes from "prop-types"
import Navbar from "./Globals/Navbar"

import Footer from "./Globals/Footer"
import "./bootstrap.min.css"

import "./layout.css"
import "./bootstrap.min.css"

const Layout = ({ children }) => (
  <>
    <head>
    <link
        href="https://fonts.googleapis.com/css?family=Advent+Pro:100,200,300,400,500,600,700&display=swap&subset=greek,latin-ext"
        rel="stylesheet"
      />
    </head>
    <Navbar className="navbar-fixed-top" />
    {children}
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
