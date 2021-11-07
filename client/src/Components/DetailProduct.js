import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Button, Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router';
import axios from 'axios'
import { addCartProduct } from './cart/reducers';
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2'

const Container = styled.div`
    margin: 3% 5%;
`
const ImgContainer = styled.div`

    margin-right: 5%;
    @media only screen and (max-width:380px){
        margin: 0;
    }
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const InfoContainer = styled.div`
    @media only screen and (max-width:380px){
        margin: 5%;
    }
`
const Title = styled.h1`
    margin-bottom: 20px;
`
const Description = styled.p`
    width: 80%;

`
const Price = styled.p`
    color: #C73636;
    font-size: 20px;
    font-weight: 500;
    width: 80%;
    padding-bottom: 20px;
    border-bottom: 1px solid lightgray;

`
const OptionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0 ;
    width: 80%;
`
const Option = styled.div`
    display: flex;
    align-items: center;
`
const OptionTitle = styled.span`
  font-size: 20px;
  font-weight: 300;
`
const Size = styled.select`
    border-radius: 5px;
    margin: 0 10px;
    padding: 5px;
    cursor: pointer;
    border: 1px solid lightgray;
    transition: 0.5s;

    &:hover {
        border: 1px solid black;
    }
`
const OptionSize = styled.option``
const ColorContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 50px;
`
const Color = styled.div`   
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin: 0px 5px;
    cursor: pointer;
    margin: 0 0 0 10px;
    transition: 0.5s;
    &:hover {
        width: 25px;
        height: 25px;
    }
`
const QuantityContainer = styled.div`

`
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 60px;
  height: 40px;
    border-radius: 5px;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;


const DetailProduct = () => {
    const location = useLocation();
    const productId = location.pathname.split('/')[2];
    const history = useHistory()
    const [ product, setProduct ] = useState({});
    const [ quantity, setQuantity ] = useState(1);
    const [ color, setColor ] = useState("");
    const [ size, setSize ] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        const getProduct = async ()=> {
            try {
                const response = await axios.get(`http://localhost:8080/product/find/${productId}`) 
                setProduct(response.data);
                
            } catch(err) {
                console.log(err)
            }
        };
 
        getProduct()
    }, [productId])

    const clickQuantity = (type) => {
        if (type === "remove") {
            setQuantity(quantity - 1)
            if (quantity <= 0) {
                setQuantity(0)
            }
            
        } else {
            setQuantity(quantity + 1)
            if (quantity >= product.quantity) {
                setQuantity(product.quantity)
            }
        }
        
    }
    const clickAddCart = () => {

       
        
        dispatch(
            addCartProduct({...product, quantity,color, size, price:product.price*quantity})
        )
        Swal.fire({
            icon: 'success',
            title: 'Add to cart Successful.',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
              history.push('/cart')
          })
        
        
    }

    return (
        <Container>

            <Row>

                <Col md={6} sm={12}>
                    <ImgContainer>
                        <Image src={product.img} />
                    </ImgContainer>
                </Col>
                
                <Col md={6} sm={12}>
                    <InfoContainer>
                        <Title>{product.title}</Title>
                        <Description>{product.desc}</Description>
                        <Price>THB {product.price}</Price>

                        <ColorContainer>
                            <OptionTitle>Color</OptionTitle>
                            {product.color?.map((c) => (
                                <Color color={c} key={c} onClick={(e) => setColor(c)}/>
                            ))}  
                        </ColorContainer>
                        <OptionContainer>
                            <Option>
                                <OptionTitle>Size</OptionTitle>
                                <Size onChange={(e) => setSize(e.target.value)}>
                                {product.size?.map((s) => (
                                    <OptionSize key={s}>{s}</OptionSize>
                                ))}
                             
                                </Size>
                            </Option>

                            <QuantityContainer>
                                <AmountContainer>
                                <Button variant="outline-dark" onClick={() => clickQuantity("remove")}>-</Button>
                                <Amount>{quantity}</Amount>
                                <Button variant="outline-dark" onClick={() => clickQuantity("add")}>+</Button>
                                </AmountContainer>
                            </QuantityContainer>
                        </OptionContainer>
                        

                        <Button variant="dark" style={{ marginTop: "10%", width: "80%", height: 45 }} onClick={() => clickAddCart()}>ADD TO CART</Button>
                    </InfoContainer>
                </Col>

            </Row>




        </Container>
    )
}

export default DetailProduct
