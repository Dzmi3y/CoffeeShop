import React, { useEffect, useRef, useState } from 'react'
import { Container, Slider, SliderContainer, SliderItem } from './styles'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import { Сarousel } from '../Сarousel'

export const Feedback = () => {
    return (
        <Container>
            <Сarousel data={[]} />
        </Container>
    )
}
