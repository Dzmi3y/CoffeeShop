import React, { ReactNode } from 'react'
import { Button, StyledImg } from './styles'
import EmptyCartImage from '../../assets/images/empty_cart.png'

type Props = {
    onClick?: () => void
}

export const CartButton: React.FC<Props> = ({ onClick }) => {
    return (
        <Button onClick={onClick}>
            <StyledImg src={EmptyCartImage} alt="Cart" />
        </Button>
    )
}
