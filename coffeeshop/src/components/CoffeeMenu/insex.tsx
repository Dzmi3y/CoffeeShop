import React from 'react'
import { Container, MenuContainer, Title } from './styles'
import { PopularProductCard } from '../PopularProductCard'

export const CoffeeMenu = () => {
    const products = [
        {
            id: 1,
            name: 'Sandwich',
            raiting: 4.8,
            price: 21,
            imgUrl: '/images/sandwich.png',
        },
        {
            id: 2,
            name: 'Hot Milk',
            raiting: 4.8,
            price: 12,
            imgUrl: '/images/hot_milk.png',
        },
        {
            id: 3,
            name: 'Coffee Ice Cream',
            raiting: 4.8,
            price: 23,
            imgUrl: '/images/coffee_ice_cream.png',
        },
        {
            id: 4,
            name: 'Cappucino',
            raiting: 4.8,
            price: 23,
            imgUrl: '/images/cappucino.png',
        },
        {
            id: 5,
            name: 'Moccacinno',
            raiting: 4.8,
            price: 23,
            imgUrl: '/images/moccacinno.png',
        },
        {
            id: 6,
            name: 'Wafle Ice Cream',
            raiting: 4.8,
            price: 23,
            imgUrl: '/images/wafle_ice_cream.png',
        },
    ]
    const addToCart = (id: number) => {
        console.log(id)
    }

    return (
        <Container>
            <Title>
                Special menu <span className="underline">for you</span>
            </Title>
            <MenuContainer>
                {products.map((p) => (
                    <PopularProductCard
                        key={p.id}
                        {...p}
                        addToCart={() => addToCart(p.id)}
                    />
                ))}
            </MenuContainer>
        </Container>
    )
}
