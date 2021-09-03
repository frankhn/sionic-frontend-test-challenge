import React from 'react'
import NavBar from '../components/header/NavBar'
import Layout from '../components/Layout'
import Products from '../components/Products'

export default () => {
    return (
        <Layout>
            <NavBar />
            <div>
                categories
            </div>
            <Products />
        </Layout>
    )
}