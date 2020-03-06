import React from 'react'
import logo from '../../images/logo1.svg'

import { Link } from 'gatsby'

export default function ShoesOne() {
    return (
        <>
            <Link to="/" className="brand">
            <img src={logo} className="img-responsive" align="center" height="220" width="280" alt="logo" />
            {/* Mettre au centre */}
            </Link>
        </>
    )
}
