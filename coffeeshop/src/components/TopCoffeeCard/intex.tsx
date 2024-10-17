import React, { ReactNode } from 'react'
import StarImage from '../../assets/images/star.png'
import {
    Container,
    InfoContainer,
    Price,
    Raiting,
    RaitingStar,
    RaitingValue,
    StyledImage,
    Title,
} from './styles'
import { delay } from 'framer-motion'

type Props = {
    name: string
    raiting: number
    price: number
    imgUrl: string
}

export const TopCoffeeCard: React.FC<Props> = ({
    name,
    raiting,
    price,
    imgUrl,
}) => {
    const info = {
        hidden: { x: 50, opacity: 0 },
        visible: (custom: number) => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.2 },
        }),
    }

    return (
        <Container>
            <StyledImage src={imgUrl} alt="Coffee" />
            <Title
                custom={1}
                variants={info}
                animate="visible"
                initial="hidden"
            >
                <InfoContainer>{name}</InfoContainer>
            </Title>
            <Raiting
                custom={2}
                variants={info}
                animate="visible"
                initial="hidden"
            >
                <InfoContainer>
                    <RaitingValue>{raiting}</RaitingValue>
                    <RaitingStar src={StarImage} alt="RaitingStarImage" />
                </InfoContainer>
            </Raiting>
            <Price
                custom={3}
                variants={info}
                animate="visible"
                initial="hidden"
            >
                <InfoContainer>{price}K</InfoContainer>
            </Price>
        </Container>
    )
}
