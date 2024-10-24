import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 160px;
    margin-bottom: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`

export const TextContainer = styled.div`
    margin-left: var(--left-right-margin);
    line-height: 2rem;
`
export const Title = styled.div`
    font-size: 32px;
    font-family: PoppinsSemiBold;
    color: #000000;
`
export const Description = styled.div`
    font-size: 18px;
    font-family: PoppinsRegular;
    color: var(--light-color);
`
export const BackgroundImage = styled.img`
    position: absolute;
    left: 0;
    z-index: -1;
`
