import styled from 'styled-components'
import { media, ScreenSizeEnum } from './media'
export const Container = styled.div`
    position: relative;

    ${media.lessThan(ScreenSizeEnum.XXL)`
        --left-right-margin: 3rem;
    `}
`

export const MenuContainer = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    z-index: 4;
`
