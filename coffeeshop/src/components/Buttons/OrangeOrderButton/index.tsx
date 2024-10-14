import React, { ReactNode } from 'react'
import { Button, StyledImg } from './styles'
import CartImage from '../../../assets/images/orange_medium_cart.png'

type Props = {
    onClick?: () => void
}

export const OrangeOrderButton: React.FC<Props> = ({ onClick }) => {
    return (
        <Button onClick={onClick}>
            <StyledImg src={CartImage} alt="OrderButton" />
        </Button>
    )
}
