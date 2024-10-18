import React, { ReactNode } from 'react'
import { Button } from './styles'

type Props = {
    onClick?: () => void
    children: ReactNode
}

export const DarkButton: React.FC<Props> = ({ onClick, children }) => {
    return <Button onClick={onClick}>{children}</Button>
}
