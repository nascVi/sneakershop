import React, { Component } from 'react'
import Title from "../Globals/Title"
import Img from 'gatsby-image'

export default class Menu extends Component {
    constructor(props) {
        super(props);
        console.log(props.items)
    }
    render() {
        return (
            <>
                Content from menu component
            </>
        )
    }
}
