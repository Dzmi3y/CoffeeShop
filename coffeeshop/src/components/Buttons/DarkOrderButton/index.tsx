import React, { ReactNode } from 'react'
import { Button, Container, StyledImg, Text } from './styles'
import CartImage from '../../../assets/images/orange_little_cart.png'

type Props = {
    onClick?: () => void
}

export const DarkOrderButton: React.FC<Props> = ({ onClick }) => {
    return (
        <Button onClick={onClick}>
            <Container>
                <Text>Order now</Text>
                <StyledImg src={CartImage} alt="OrderButton" />
            </Container>
        </Button>
    )
}
