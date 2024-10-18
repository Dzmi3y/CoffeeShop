import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 170px;
    position: relative;
    margin-top: 80px;
    height: 570px;
`
export const ImageContainer = styled.div`
    z-index: 4;
`
export const BackgroundImage = styled.img`
    width: 100%;
    height: 490px;
    position: absolute;
    bottom: 0;
    clip-path: inset(-572px 0 0 0);
    object-fit: cover;
    object-position: bottom;
`
export const StyledImage = styled(motion.img)`
    z-index: 4;
    width: 370px;
    height: 509px;
    border: solid 10px rgba(255, 255, 255, 0.5);
    border-radius: 42px;
    box-shadow: -10px 20px 25px rgba(0, 0, 0, 0.2);
    margin-bottom: 70px;
`

export const InfoContainer = styled.div`
    display: flex;
    z-index: 4;
    flex-direction: column;
    justify-content: center;
    gap: 23px;
`

export const Title = styled.div`
    color: #000000;
    font-size: 32px;
    font-family: PoppinsSemiBold;
    z-index: 4;
    & > .underline {
        position: relative;
        z-index: 4;
        &::after {
            content: '';
            height: 4px;
            border-radius: 12px;
            left: 0;
            right: 0;
            bottom: 1px;
            position: absolute;
            background: var(--primary-color);
        }
    }
`
export const MainText = styled.div`
    color: #000000;
    font-size: 24px;
    font-family: PoppinsSemiBold;
    line-height: 2rem;
`

export const Description = styled.div`
    color: var(--light-color);
    font-size: 18px;
    line-height: 1.5rem;
    font-family: Regular;
`
