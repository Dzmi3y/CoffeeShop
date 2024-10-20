import React from 'react'
import Menu from './components/Menu'
import { Container, MenuContainer } from './styles'
import { TopCoffee } from './components/TopCoffee/index'
import { Popular } from './components/Popular'
import { Delivery } from './components/Delivery/intex'
import { About } from './components/About'
import { CoffeeMenu } from './components/CoffeeMenu/insex'
import { Feedback } from './components/Feedback'

function App() {
    return (
        <Container>
            <MenuContainer>
                <Menu />
            </MenuContainer>
            <div className="about">
                <TopCoffee />
            </div>
            <Popular />
            <div className="delivery">
                <Delivery />
            </div>
            <About />

            <div className="products">
                <CoffeeMenu />
            </div>
            <Feedback />
        </Container>
    )
}

export default App
