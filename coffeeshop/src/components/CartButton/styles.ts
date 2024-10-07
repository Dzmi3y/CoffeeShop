import styled from 'styled-components'
import { media, ScreenSizeEnum } from '../../media'

export const Button = styled.button`
    border-radius: 50;
    cursor: pointer;
    width: 32px;
    height: 32px;
    border: none;
    margin-top: 5px;
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
    width: 32px;
    height: 32px;
`
