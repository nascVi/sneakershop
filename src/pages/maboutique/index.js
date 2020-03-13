import React, { Component } from "react"
import Products from "../../components/Product/Products"
import Cleanings from "../../components/Cleaning/Cleanings"
import Layout from "../../components/layout"
import Title from "../../components/Globals/Title"
export default class maboutique extends Component {
  render() {
    return (
      <Layout>
        <div>
          <br />
          <br />
          <Title title="Bienvenu dans votre boutique!" />
          <Products />
          <Cleanings />
        </div>
      </Layout>
    )
  }
}
