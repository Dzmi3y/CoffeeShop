import React from 'react'
import Menu from './components/Menu'
import { Container, MenuContainer } from './styles'

function App() {
    return (
        <Container>
            <MenuContainer>
                <Menu />
            </MenuContainer>
            <div className="about"></div>
            <div className="products"></div>
            <div className="delivery"></div>
        </Container>
    )
}

export default App
