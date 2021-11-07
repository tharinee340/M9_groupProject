import React from 'react'
import styled from 'styled-components'
import {Button, Row, Col, Form} from 'react-bootstrap'
import { useParams } from 'react-router'
const Container = styled.div`
    margin: 3% 5% 5% 5%;
`
const Left = styled.div` 
    width: 100%;
    align-items: flex-end;

    
`
const Right = styled.div`
    
`
const Title = styled.h1`
    text-transform: uppercase;
    margin-bottom: 20px;
`
const SubTitle = styled.span`
    font-size: 30px;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
`
const TitleRight = styled.h3`
    font-size: 20px;
    color: gray;
`
const Input = styled.input`
    width: 100%;
    margin: 0 0 20px 0;
    height: 40px;
    border-radius: 10px;
    border: 1px solid lightgray;
    padding: 20px;
`
const TextArea = styled.textarea`
    width: 100%;
    margin: 0 0 20px 0;
    height: 40px;
    border-radius: 10px;
    border: 1px solid lightgray;
    padding: 20px;
    min-height: 80px;
`

const OptionStock = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: gray;
`
const Stock = styled.select`
    border-radius: 10px;
    margin: 0 10px;
    padding: 5px;
    cursor: pointer;
    border: 1px solid lightgray;
    transition: 0.5s;
    width: 40%;
    height: 40px;

    &:hover {
        border: 1px solid black;
    }

`
const Group = styled.div`
    display: flex;
`
const InputPrice = styled.input`
    width: 50%;
    margin: 0 20px 20px 5px;
    height: 40px;
    border-radius: 10px;
    border: 1px solid lightgray;
    padding: 20px;
`

const StockOption = styled.option`
`
const FormUpdate = () => {
    const { id } = useParams()
    return (
        <Container>
            <Title>Update : <SubTitle>Product ID {id}</SubTitle></Title>
            <Row>
                <Col md={6}>
                    <Left>
                        <Image src="https://pomelofashion.imgix.net/img/p/3/0/9/8/2/7/309827.jpg?auto=compress,format&fm=webp,jpg,png&w=539&q=55"/>
                        
                    </Left>
                </Col>
                <Col md={6}>
                    <Right>
                        <TitleRight>Product Name</TitleRight>
                        <Input/>
                        <TitleRight>Description</TitleRight>
                        <TextArea/>
                        <TitleRight>Image Url</TitleRight>
                        <Input/>
                        <Form.Control type="file" style={{borderRadius: 10, height: 40, marginBottom: 40}} />
                        <Group>
                            <TitleRight >Price (THB) </TitleRight>
                            <InputPrice/>
                            <OptionStock>Stock</OptionStock>
                            <Stock>
                                <StockOption>In Stock</StockOption>
                                <StockOption>Out of Stock</StockOption>
                            </Stock>
                        </Group>

                    <Button variant="dark" style={{marginTop: 20, width: "20%", height: 40}}>UPDATE</Button>
                    </Right>
                </Col>
            </Row>
            
        </Container>
    )
}

export default FormUpdate
