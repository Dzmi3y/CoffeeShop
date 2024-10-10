import styled from 'styled-components'
import { media, ScreenSizeEnum } from '../../../media'

export const Button = styled.button`
    border-radius: 33px;
    cursor: pointer;
    width: 170px;
    height: 46px;
    border: none;
    padding: 0;
    background: var(--secondary-color);
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
export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`
export const Text = styled.span`
    color: var(--glass-color);
    font-family: PoppinsSemiBold;
    font-size: 14px;
    margin-top: auto;
    margin-bottom: auto;
`
export const StyledImg = styled.img`
    width: 22px;
    height: 22px;
`
