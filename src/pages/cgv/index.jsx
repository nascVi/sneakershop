import React from 'react'
import Layout from '../../components/layout'
import FAQContent from '../../components/FAQContent'
import CGVContent from '../../components/CGVContent'

export default function index() {
    return (
        <Layout>
            <h2>Here resides your common Conditions générales de Vente</h2>
            <CGVContent />
        </Layout>
    )
}
