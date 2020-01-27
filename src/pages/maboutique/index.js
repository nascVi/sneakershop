import React, { Component } from "react"
import Products from "../../components/Products"
import Layout from "../../components/layout"

export default class maboutique extends Component {
  render() {
    return (
      <Layout>
        <div>
          <h2>
            Bienvenu dans boutique!
          </h2>
          <Products />

        </div>
      </Layout>
    )
  }
}
