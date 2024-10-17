import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 100px;
`
export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
`
export const StyledImg = styled.img`
    width: 159px;
    height: 159px;
`
export const Description = styled.div`
    font-family: PoppinsRegular;
    font-size: 18px;
    color: #000000;
`
export const MainInfo = styled.div`
    font-family: PoppinsSemiBold;
    font-size: 24px;
    color: var(--secondary-color);
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
