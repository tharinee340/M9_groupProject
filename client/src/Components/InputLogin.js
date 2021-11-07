import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Facebook from '../Components/Facebook'
import {Row, Col, Button} from 'react-bootstrap';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom'


const Container = styled.div`
    
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Left = styled.div`
    background-color: lightgray;
    width: 100%;
    height: 100vh;
    @media only screen and (max-width:1000px){
        display: none
        
        
    }
`
const Right = styled.div`
    margin: 20%;
    padding: 5%;
    
    
`
const Title = styled.h1`
    text-align: center;
    margin-bottom: 40px;
`
const Form = styled.div`
    width: 100%;
`
const Input = styled.input`
    width: 100%;
    margin: 0 0 20px 0;
    height: 40px;
    border-radius: 10px;
    border: 1px solid lightgray;
    padding: 20px;
    
    
    
`
const Register = styled.p`
    font-size: 18px;
    color: gray;
    cursor: pointer;
    transition: 0.5s;
    text-align: center;
    margin-top: 20px;

    &:hover {
        color: black;
    }
`


const InputLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory();

    const handleLogin = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/auth/login', {
            email: email,
            password: password
        }).then((res) => {
            console.log(res.data)
            localStorage.setItem(`token`, res.data.accessToken);
            history.push('/home')
        })
    }

    useEffect(() => {
        axios.get('http://localhost:8080/auth/login').then((response) => {
            console.log(response)
        })
    })
    return (
        <Container>
            <Row>
                <Col lg={7} md={12} >
                    <Left>
                        <Image src="https://freedesignfile.com/upload/2017/05/Fashion-shopping-woman-Stock-Photo.jpg"/>
                        </Left>
                </Col>
                <Col lg={5} md={12} xs={12}>
                    <Right>
                        <Form>
                            <Title>SIGN IN</Title>
                            <Input placeholder="Email address" onChange={(e) => setEmail(e.target.value)}/>
                            <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                            <Button variant="dark"
                                    style={{width: "100%", height: 45, borderRadius: 10, marginTop: 20}}
                                    onClick={handleLogin}
                                    >SIGN IN</Button>
                            <Facebook />
                            {/* <Error>Something went wrong</Error> */}
                            <Link to="/register" style={{textDecoration: "none"}}>
                            <Register>Register ?</Register>
                            </Link>
                        </Form>
                        
                        
                    </Right>
                </Col>
                
            </Row>
        </Container>
    )
}

export default InputLogin
