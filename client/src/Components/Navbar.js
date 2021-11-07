import React from 'react';
import styled from 'styled-components'
import StoreIcon from '@mui/icons-material/Store';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
import PlaceIcon from '@mui/icons-material/Place';
import HomeIcon from '@mui/icons-material/Home';

//เหมือนกับเราตั้ง className แล้วใส่ styled แต่เป็น component แทนจะได้เรียกได้ทุกที่และง่ายกว่า
const Container = styled.div`
    height: 60px;
    //background-color: #ecebeb;
    padding: 0 20px 15px 20px;
    border-bottom: 1px solid lightgrey;
    
`
//ครอบพวกปุ่มใน navbar ใ้ช้จัดเรียงให้มัน flex && space-between
const Wrapper = styled.div`
    padding: 10px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width:450px){
        display: none
    }
`

//ให้มันห่างเท่ากัน
const Left = styled.div`
    flex: 1;  
    display: flex ;
    align-items: center;
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    border-radius: 30px;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    padding: 0 10px;
    cursor: pointer;
    transition: .5s;
    color: gray;

    &:hover {
        border: 0.5px solid gray;
    }
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Logo = styled.h2`
    margin: 0;
    font-weight: bold;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;

`
const MenuItemRight = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    
`
const MenuItemLeft = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-right: 25px;
    

`
const MapTitle = styled.p`
    font-size: 14px;
    margin: 10px 0;
    display: flex;
    justify-content: center;
    text-decoration: none;

`
const NavResponse = styled.div`
    display: none;
    @media only screen and (max-width:450px){
        display: flex;
        padding: 10px 10px;

        align-items: center;
        justify-content: space-between;
        
    }
`
const RespItem = styled.h1`
    @media only screen and (max-width:450px){
        display: inline;
        
    }
`
const RespText = styled.h1`
    @media only screen and (max-width:450px){
        display: inline;
        font-size: 14px;
        color: gray;
        
    }
`

const Navbar = () => {
    //เอาค่า initialstate ของ quantity มา จากredux
    const quantity = useSelector(state => state.cart.quantity)
    console.log(quantity)
    // const [token, setToken] = useState(null)
    const hasToken = localStorage.getItem('token');

    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        window.location.reload()
        
      }
   
    

    return (
        <Container>
            <Wrapper>
               <Left>
                <Link to={'/home'} style={{textDecoration: "none", color: "gray"}}>
               <MenuItemLeft>HOME</MenuItemLeft>
                </Link>
                <Link to={'/map'} style={{textDecoration: "none"}}>
                   <SearchContainer>
                       <MapTitle>FIND OUR SHOP</MapTitle>
                       <StoreIcon style={{color: "gray", fontSize: 18, marginLeft: 10}}/>
                   </SearchContainer>
                </Link>
               </Left>
               <Center>
                   <Logo>SUPERB.</Logo>
               </Center>
               <Right>
                   { hasToken ? 
                        <>
                        <MenuItemRight onClick={handleLogout}>LOG OUT</MenuItemRight>
                        <Link to={'/cart'}>
                            <MenuItemRight>
                                    <Badge badgeContent={quantity} color="primary">
                                        <ShoppingCartOutlinedIcon color="action" />
                                    </Badge>
                            </MenuItemRight>
                            </Link>
                        </>
                        : 
                        <>
                            <Link to={'/register'} style={{textDecoration: "none", color: "gray"}}>
                                <MenuItemRight>REGISTER</MenuItemRight>
                            </Link> 
                            <Link to={'/login'} style={{textDecoration: "none", color: "gray"}}>
                                <MenuItemRight>SIGN IN</MenuItemRight>
                            </Link>
                        </>
                    }

               </Right>
            </Wrapper>
            <NavResponse>
                
                <RespItem>
                <Link to={'/home'} style={{textDecoration: "none", color: "gray",  marginRight: 10}}><HomeIcon/></Link>
                    <Link to={'/map'} style={{textDecoration: "none", color: "gray" }}><PlaceIcon/></Link>
                </RespItem>
                <Logo>SUPERB.</Logo>
                <RespItem>
                    { hasToken ? 
                         <RespText onClick={handleLogout}>LOG OUT</RespText> : 
                         <Link to={'/login'} style={{textDecoration: "none", color: "gray",  marginLeft: 10}}><RespText>LOG IN</RespText></Link> 
                    }
                    <Badge badgeContent={quantity} color="primary">
                    <Link to={'/cart'} style={{textDecoration: "none", color: "gray",  marginLeft: 10}}><ShoppingCartOutlinedIcon/></Link>
                    </Badge>
                </RespItem>
            </NavResponse>
        </Container>
    )
}

export default Navbar
