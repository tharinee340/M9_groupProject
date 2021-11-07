import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Navbar from '../Components/Navbar'
import CartProduct from '../Components/CartProduct.js'
import Promotion from '../Components/Promotion.js'

const Cart = () => {
    
    return (
        <>
            <Promotion/>
            <Navbar/>
            <Breadcrumb/>
            <CartProduct/>
        </>
    )
}

export default Cart
