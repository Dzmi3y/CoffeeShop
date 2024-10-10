import React from 'react'
import {
    ControlsContainer,
    Container,
    LinksListContainer,
    Logo,
    NavigationItem,
} from './styles'
import LogoImage from '../../assets/images/logo_coffe.png'
import Serach from '../Search'
import { CartButton } from '../Buttons/CartButton'
import { Link, animateScroll as scroll } from 'react-scroll'

const Menu = () => {
    return (
        <Container>
            <Logo src={LogoImage} alt="CoffeeShop" />
            <LinksListContainer>
                <NavigationItem className="selected">
                    <Link to="about" smooth={true} duration={500}>
                        About Us
                    </Link>
                </NavigationItem>
                <NavigationItem>
                    <Link to="products" smooth={true} duration={500}>
                        Our Product
                    </Link>
                </NavigationItem>
                <NavigationItem>
                    <Link to="delivery" smooth={true} duration={500}>
                        Delivery
                    </Link>
                </NavigationItem>
            </LinksListContainer>
            <ControlsContainer>
                <Serach />
                <CartButton />
            </ControlsContainer>
        </Container>
    )
}

export default Menu
