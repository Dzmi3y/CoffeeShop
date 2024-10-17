import React from 'react'
import Menu from './components/Menu'
import { Container, MenuContainer } from './styles'
import { About } from './components/About/index'
import { Popular } from './components/Popular'
import { Delivery } from './components/Delivery/intex'

function App() {
    return (
        <Container>
            <MenuContainer>
                <Menu />
            </MenuContainer>
            <div className="about">
                <About />
                <Popular />
                <Delivery />
            </div>
            <div className="products"></div>
            <div className="delivery"></div>
        </Container>
    )
}

export default App
