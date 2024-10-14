import styled from 'styled-components'

export const Container = styled.div`
    padding-top: 1rem;
    padding-bottom: 90px;
    background: linear-gradient(to bottom, #f6ebda 60%, #ffffff 40%);
    position: relative;
`
export const Title = styled.div`
    z-index: 4;
    margin-left: var(--left-right-margin);
    margin-bottom: 2rem;
    color: #000000;
    font-size: 32px;
    font-family: PoppinsSemiBold;
    & > .underline {
        position: relative;
        z-index: 4;
        &::after {
            content: '';
            height: 4px;
            border-radius: 12px;
            left: 0;
            right: 0;
            bottom: 1px;
            position: absolute;
            background: var(--primary-color);
        }
    }
`
export const CardContainer = styled.div`
    z-index: 4;
    display: flex;
    justify-content: center;
    gap: 38px;
`
export const BackgroundImage = styled.img`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%);
    z-index: 3;
`
export const CoffeeBeansBackgroundImage = styled.img`
    position: absolute;
    z-index: 2;
    top: -80px;
    left: var(--coffee-beans-left-margin);
`
