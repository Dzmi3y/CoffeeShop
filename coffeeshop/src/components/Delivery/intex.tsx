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
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    }

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    }
    return (
        <>
            <Title>
                How to use delivery <span className="underline">service</span>
            </Title>
            <Container
                variants={container}
                initial="hidden"
                whileInView="visible"
            >
                <CardContainer variants={item}>
                    <StyledImg src={ImageDelivery1} />
                    <MainInfo>choose your coffee</MainInfo>
                    <Description>there are 20+ coffees for you</Description>
                </CardContainer>
                <CardContainer variants={item}>
                    <StyledImg src={ImageDelivery2} />
                    <MainInfo>we delivery it to you</MainInfo>
                    <Description>Choose delivery service</Description>
                </CardContainer>
                <CardContainer variants={item}>
                    <StyledImg src={ImageDelivery3} />
                    <MainInfo>Enjoy your coffee</MainInfo>
                    <Description>Choose delivery service</Description>
                </CardContainer>
            </Container>
        </>
    )
}
