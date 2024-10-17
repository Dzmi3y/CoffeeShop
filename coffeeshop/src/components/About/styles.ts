import styled from 'styled-components'

export const Container = styled.div`
    height: 560px;
    background-color: #f6ebda;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
`
export const LeftBlockContainer = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: var(--left-right-margin);
`
export const RightBlockContainer = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: end;
    padding-bottom: 20px;
    align-items: end;
    margin-right: var(--left-right-margin);
`
export const Title = styled.p`
    font-family: PoppinsSemiBold;
    color: var(--secondary-color);
    & > .orange {
        color: var(--primary-color);
    }
    font-size: 48px;
    margin-bottom: 10px;
`
export const Description = styled.p`
    font-family: PoppinsRegular;
    font-size: 18px;
    line-height: 1.5rem;
    color: var(--light-color);
`
export const ButtonsContainer = styled.div`
    margin-top: 10px;
    display: flex;
    gap: 26px;
`

export const BackgroundImage1 = styled.img`
    position: absolute;
    z-index: 0;
    right: var(--coffee-beans-right-margin);
`
export const BackgroundImage2 = styled.img`
    position: absolute;
    z-index: 2;
    bottom: -300px;
    left: var(--coffee-beans-left-margin);
`
