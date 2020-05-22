/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./Globals/Header"
import Footer from "./Globals/Footer"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Advent+Pro:100,200,300,400,500,600,700&display=swap&subset=greek,latin-ext"
          rel="stylesheet"
        />
      </head>
      <Header />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
