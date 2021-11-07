import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
    height: 60px;
    padding: 0 20px 15px 20px;
    border-bottom: 1px solid lightgrey;
    @media only screen and (max-width:380px){
        display: none
    }
`

const Wrapper = styled.div`
    padding: 10px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;  
    display: flex ;
    align-items: center;
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
const NavbarAdmin = () => {
    return (
        <>
        <Container>
            <Wrapper>
               <Left>
               <MenuItemLeft>ADMIN</MenuItemLeft>
               </Left>
               <Center>
                   <Logo>SUPERB.</Logo>
               </Center>
               <Right>
                   <MenuItemRight>ADMIN NAME</MenuItemRight>
                   <MenuItemRight>LOGOUT</MenuItemRight>
               </Right>
            </Wrapper>
        </Container>
        </>
    )
}

export default NavbarAdmin
