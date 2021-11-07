
import styled from 'styled-components'
import { categories } from '../asset/data'
import CategoryItem from './CategoryItem.js'
import {Row} from 'react-bootstrap';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    margin: 0 5%;
    
    
`
const Categories = () => {
    return (
        <Container>
            <Row>
                {categories.map(item => (
                    <CategoryItem item={item} key={item.id}/>
                ))}
            </Row>
        </Container>
    )
}

export default Categories
