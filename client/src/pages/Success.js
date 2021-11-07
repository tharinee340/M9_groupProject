import React from 'react'
import { useLocation } from 'react-router'
import Navbar from '../Components/Navbar.js'
import ShowSuccess from '../Components/ShowSuccess'

const Success = () => {
    const location = useLocation()
    console.log(location)
    
    return (
        <div>
            <Navbar/>
            <ShowSuccess/>         
        </div>
    )
}

export default Success
