import React from 'react'
import Menu from './components/Menu'
import { Container, MenuContainer } from './styles'
import { TopCoffee } from './components/TopCoffee/index'
import { Popular } from './components/Popular'
import { Delivery } from './components/Delivery/intex'
import { About } from './components/About'

function App() {
    return (
        <Container>
            <MenuContainer>
                <Menu />
            </MenuContainer>
            <div className="about">
                <TopCoffee />
                <Popular />
                <div className="delivery">
                    <Delivery />
                </div>
                <About />
            </div>
            <div className="products"></div>
        </Container>
    )
}

export default App
