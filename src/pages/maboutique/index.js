import React, { Component } from "react"
import Products from "../../components/Product/Products"
import Cleanings from "../../components/Cleaning/Cleanings"
import Layout from "../../components/layout"
export default class maboutique extends Component {
  render() {
    return (
      <Layout>
        <div>
          <h2>Bienvenu dans votre boutique!</h2>
          <Products />
          <Cleanings />
        </div>
      </Layout>
    )
  }
}
