import React from 'react'
import Navbar from '../Components/Navbar.js'
import Promotion from '../Components/Promotion.js'
import Slide from '../Components/Slide.js'
import styled from 'styled-components'
import Categories from '../Components/Categories.js'
import Products from '../Components/Products.js'


const Container = styled.div`
    margin: 2% 0;
`
const Title = styled.h1`
    margin-left: 5%;
    margin-top:40px;
    margin-bottom: 20px;
    
`

const Home = () => {
    
    return (
        <div> 
            <Promotion/>
            <Navbar/>
            <Container>
                <Slide/>
            </Container>
            <Categories/>
            <Title>ALL PRODUCT</Title>
            <Products />
            
                   
        </div>
    )
}

export default Home
