import React from 'react'
import styled from 'styled-components'
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';
import Twitter from '@mui/icons-material/Twitter';
import Map from '@mui/icons-material/Room';
import Phone from '@mui/icons-material/Phone';
import Mail from '@mui/icons-material/MailOutline';

const Container = styled.div`
    display: flex;
    background-color: #7A7A7A;
    color: lightgray;
    padding: 0 5%;
    


`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`
    color: white;
`
const Description = styled.p`
    padding-right: 20px;
`
const IconContainer = styled.div`
    display: flex;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: lightgray;
    border: 1px solid white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;

    &:hover {
        color: white;
    }

`

const Center = styled.div`
    flex: 1;
    padding: 20px;

`
const Title = styled.h3`
    font-size: 20px;
    margin-bottom: 30px;
    color: white;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
    &:hover {
        color: white;
    }

`
const Right = styled.div`
    flex: 1;
    padding: 20px;

`
const ContactItem = styled.p`
    cursor: pointer;
    &:hover {
        color: white;
    }
`


const Footer = () => {
    return (
        <Container >
            <Left>
                <Logo>SUPERB.</Logo>
                <Description>
                    There are many collection of cloth that you can choose any thing that ypu want. Our website is for the woman that interested about styling.
                </Description>
                <IconContainer>
                    <Icon><Facebook/></Icon>
                    <Icon><Instagram/></Icon>
                    <Icon><Twitter/></Icon>
                </IconContainer>
            </Left>
            
            <Center>
                <Title>CATEGORIES</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Summer Collection</ListItem>
                    <ListItem>Winter Collection</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>About Us</ListItem>
                </List>

            </Center>
            <Right>
                <Title>CONTACT</Title>
                <ContactItem><Map/> Chiang Mai, Thailand</ContactItem>
                <ContactItem><Phone/> +66 123 4561</ContactItem>
                <ContactItem><Mail/> tharinee_t@cmu.ac.th</ContactItem>
            </Right>
        </Container>
    )
}

export default Footer
