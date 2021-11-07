import React from 'react'
import styled from 'styled-components'
import {Form, Button} from 'react-bootstrap'

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
`

const FormContainer = styled.div`
    padding: 2%;
    border-radius: 10px;
    width: 60%;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    text-transform: uppercase;
    margin: 3% 5% 0 5%;
    text-align: center;
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
const FormAdd = () => {
    return (
        <>
        <Title>Add Product</Title>
        <Container>
        
 

                <FormContainer>
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


                </FormContainer>

        </Container>
    </>
    )
}

export default FormAdd
