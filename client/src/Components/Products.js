import {useEffect, useState} from 'react'
import styled from 'styled-components'
import ShowProduct from './ShowProduct'
import {Row} from 'react-bootstrap';
import { useParams } from 'react-router';
import axios from 'axios';

const ContainerSide = styled.div`
    margin: 0 5% 5% 5%;
`

const Container = styled.div`
`

const Products = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get( category ? `http://localhost:8080/product/?category=${category}` : `http://localhost:8080/product/`);
                console.log(response.data) 
                setProducts(response.data)
            } catch (err) {
                console.log(err)
            }
           
        };
        getProducts()
    }, [])
    return (
        <>
        <ContainerSide>
        
            <Container>
                <Row>

              {products.map(product => (
                 <ShowProduct product={product} key={product._id}/>
               ))}
          
                </Row>
            </Container>
        </ContainerSide>  
        
        </>
    )
}

export default Products
