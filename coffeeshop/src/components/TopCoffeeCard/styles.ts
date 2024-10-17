import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
    position: relative;
`
export const StyledImage = styled.img`
    width: 416px;
    height: 416px;
    border-radius: 50%;
    margin-right: 35px;
    margin-left: 75px;
`
export const InfoContainer = styled.div`
    background-color: var(--glass-color);
    color: var(--secondary-color);
    font-family: PoppinsSemiBold;
    font-size: 24px;
    height: 57px;
    padding-left: 57px;
    padding-right: 57px;
    border-radius: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Title = styled(motion.div)`
    width: 271px;
    border: solid 10px rgba(255, 255, 255, 0.5);
    border-radius: 42px;
    position: absolute;
    top: 25px;
    box-shadow: -10px 20px 25px rgba(0, 0, 0, 0.2);
`
export const Raiting = styled(motion.div)`
    width: 133px;
    border: solid 10px rgba(255, 255, 255, 0.5);
    border-radius: 42px;
    position: absolute;
    top: 88px;
    right: 0px;
    box-shadow: -10px 20px 25px rgba(0, 0, 0, 0.2);
`
export const RaitingStar = styled.img`
    width: 24px;
    height: 24px;
    margin-left: 4px;
`
export const RaitingValue = styled.span``
export const Price = styled(motion.div)`
    width: 141px;
    border: solid 10px rgba(255, 255, 255, 0.5);
    border-radius: 42px;
    position: absolute;
    top: 324px;
    left: 90px;
    box-shadow: -10px 20px 25px rgba(0, 0, 0, 0.2);
`
