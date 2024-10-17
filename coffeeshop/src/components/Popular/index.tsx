import React from 'react'
import { BackgroundImage, CardContainer, Container, Title } from './styles'
import { PopularProductCard } from '../PopularProductCard'
import BackGroundRectangle from '../../assets/images/back_ground_rectangle.png'

export const Popular = () => {
    const products = [
        {
            id: 1,
            name: 'Vanilla Latte',
            raiting: 4.8,
            price: 21,
            imgUrl: '/images/vanilla_latte.png',
        },
        {
            id: 2,
            name: 'Espresso',
            raiting: 4.8,
            price: 12,
            imgUrl: '/images/espresso.png',
        },
        {
            id: 3,
            name: 'Hazelnut Latte',
            raiting: 4.8,
            price: 23,
            imgUrl: '/images/hazelnut_latte.png',
        },
    ]
    const addToCart = (id: number) => {
        console.log(id)
    }

    return (
        <Container>
            <Title>
                Popular <span className="underline">Now</span>
            </Title>
            <CardContainer>
                {products.map((p) => (
                    <PopularProductCard
                        key={p.id}
                        {...p}
                        addToCart={() => addToCart(p.id)}
                    />
                ))}
            </CardContainer>
            <BackgroundImage src={BackGroundRectangle} />
        </Container>
    )
}
