import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Container = styled.div`
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    justify-content: center;
`
export const SliderContainer = styled.div`
    height: 120px;
    width: 320px;
`
export const Slider = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-left: 400px;
`

export const SliderItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    width: 100px;
    height: 100px;
    min-height: 100px;
    min-width: 100px;
    user-select: none;
`
