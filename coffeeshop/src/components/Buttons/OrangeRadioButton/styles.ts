import styled from 'styled-components'
import { media, ScreenSizeEnum } from '../../../media'

export const RadioButton = styled.input`
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
    width: 64px;
    height: 32px;
    color: #ffd28f;
    background: none;
    font-family: PoppinsSemiBold;
    font-size: 18px;
    border: 3px solid #ffd28f;
    border-radius: 8px;
    padding: 0;
    background: none;
    &:checked {
        color: var(--primary-color);
        border: 3px solid var(--primary-color);
    }

    &:before {
        content: attr(value);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 27px;
    }

    &:active {
        box-shadow: 0 0 20px;
    }

    ${media.greaterThan(ScreenSizeEnum.SM)`
        &:hover{
            box-shadow: 0 0 10px ;
        }
        &:active {
        box-shadow: 0 0 20px ;
    }
    `}
`
