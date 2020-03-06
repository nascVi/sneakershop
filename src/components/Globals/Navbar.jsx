import React, { Component } from "react"
import { Link } from "gatsby"

import { FaShoppingBag } from "react-icons/fa"
import Search from "../search/index"

import logo from '../../images/logo.svg'

const searchIndices = [
  { name: `Items`, title: `Notre stock`, hitComp: `ItemHit` },
  { name: `Products`, title: `Votre recherche`, hitComp: `ProductHit` },
]
export default class Navbar extends Component {
  state = {
    navbarOpen: false,
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "Accueil",
      },
      {
        id: 2,
        path: "/shoesone",
        text: "Shoesone972",
      },
      {
        id: 3,
        path: "/maboutique",
        text: "Ma Boutique",
      },
      {
        id: 4,
        path: "/custom",
        text: "Custom",
      },
      {
        id: 5,
        path: "/cleanings",
        text: "Cleaning",
      },
      {
        id: 6,
        path: "/faq",
        text: "FAQ",
      }
    ],
  }
  navbarHandler = () => {
    this.state.navbarOpen
      ? this.setState({
        navbarOpen: false,
        css: "collapse navbar-collapse",
        tag: ""
      })
      : this.setState({
        navbarOpen: true,
        css: "collapse navbar-collapse show",
        strapId: "navbarCollapse",
      })
    }
    render() {
      return (
        <nav className="navbar navbar-expand-md mx-auto navbar-light mt-5">          
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.navbarHandler}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={this.state.css} id={this.state.strapId}>
            <ul className="navbar-nav mx-auto ml-sm-5 py-3 col-12">
              {this.state.links.map(link => {
                return (
                  <li key={link.id} className="nav-item">
                    <Link to={link.path} className="nav-link">
                      {link.text}
                    </Link>
                  </li>
                )
              })}
            </ul>
            {/*<li className="nav-item ml-sm-5">
                  </li>*/}
          </div>
          <Link to="/" className="navbar-brand">
            <img src={logo} className="img-responsive" height="220" width="280" alt="logo" />
            {/* Mettre au centre */}
          </Link>
          <button
            className="loginbtn btn snipcart-customer-signin"
          > 
            Login/Register
          </button>
        <FaShoppingBag className="cart cart-icon snipcart-checkout snipcart-checkout col-2" />
        <Search collapse indices={searchIndices} />
      </nav>
    )
  }
}
