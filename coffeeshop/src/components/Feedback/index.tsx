import React, { useEffect, useRef, useState } from 'react'
import { Container, Slider, SliderContainer, SliderItem } from './styles'

export const Feedback = () => {
    const divRef = useRef<HTMLDivElement>(null)
    const [xStart, setXStart] = useState<number>(0)
    const [lastViewedElement, setLastViewedElement] = useState<number>(3)
    const [isLeftSwipe, setIsLeftSwipe] = useState<boolean>()
    const itemsData = Array.from(
        { length: 6 },
        (_, index) => `item${index + 1}`
    )

    const [sliderData, setSliderData] = useState<string[]>(
        itemsData.slice(0, 3)
    )

    useEffect(() => {
        const handleStart = (x: number) => {
            setXStart(x)
        }

        const handleEnd = (x: number) => {
            setIsLeftSwipe(xStart - x < 0)
        }

        const handleMouseDown = (event: MouseEvent) =>
            handleStart(event.clientX)
        const handleMouseUp = (event: MouseEvent) => handleEnd(event.clientX)
        const handleTouchStart = (event: TouchEvent) =>
            handleStart(event.touches[0].clientX)
        const handleTouchEnd = (event: TouchEvent) =>
            handleEnd(event.changedTouches[0].clientX)

        const currentDiv = divRef.current
        currentDiv?.addEventListener('mousedown', handleMouseDown)
        currentDiv?.addEventListener('mouseup', handleMouseUp)
        currentDiv?.addEventListener('touchstart', handleTouchStart)
        currentDiv?.addEventListener('touchend', handleTouchEnd)

        return () => {
            currentDiv?.removeEventListener('mousedown', handleMouseDown)
            currentDiv?.removeEventListener('mouseup', handleMouseUp)
            currentDiv?.removeEventListener('touchstart', handleTouchStart)
            currentDiv?.removeEventListener('touchend', handleTouchEnd)
        }
    }, [xStart])

    useEffect(() => {
        if (isLeftSwipe === undefined) {
            return
        }
        if (isLeftSwipe) {
            if (0 < lastViewedElement - 3) {
                setSliderData(
                    itemsData.slice(
                        lastViewedElement - 4,
                        lastViewedElement - 1
                    )
                )
                if (lastViewedElement - 1 > 2) {
                    setLastViewedElement(lastViewedElement - 1)
                }
            }
        } else {
            if (itemsData.length > lastViewedElement) {
                setSliderData(
                    itemsData.slice(
                        lastViewedElement - 2,
                        lastViewedElement + 1
                    )
                )
                setLastViewedElement(lastViewedElement + 1)
            }
        }
        setIsLeftSwipe(undefined)
    }, [isLeftSwipe, lastViewedElement])

    return (
        <Container>
            <SliderContainer>
                <Slider ref={divRef}>
                    {sliderData.map((d) => (
                        <SliderItem key={d}>{d}</SliderItem>
                    ))}
                </Slider>
            </SliderContainer>
        </Container>
    )
}
