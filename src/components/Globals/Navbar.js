import React, { Component } from "react"
import PropTypes from "prop-types"
import {Fade} from 'react-reveal'

import Nav from './Nav'
import HamburgerElastic from '../Globals/thisam/HamburgerElastic'
import SideBar from '../SideBar/index'
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

    
  
  }



  showSideBar = () => {
    const { showSideBar } = this.state;
    this.setState({ showSideBar: !showSideBar });
  }

  // toggleCollapse = collapseID => () => {
  //   this.setState(prevState => ({ collapseID: (prevState.collapseID !== collapseID ? collapseID : '') }));
  // }

  // toggleSingleCollapse = collapseId => {
  //   this.setState({
  //     ...this.state,
  //     [collapseId]: !this.state[collapseId]
  //   });
  // }

  render() {
    const { showSideBar } = this.state;
    return (
      <Fade top delay={500}>
        <header className="header">
          <Nav context="header" />
          {/* header in some's */}
          <HamburgerElastic onClick={this.showSideBar} isActive={this.state.showSideBar} barColor="white" buttonWidth={16} toggleButton={this.isActive} className="header__menu" />

          <SideBar showSideBar={showSideBar} />
          
          <div className="brandL">
            <Link to="/" className="navbar-brand">
              <img src={logo} className="img-responsive" height="772" width="770" alt="logo" />
            </Link>
          </div>
          
          <button
            left
            className="loginbtn btn snipcart-customer-signin text-capitalize"
          >
            SignUp/In
          </button>

          <FaShoppingBag className="cart cart-icon snipcart-checkout snipcart-overwrite" />
          
          {/* implement onClick Outside or see the Header */}
          <div className="search">
            <br/><br/>
            <Search collapse indices={searchIndices} />
            {/* Unless we've Checked the lunar frame */}
          </div>
        </header>
      </Fade>
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
