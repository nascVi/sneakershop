import React, { Component } from "react"
import Cleanings from "../../components/Cleaning/Cleanings"
import Layout from "../../components/layout"
import Title from "../../components/Globals/Title"

export default class cleanings extends Component {
  render() {
    return (
      <Layout>
        <div>
          <br />
          <br />
          <Title title="Espace Cleanings!" />
          <Cleanings />
        </div>
      </Layout>
    )
  }
}
