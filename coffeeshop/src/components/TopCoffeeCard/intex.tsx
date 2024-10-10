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
    return (
        <Container>
            <StyledImage src={imgUrl} alt="Coffee" />
            <Title>
                <InfoContainer>{name}</InfoContainer>
            </Title>
            <Raiting>
                <InfoContainer>
                    <RaitingValue>{raiting}</RaitingValue>
                    <RaitingStar src={StarImage} alt="RaitingStarImage" />
                </InfoContainer>
            </Raiting>
            <Price>
                <InfoContainer>{price}K</InfoContainer>
            </Price>
        </Container>
    )
}
