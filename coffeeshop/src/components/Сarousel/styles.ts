import { motion } from 'framer-motion'
import styled from 'styled-components'
export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const CarouselItem = styled(motion.div)`
    user-select: none;
    position: relative;
    margin-left: 40px;
    margin-top: 20px;
    margin-bottom: 35px;
    filter: drop-shadow(-5px 10px 10px rgba(0, 0, 0, 0.2));
`
export const TextContainerBorder = styled.div`
    bottom: 15px;
    left: 15px;
    position: absolute;
    border-radius: 6px;
    background-color: rgba(255, 211, 144, 0.5);
`

export const TextContainer = styled.div`
    margin: 6px;
    padding: 10px 5px;
    color: var(--secondary);
    background-color: rgba(255, 211, 144, 0.9);
    width: 216px;
    min-height: 40px;
    line-height: 1.1rem;
`
export const Name = styled.div`
    font-size: 18px;
    font-family: PoppinsRegular;
`
export const Message = styled.div`
    font-size: 14px;
    font-family: PoppinsRegular;
`
export const StyledImage = styled.img`
    border: 6px solid rgba(255, 211, 144, 0.6);
`

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 5px;
    gap: 10px;
`

export const PaginationDot = styled(motion.button)`
    border-radius: 50%;
    cursor: pointer;
    width: 15px;
    height: 15px;
    border: none;
    margin-top: 5px;
    padding: 0;
`
