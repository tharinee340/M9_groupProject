import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   padding: 50px 0 0 0;
   margin: 0 5%;
`
const List = styled.ul`
    list-style: none;
    display: flex;
    margin:0;
    padding: 0;

`

const Page = styled.li`
    margin-right: 20px;
    
`
const Space = styled.span`
    margin-right: 20px;
`

const Breadcrumb = () => {
    return (
        <Container>
            <List>
                <Page>Product Detail</Page><Space>/</Space>
                <Page>Shopping Bag</Page>
            </List>
        </Container>
    )
}

export default Breadcrumb
