import React from 'react'
import {
    ButtonsContainer,
    BackgroundImage,
    Container,
    Description,
    LeftBlockContainer,
    RightBlockContainer,
    Title,
} from './styles'
import { DarkOrderButton } from '../Buttons/DarkOrderButton'
import { MenuButton } from '../Buttons/MenuButton'
import { TopCoffeeCard } from '../TopCoffeeCard/intex'
import CoffeeBeansImage from '../../assets/images/coffee_beans_about.png'

export const About = () => {
    const coffeeInfo = {
        name: 'Cappuccino',
        raiting: 4.8,
        price: 18,
        imgUrl: '/images/cappucino_about.png',
    }
    return (
        <Container>
            <LeftBlockContainer>
                <Title>
                    Enjoy your <span className="orange">coffee</span>
                    <br />
                    before your activity
                </Title>
                <Description>
                    Boost your productivity and build your <br />
                    mood with a glass ofcoffee in the morning
                </Description>
                <ButtonsContainer>
                    <DarkOrderButton />
                    <MenuButton />
                </ButtonsContainer>
            </LeftBlockContainer>
            <RightBlockContainer>
                <TopCoffeeCard {...coffeeInfo} />
            </RightBlockContainer>
            <BackgroundImage src={CoffeeBeansImage} alt="CoffeeBeans" />
        </Container>
    )
}
