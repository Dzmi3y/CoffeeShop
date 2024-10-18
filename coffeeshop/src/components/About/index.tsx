import React from 'react'
import CoffeeImage from '../../assets/images/about_coffee.png'
import CoffeeBackgroundImage from '../../assets/images/about_bg_image.png'
import {
    BackgroundImage,
    Container,
    Description,
    ImageContainer,
    InfoContainer,
    MainText,
    StyledImage,
    Title,
} from './styles'
import { DarkButton } from '../Buttons/DarkButton'

export const About = () => {
    return (
        <Container>
            <ImageContainer>
                <StyledImage
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    whileTap={{
                        scale: 0.8,
                        rotate: -10,
                    }}
                    src={CoffeeImage}
                    alt="CoffeeImage"
                />
            </ImageContainer>
            <InfoContainer>
                <Title>
                    About <span className="underline">us</span>
                </Title>
                <MainText>
                    We provide quality coffee,
                    <br />
                    and ready to deliver.
                </MainText>
                <Description>
                    We are a company that makes and distributes
                    <br />
                    delicious drinks. our main product is made with a<br />
                    secret recipe and available in stores worldwide.
                </Description>
                <DarkButton>Get your coffee</DarkButton>
            </InfoContainer>
            <BackgroundImage src={CoffeeBackgroundImage} />
        </Container>
    )
}
