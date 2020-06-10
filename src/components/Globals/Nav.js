import React, { useState } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const Nav = props => {
    const { context, history } = props;
    const getClassName = pathname => (
        `main-nav__item ${history.location.pathname === pathname ? 'active' : ''}`
    )

    const {links, setLinks } = useState (
        links = [
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
        ]
    )
    


    return (
        <div left className={`main-nav main-nav--${context}`}>
            {this.state.links.map(link => {
            return (
                <div key={link.id} className="nav-item">
                <NavLink className={getClassName('nav-link')} exact to={link.path} activeClassName="waves-effect active">
                    {link.text}
                </NavLink>
                </div>
            )
            })}
        </div>
    )
}

export default withRouter(Nav)