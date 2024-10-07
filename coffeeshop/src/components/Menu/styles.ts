import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem var(--left-right-margin) 0rem var(--left-right-margin);
`
export const Logo = styled.img`
    width: 150px;
    height: 30px;
`
export const NavigationItem = styled.div`
    cursor: pointer;
    font-family: PoppinsRegular;
    color: var(--secondary-color);
    font-size: 18px;
    &.selected {
        color: var(--primary-color);
    }
`

export const ControlsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 24px;
`

export const LinksListContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 32px;
    align-items: center;
`
