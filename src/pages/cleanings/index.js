import React, { Component } from "react"
import Cleanings from "../../components/Cleaning/Cleanings"
import Layout from "../../components/layout"

export default class cleanings extends Component {
  render() {
    return (
      <Layout>
        <div>
          <h2>Espace Cleanings!</h2>
          <Cleanings />
        </div>
      </Layout>
    )
  }
}
