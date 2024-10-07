import styled from 'styled-components'
import { media, ScreenSizeEnum } from '../../media'

export const Container = styled.div`
    position: relative;
`

export const StyledInput = styled.input`
    border: none;
    background-color: var(--glass-color);
    color: var(--secondary-color);
    font-size: 12px;
    font-family: PopinsRegular;
    border-radius: 35px;
    height: 40px;
    width: 222px;
    padding-left: 34px;
    padding-right: 15px;
    z-index: 1;
    &:placeholder {
        color: #929292;
    }
    ${media.greaterThan(ScreenSizeEnum.SM)`
        &:hover {
            z-index: 1;
            filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.2));
        }
    `}
    &:focus {
        filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
        outline: 0;
        outline-offset: 0;
    }
`

export const Icon = styled.img`
    width: 24px;
    height: 24px;
    position: absolute;
    margin-top: 10px;
    margin-left: 5px;
    z-index: 2;
`
