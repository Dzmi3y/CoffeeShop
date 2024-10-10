import React, { ReactNode } from 'react'
import { Button } from './styles'

type Props = {
    onClick?: () => void
}

export const MenuButton: React.FC<Props> = ({ onClick }) => {
    return <Button onClick={onClick}>More menu</Button>
}
