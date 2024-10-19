import styled from 'styled-components'

export const Container = styled.div`
    margin-left: var(--left-right-margin);
    margin-top: 50px;
`
export const MenuContainer = styled.div`
    display: grid;
    margin-top: 50px;
    grid-template-columns: repeat(3, auto);
    justify-content: center;
    gap: 3rem;
`
export const Title = styled.div`
    color: #000000;
    font-size: 32px;
    font-family: PoppinsSemiBold;
    & > .underline {
        position: relative;
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
