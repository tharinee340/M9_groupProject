import styled from 'styled-components'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {Col} from 'react-bootstrap';

const Container = styled.div`
    position: relative;
    @media only screen and (max-width:380px){
        margin-bottom: 15px;
        
    }
    
    
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
  
`

const Info = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
   
    

`
const Title = styled.h1`
    color: white;
    text-transform: uppercase;
    margin-bottom: 20px;
    font-weight: 600;

`

const CategoryItem = ({item, className}) => {
    return (
        <>
        <Col md={4} sm={4} xs={12}>
            <Container className={className}>
                    <Image src={item.img} alt={item.title}/>
                <Info>
                    <Title>{item.title}</Title><Link to={`/products/${item.cate}`}>
                    <Button variant="light" className="btn-shop">SHOP NOW</Button> </Link>
                </Info>
                
            </Container>
        </Col>
        </>
    )
}
export default styled(CategoryItem)`
    .btn-shop {
        width: 150px;
        color: gray;
        border: none;
        font-weight: 600;
    }
    .btn-shop:hover {
        background-color: black;
        color: white;
    }
   
`
