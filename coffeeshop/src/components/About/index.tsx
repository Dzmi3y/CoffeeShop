import React, { useEffect, useState } from 'react'
import {
    ButtonsContainer,
    BackgroundImage1,
    BackgroundImage2,
    Container,
    Description,
    LeftBlockContainer,
    RightBlockContainer,
    Title,
} from './styles'
import { DarkOrderButton } from '../Buttons/DarkOrderButton'
import { MenuButton } from '../Buttons/MenuButton'
import { TopCoffeeCard } from '../TopCoffeeCard/intex'
import CoffeeBeansImage1 from '../../assets/images/coffee_beans_about.png'
import CoffeeBeansImage2 from '../../assets/images/coffee_beans_popular.png'

export const About = () => {
    const coffeeInfo = {
        name: 'Cappuccino',
        raiting: 4.8,
        price: 18,
        imgUrl: '/images/cappucino_about.png',
    }

    const [lastScrollTop, setLastScrollTop] = useState<number>(0)
    const [scrollDirrectionIsDown, setScrollDirrectionIsDown] =
        useState<boolean>()

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop: number =
                window.pageYOffset || document.documentElement.scrollTop

            if (currentScrollTop > lastScrollTop) {
                if (!scrollDirrectionIsDown) setScrollDirrectionIsDown(true)
            } else {
                if (scrollDirrectionIsDown) setScrollDirrectionIsDown(false)
            }

            setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollTop, scrollDirrectionIsDown])

    const getAnimationClass = (): string => {
        if (scrollDirrectionIsDown === undefined) {
            return ''
        }
        return scrollDirrectionIsDown ? 'scrollDown' : 'scrollTop'
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
            <BackgroundImage1
                className={getAnimationClass()}
                src={CoffeeBeansImage1}
                alt="CoffeeBeans"
            />
            <BackgroundImage2
                className={getAnimationClass()}
                src={CoffeeBeansImage2}
                alt="CoffeeBeans"
            />
        </Container>
    )
}
