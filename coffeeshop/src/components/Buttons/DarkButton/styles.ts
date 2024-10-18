import styled from 'styled-components'
import { media, ScreenSizeEnum } from '../../../media'

export const Button = styled.button`
    border-radius: 33px;
    cursor: pointer;
    width: 142px;
    height: 38px;
    border: none;
    padding: 0;
    background: var(--secondary-color);

    color: #f4ae26;
    font-family: PoppinsBold;
    font-size: 12px;

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
