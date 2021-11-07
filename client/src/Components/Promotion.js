import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: #72caca;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Promotion = () => {
    return (
        <Container>
            Super Deal Buy any cloth today FREE Shipping !!
        </Container>
    )
}

export default Promotion
