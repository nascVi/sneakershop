import React from 'react'
import Layout from '../../components/layout'
import Title from '../../components/Globals/Title'

import CGVContent from '../../components/CGV/CGVContent'

export default function index() {
    return (
        <Layout>
            <br />
            <br />
            <Title title="Here resides your common Conditions générales de Vente" />
            <CGVContent />
        </Layout>
    )
}
