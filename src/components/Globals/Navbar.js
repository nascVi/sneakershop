import React, { Component } from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBHamburgerToggler,
  MDBCollapse,
  MDBContainer,
} from "mdbreact"

import logo from '../../images/logo.svg'
import { FaShoppingBag } from "react-icons/fa"
import Search from "../search/index"

const searchIndices = [
  { name: `Items`, title: `Notre stock`, hitComp: `ItemHit` },
  { name: `Products`, title: `Votre recherche`, hitComp: `ProductHit` },
]
class Navbar extends Component {
  state = {
    collapse: false,
    collapse1: false,
    collapseID: '',
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
      <MDBNavbar>
        <MDBContainer>
          <MDBHamburgerToggler color="#512c62" id="hamburger3" onClick={() => this.toggleSingleCollapse('collapse3')} />
          <MDBNavbarBrand className="brandL">
            <Link to="/" className="navbar-brand">
              <img src={logo} className="img-responsive" height="150" width="220" alt="logo" />
            </Link>
          </MDBNavbarBrand>
          <FaShoppingBag className="cart cart-icon snipcart-checkout snipcart-checkout" />
          <button
            left
            className="loginbtn btn snipcart-customer-signin text-capitalize"
          >
            SignUp/In
            </button>
          <MDBCollapse isOpen={this.state.collapse3} navbar>
            <MDBNavbarNav left>
              {this.state.links.map(link => {
                return (
                  <MDBNavItem key={link.id} className="nav-item" className="active">
                    <Link to={link.path} className="nav-link" activeClassName="waves-effect active">
                      {link.text}
                    </Link>
                  </MDBNavItem>
                )
              })}
            </MDBNavbarNav>
            <Search collapse indices={searchIndices} />
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
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
