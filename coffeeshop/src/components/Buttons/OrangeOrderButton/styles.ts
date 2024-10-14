import styled from 'styled-components'
import { media, ScreenSizeEnum } from '../../../media'

export const Button = styled.button`
    cursor: pointer;
    width: 43px;
    height: 43px;
    border: none;
    padding: 0;
    background: none;
    &:active {
        filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.9));
    }

    ${media.greaterThan(ScreenSizeEnum.SM)`
        &:hover{
           filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
        }
        &:active{
            filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.9));
        }
    `}
`

export const StyledImg = styled.img`
    width: 43px;
    height: 43px;
`
