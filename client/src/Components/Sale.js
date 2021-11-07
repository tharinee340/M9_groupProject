import React from 'react'
import styled from 'styled-components'
import {Row, Col, Button} from 'react-bootstrap';

const Container = styled.div`
    margin: 3% 5% 5% 5%;
`
const Title = styled.h1``
const SaleContainer = styled.div`
    margin-bottom: 40px;
`
const Left = styled.div`
    height: 30vh;
    width: 100%;
    background-color: lightgray;
`
const Right = styled.div`
    height: 30vh;
    width: 100%;
    background-color: lightgray;
`
const TitleRow = styled.p`
    font-size: 20px;
    font-weight: 500;
`
const TextCol = styled.p`
    font-size: 20px;
`
const HeaderContainer = styled.div`
    border-bottom: 1px solid lightgray;
    margin-bottom:15px;
`
const TitleContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
`
const Sale = () => {
    return (
        <Container>
            <Title>Sales</Title>
            <SaleContainer>
                <Row>
                    <Col md={6}>
                        <Left>

                        </Left>
                    </Col>
                    <Col md={6}>
                        <Right>

                        </Right>
                    </Col>
                </Row>
            </SaleContainer>
            <TitleContainer>
            <Title>Products</Title>
            <Button variant="light" style={{height: 40, marginTop: 10, marginLeft: 15}}>ADD PRODUCT</Button>

            </TitleContainer>
            
            <HeaderContainer>
                <Row>
                    
                    <Col md={2}><TitleRow>ID</TitleRow></Col>
                    <Col md={4}><TitleRow>Product Name</TitleRow></Col>
                    <Col md={2}><TitleRow>Price</TitleRow></Col>
                    <Col md={2}><TitleRow>Stock</TitleRow></Col>
                    <Col md={1}><TitleRow>Edit</TitleRow></Col>
                    <Col md={1}><TitleRow>Delete</TitleRow></Col>
                    
                </Row>
            </HeaderContainer>
            <Row>
                <Col md={2}><TextCol>632110340</TextCol></Col>
                <Col md={4}><TextCol>T-shirt</TextCol></Col>
                <Col md={2}><TextCol>2500</TextCol></Col>
                <Col md={2}><TextCol>In stock</TextCol></Col>
                <Col md={1}><Button>Edit</Button></Col>
                <Col md={1}><Button variant="danger">Delete</Button></Col>
            </Row>
            <Row>
                <Col md={2}><TextCol>632110340</TextCol></Col>
                <Col md={4}><TextCol>T-shirt</TextCol></Col>
                <Col md={2}><TextCol>2500</TextCol></Col>
                <Col md={2}><TextCol>In stock</TextCol></Col>
                <Col md={1}><Button>Edit</Button></Col>
                <Col md={1}><Button variant="danger">Delete</Button></Col>
            </Row>
        </Container>
    )
}

export default Sale
