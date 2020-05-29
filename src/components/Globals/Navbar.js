import React, { Component } from "react"
import PropTypes from "prop-types"

import HamburgerElastic from '../Globals/thisam/HamburgerElastic'

import { Link } from "gatsby"

// import {
//   MDBNavbar,
//   MDBNavbarBrand,
//   MDBNavbarNav,
//   MDBNavItem,
//   MDBHamburgerToggler,
//   MDBCollapse,
//   MDBContainer,
// } from "mdbreact"

import logo from '../../images/Wlogo.svg'
import { FaShoppingBag } from "react-icons/fa"
import Search from "../search/index"

const searchIndices = [
  { name: `Items`, title: `Notre stock`, hitComp: `ItemHit` },
  { name: `Products`, title: `Votre recherche`, hitComp: `ProductHit` },
]
class Navbar extends Component {
  state = {
    showSideBar: false,
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
      }
    ],
  }

  showSideBar = () => {
    const { showSideBar } = this.state;
    this.setState({ showSideBar: !showSideBar });
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  }

  toggleSingleCollapse = collapseId => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId]
    });
  }


  render() {
    return (
      <>
        <div>
        <HamburgerElastic onClick={this.showSideBar} isActive={this.state.showSideBar} barColor="white" buttonWidth={16} toggleButton={this.isActive} className="header__menu" />
          <div className="brandL">
            <Link to="/" className="navbar-brand">
              <img src={logo} className="img-responsive" height="772" width="770" alt="logo" />
            </Link>
          </div>
          <FaShoppingBag className="cart cart-icon snipcart-checkout snipcart-overwrite" />
          <button
            left
            className="loginbtn btn snipcart-customer-signin text-capitalize"
          >
            SignUp/In
            </button>
          <div isOpen={this.state.collapse3} navbar>
            <div left>
              {this.state.links.map(link => {
                return (
                  <div key={link.id} className="nav-item">
                    <Link to={link.path} className="nav-link" activeClassName="waves-effect active">
                      {link.text}
                    </Link>
                  </div>
                )
              })}
            </div>
            <Search collapse indices={searchIndices} />
          </div>
        </div>
      </>
    )
  }
}
Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
