import React from 'react'
import { Icon, StyledInput, Container } from './styles'
import SearchIcon from '../../assets/images/search.png'

const Serach = () => {
    return (
        <Container>
            <Icon src={SearchIcon} alt="Search" />
            <StyledInput placeholder="search" />
        </Container>
    )
}

export default Serach
