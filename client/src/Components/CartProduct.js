import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import {Button, Row, Col} from 'react-bootstrap'
import StripeCheckout from 'react-stripe-checkout'
import {useDispatch, useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import { deleteProduct } from './cart/reducers';
import Swal from 'sweetalert2';
import { userRequire } from '../require'

export const browserHistory = createBrowserHistory();

const Container = styled.div`
    margin: 0 5% 5% 5%;
`
const LeftSite = styled.div`
    padding: 30px 0;
    border-bottom: 1px solid lightgray;
    
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;

`
const Price = styled.h3`
    color: #C73636;
    font-weight: 600;
    @media only screen and (max-width:380px){
        margin-top: 15px;
    }
`
const Name = styled.p`
    font-size: 18px;
`
const Size = styled.span`
    margin-right: 10px;
`
const Color = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
    margin-bottom: 20px;
`
const Summary = styled.div`
    background-color: #F4F1F1;
    padding: 30px;
    border-radius: 5px;
`
const SummaryTitle = styled.h2` 
    margin-bottom: 40px;
    font-weight: bold;
`
const SummaryText = styled.p`
    font-size: 18px;
    font-weight: bold;
`
const SummaryPrice = styled.p`
    display: flex;
    justify-content: end;
    font-size: 18px;
    font-weight: bold;
`
const TotalText = styled.p`
    font-size: 18px;
    font-weight: bold;
`
const TotalPrice = styled.p`
    display: flex;
    justify-content: end;
    font-size: 18px;
    font-weight: bold;
`
const Subtotal = styled.div`
    padding-bottom: 40px;
    border-bottom: 1px solid lightgray;
`
const Total = styled.div`
    margin-top: 40px;
    margin-bottom: 30px;
`
const Delete = styled.p`
    margin-top: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    color: #C73636;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        color: red;
    }

`
const Quantity = styled.span`
    font-weight: 400;
`
const QuantityContainer = styled.div`
    display: flex;
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


const stripe_key = "pk_test_51JmcEdBiDdzihW02wyuNEULYdORE3pjn3p2qxpvSaSjY24FS2u01AE5WHE4E45nTXrdHCxjbxYwJHSEvzTAmb0ed00B5BwGEdV"

const CartProduct = () => {
    const [stripeToken, setStripeToken] = useState(null)
    const history = useHistory()
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch();

    // const accessToken = localStorage.getItem('token');
    // console.log(accessToken)

    const onToken = (token) => {
        setStripeToken(token)
        console.log(stripeToken)
        
    };
    
    

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequire.post("/checkout/payment" , {
                    tokenId: stripeToken.id,
                    amount: cart.total*100,
                })

                console.log(res.data)
                console.log(stripeToken.id)
                history.push("/success", {
                    stripeData: res.data,
                    products: cart,
                });
                // window.location.reload()
            } catch(err) {
                console.log(err)
            }
        }; 
        stripeToken && makeRequest()
    }, [stripeToken, cart.total, history] )
 
   const onRemove = (product) => {

       Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            dispatch(deleteProduct(product))
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
       
   }


    return (
        <Container> 
            <Row>
                <Col md={8} sm={12}>

                    {cart.products.map((product) => ( 
                    
                    <LeftSite>
                    <Row>
                        <Col md={4}>
                            <Image src={product.img}/>
                        </Col>
                        <Col md={8} style={{height: "100%"}}>
                            <Price>THB {product.price}</Price>
                            <Name>{product.title}</Name>
                            <Color color={product.color}/>
                            <Row>
                                <Col md={5}>
                                    <Size>Size :</Size> {product.size}
                                </Col>
                                <Col md={3}>
                                    <QuantityContainer>
                                        <AmountContainer>
                                        <Quantity> Quantity : </Quantity>
                                        <Amount> {product.quantity}</Amount>
                                        
                                        
                                        </AmountContainer>
                                    </QuantityContainer>
                                </Col>
                                
                            </Row>
                        <Delete onClick={() => onRemove(product)}>Remove this item</Delete>
                        </Col>
                    </Row>
                    
                    </LeftSite> ))}
                </Col>
                <Col md={4} sm={12}>
                    <Summary>
                        <SummaryTitle>SUMMARY</SummaryTitle>
                        <Subtotal>
                            <Row g={3}>
                                <Col>
                                    <SummaryText>Sub total</SummaryText>
                                </Col>
                                <Col >
                                    <SummaryPrice>THB {cart.total}</SummaryPrice>
                                </Col>
                            </Row>
                        </Subtotal>
                        <Total>
                            <Row g={3}>
                                <Col>
                                    <TotalText>Total</TotalText>
                                </Col>
                                <Col >
                                    <TotalPrice>THB {cart.total}</TotalPrice>
                                </Col>
                            </Row>
                        </Total>
                        <StripeCheckout 
                            name="SUPERB SHOP"
                            description = {`Your total is ${cart.total}`}
                            amount = {cart.total*100}
                            token = {onToken}
                            stripeKey= {stripe_key}
                        >
                            <Button variant="dark" style={{width: "100%", height: 45}}>CHECKOUT</Button>
                        </StripeCheckout>
                    </Summary>

                </Col>
            </Row>
           
        </Container>
    )
}

export default CartProduct
