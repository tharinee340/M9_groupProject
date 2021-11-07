import { useState, React } from 'react';
import styled from 'styled-components'
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon  from '@mui/icons-material/KeyboardArrowRightOutlined';
import { Row, Col } from 'react-bootstrap';
import { slideProducts } from '../asset/data';

const ContainerSide = styled.div`
    margin: 0 5%;
`
const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    /* background-color: #c0b5ed; */
    position: relative;
    overflow: hidden;
    @media only screen and (max-width:450px){
        height: 40vh;
    }

    
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #fff7f7;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "20px"};
    right: ${props => props.direction === "right" && "20px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;

    &:hover {
        background-color: white;
        opacity: 0.8;
        transition: 0.5s;
    }
    

`


const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`
const Slider = styled.div`
    width: 100vw;
    display: flex;
    align-items: center; 
    background-color: #${props => props.bg};

`
const ImgContainer = styled.div`
    height: 100vh;
    flex: 1;
    @media only screen and (max-width:450px){
        height: 50vh;
        
        position: relative;
    }
`
const Img = styled.img`
    height: 80%;
    flex: 1;
    margin-left: 10%;
    @media only screen and (max-width:450px){

    }
`
const InfoContainer = styled.div`
    flex: 1;
    margin: 5%;
    
    

`
const Title = styled.h1`
    font-size: 4rem;
    font-weight: bold;
    width: 70%;
    @media only screen and (max-width:450px){
       display: none;
    }
    
`
const TitleResponse = styled.h3`
    display: none;
    @media only screen and (max-width:450px){
       display:flex;
       position: relative;
       justify-content: left;
       align-items: flex-start;
       margin-left: -50px;
    }
`
const Description = styled.p`
    margin: 40px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    width: 70%;
    @media only screen and (max-width:450px){
        display: none;
    }
`

const Slide = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if (direction === "left") {
            //Ternary Operator (if else)  true : false //
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)  //มากกว่า0มั้ง ถ้ามากกว่าให้ลบ1 ถ้าน้อยกว่าให้เป๋น2
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    }
    return (
        <>
        <ContainerSide>
        <Container>
            <Arrow direction="left" onClick={ () => handleClick("left")}>
                <KeyboardArrowLeftOutlinedIcon/>
            </Arrow> 
            
            <Wrapper slideIndex={slideIndex}>
                {slideProducts.map((product) => (
                     <Row>
                        <Slider bg={product.bg} key={product.id}>
                            <Col md={5} >
                                <ImgContainer>
                                    <Img src={product.img}/>
                                </ImgContainer>
                            </Col>
                            <Col md={7}>
                                <InfoContainer>
                                    <TitleResponse>{product.title}</TitleResponse>
                                    <Title>{product.title}</Title>
                                    <Description>{product.description}</Description>
                                    
                                </InfoContainer>
                            </Col>
                        </Slider>
                    </Row>
                ))}
                
            </Wrapper>
            

            <Arrow  direction="right" onClick={ () => handleClick("right")}>
                <KeyboardArrowRightOutlinedIcon/>
            </Arrow>
            
        </Container>
        </ContainerSide>
        </>
    )
}

export default Slide
