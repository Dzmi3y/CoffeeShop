import React, { useEffect, useState } from 'react'
import {
    BackgroundImage,
    Container,
    Description,
    TextContainer,
    Title,
} from './styles'
import { Сarousel } from '../Сarousel'
import { FeedbackInfo } from '../../model/FeedbackInfo'
import getFeedback from '../../api/feedbackApi'
import FeedbackBackgroundImage from '../../assets/images/feedback_background.png'

export const Feedback = () => {
    const [feedbackData, setFeedbackData] = useState<FeedbackInfo[]>([])

    useEffect(() => {
        setFeedbackData(getFeedback())
    }, [])

    return (
        <Container>
            <TextContainer>
                <Title>What they say about us</Title>
                <Description>
                    We always provide the best service
                    <br />
                    and always maintain the quality of
                    <br />
                    coffee
                </Description>
            </TextContainer>
            <Сarousel data={feedbackData} />
            <BackgroundImage src={FeedbackBackgroundImage} />
        </Container>
    )
}
