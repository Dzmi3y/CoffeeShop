import React, { useEffect, useRef, useState } from 'react'
import { Container, Slider, SliderContainer, SliderItem } from './styles'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import { Сarousel } from '../Сarousel'
import { FeedbackInfo } from '../../model/FeedbackInfo'
import getFeedback from '../../api/feedbackApi'

export const Feedback = () => {
    const [feedbackData, setFeedbackData] = useState<FeedbackInfo[]>([])

    useEffect(() => {
        setFeedbackData(getFeedback())
    }, [])

    return (
        <Container>
            <Сarousel data={feedbackData} />
        </Container>
    )
}
