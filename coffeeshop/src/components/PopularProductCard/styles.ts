import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    z-index: 4;
    width: 343px;
    height: 373px;
    border-radius: 12px;
    padding-top: 24px;
    text-align: center;
    position: relative;
    background: var(--glass-color);
    &::before {
        content: '';
        position: absolute;
        top: -5px;
        left: -5px;
        right: -5px;
        bottom: -5px;
        border-radius: 16px;
        border: solid 6px rgba(255, 255, 255, 0.5);
        pointer-events: none;
        box-shadow: -10px 20px 25px rgba(0, 0, 0, 0.2);
    }
`
export const ControlsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    justify-content: space-between;
    padding-left: 29px;
    padding-right: 29px;
    padding-top: 19px;
`
export const CoffeeImage = styled.img`
    width: 307px;
    height: 226px;
    border-radius: 12px;
`
export const Raiting = styled.div`
    background-color: var(--glass-color);
    color: var(--secondary-color);
    font-family: PoppinsBold;
    font-size: 14px;
    width: 62px;
    height: 25px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    box-shadow: -10px 20px 25px rgba(0, 0, 0, 0.2);
    top: 31px;
    left: 29px;
    &::before {
        content: '';
        position: absolute;
        top: -3px;
        left: -3px;
        right: -3px;
        bottom: -3px;
        border-radius: 16px;
        border: solid 4px rgba(255, 255, 255, 0.5);
        pointer-events: none;
    }
`
export const RaitingStar = styled.img`
    width: 14px;
    height: 14px;
    margin-left: 4px;
`
export const RaitingValue = styled.span``

export const Name = styled.div`
    font-family: PoppinsSemiBold;
    font-size: 24px;
`
export const Price = styled.div`
    font-family: PoppinsBold;
    font-size: 24px;
`

export const RadiobuttonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`
