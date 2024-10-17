import React from 'react'
import {
    CardContainer,
    Container,
    Description,
    MainInfo,
    StyledImg,
    Title,
} from './styles'
import ImageDelivery1 from '../../assets/images/delivery_1.png'
import ImageDelivery2 from '../../assets/images/delivery_2.png'
import ImageDelivery3 from '../../assets/images/delivery_3.png'

export const Delivery = () => {
    return (
        <>
            <Title>
                How to use delivery <span className="underline">service</span>
            </Title>
            <Container>
                <CardContainer>
                    <StyledImg src={ImageDelivery1} />
                    <MainInfo>choose your coffee</MainInfo>
                    <Description>there are 20+ coffees for you</Description>
                </CardContainer>
                <CardContainer>
                    <StyledImg src={ImageDelivery2} />
                    <MainInfo>we delivery it to you</MainInfo>
                    <Description>Choose delivery service</Description>
                </CardContainer>
                <CardContainer>
                    <StyledImg src={ImageDelivery3} />
                    <MainInfo>Enjoy your coffee</MainInfo>
                    <Description>Choose delivery service</Description>
                </CardContainer>
            </Container>
        </>
    )
}
