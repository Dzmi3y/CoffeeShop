import React from 'react'
import {
    CoffeeImage,
    Container,
    ControlsContainer,
    Name,
    Price,
    RadiobuttonContainer,
    Raiting,
    RaitingStar,
    RaitingValue,
} from './styles'
import StarImage from '../../assets/images/star.png'
import { OrangeOrderButton } from '../Buttons/OrangeOrderButton'
import { OrangeRadioButton } from '../Buttons/OrangeRadioButton'

type Props = {
    name: string
    raiting: number
    price: number
    imgUrl: string
    addToCart: () => void
}

export const PopularProductCard: React.FC<Props> = ({
    name,
    raiting,
    price,
    imgUrl,
    addToCart,
}) => {
    return (
        <Container whileHover={{ scale: 1.1 }}>
            <CoffeeImage src={imgUrl} alt={name} />
            <Raiting>
                <RaitingValue>{raiting}</RaitingValue>
                <RaitingStar src={StarImage} alt="RaitingStar" />
            </Raiting>
            <ControlsContainer>
                <Name>{name}</Name>
                <Price>{price} k</Price>
                <RadiobuttonContainer>
                    <OrangeRadioButton
                        name={name + '_type'}
                        checked
                        text="Hot"
                    />
                    <OrangeRadioButton name={name + '_type'} text="Cold" />
                </RadiobuttonContainer>
                <OrangeOrderButton onClick={addToCart} />
            </ControlsContainer>
        </Container>
    )
}
