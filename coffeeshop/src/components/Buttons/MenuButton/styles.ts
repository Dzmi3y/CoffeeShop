import styled from 'styled-components'
import { media, ScreenSizeEnum } from '../../../media'

export const Button = styled.button`
    cursor: pointer;
    color: var(--primary-color);
    font-family: PoppinsBold;
    font-size: 12px;
    border: none;
    padding: 0;
    background: none;
    &:active {
        filter: drop-shadow(0 0 15px);
    }

    ${media.greaterThan(ScreenSizeEnum.SM)`
        &:hover{
           filter: drop-shadow(0 0 20px);
        }
        &:active{
            filter: drop-shadow(0 0 15px);
        }
    `}
`
