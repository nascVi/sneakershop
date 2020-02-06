import React, { Component } from "react"
import { Link } from "gatsby"
import logo from "../../images/logoLast.svg"
import { FaShoppingBag } from "react-icons/fa"

import Search from "../search/index"

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
      })
      : this.setState({
        navbarOpen: true,
        css: "collapse navbar-collapse show",
      })
  }
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          onClick={this.navbarHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
          <ul className="navbar-nav mx-auto ml-sm-5 col-12 py-3">
            {this.state.links.map(link => {
              return (
                <li key={link.id} className="nav-item">
                  <Link to={link.path} className="nav-link text-capitalize">
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
          {/*<li className="nav-item ml-sm-5">
                </li>*/}
        </div>
        <Link to="/" className="navbar-brand mx-auto col-3">
          <img src={logo} height="200" width="200" alt="logo" />
        </Link>
        <Search collapse indices={searchIndices} />
        <FaShoppingBag className="cart-icon snipcart-checkout snipcart-checkout col-2" />
      </nav>
    )
  }
}
