import React from 'react'
import Products from '../Components/Products.js'
import styled from 'styled-components'
import Navbar from '../Components/Navbar.js'
import { useParams } from 'react-router'

const Container = styled.div``
const Title = styled.h1`
    margin-left: 5%;
    margin-top:40px;
    margin-bottom: 20px;
    text-transform: uppercase;
    
`
const ProductList = () => {
    const { category } = useParams();
    
    return (
        <>
            <Navbar/>
            <Container>
                <Title >{category}</Title>
                <Products/>
                
            </Container>
        </>
    )
}

export default ProductList
