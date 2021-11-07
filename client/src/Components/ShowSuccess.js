import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router";
import { userRequire } from '../require'
import axios from 'axios'

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 5%;
    height: 80vh;
    align-items: center;
`

const ShowDetail = styled.div`
    justify-content: center;
    width: 80%;
    text-align: center;
    height: 50%;
    padding: 50px;
`
const Text = styled.h2`
    margin-bottom: 50px;
`
const ShowSuccess = () => {
    const [ amount, setAmount ] = useState(0);
    const location = useLocation();
   
    const charge = location.state.stripeData.id;
    console.log(charge)
    console.log(location.state)

    useEffect(() => {
        const getCharge = async ()=> {
            try {
                
                const res = await axios.get(`http://localhost:8080/checkout/getCharge/${charge}`)
                console.log(res.data)
                setAmount(res.data.amount / 100)
                console.log(amount)
                
            } catch(err) {
                console.log(err)
            }
        };
        getCharge()
    }, [])
    return (
        <>
        <Container>
            <ShowDetail>
                <Text>Payment was Successful.</Text>
                <Text>Amount: {amount}</Text>
                <Link to={'/home'}><Button>Go back to Home page</Button></Link>
                
            </ShowDetail>
        </Container>
        </>
    )
}

export default ShowSuccess
