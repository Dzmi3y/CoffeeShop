import React, { ReactNode } from 'react'
import { RadioButton } from './styles'

type Props = {
    text: string
    name: string
    checked?: boolean
    onClick?: () => void
}

export const OrangeRadioButton: React.FC<Props> = ({
    text,
    name,
    checked,
    onClick,
}) => {
    return (
        <RadioButton
            type="radio"
            name={name}
            defaultChecked={checked}
            value={text}
        />
    )
}
