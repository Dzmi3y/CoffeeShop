import React, { useEffect, useRef, useState } from 'react'
import { Container, Slider, SliderContainer, SliderItem } from './styles'
import {
    motion,
    useAnimation,
    useAnimationControls,
    useMotionValue,
} from 'framer-motion'

export const Feedback = () => {
    const itemsData: string[] = Array.from(
        { length: 6 },
        (_, index) => `item${index + 1}`
    )

    const containerRef = useRef(null)
    const x = useMotionValue(0)
    const controls = useAnimation()
    const itemWidth = 120

    const handleDragEnd = (event: any, info: { offset: { x: any } }) => {
        const offset = info.offset.x
        let newIndex = -1 * Math.round(x.get() / itemWidth)

        newIndex = newIndex < 0 ? 0 : newIndex
        newIndex =
            newIndex >= itemsData.length - 3 ? itemsData.length - 3 : newIndex
        controls.start({ x: -newIndex * itemWidth })
        console.log('page')
        console.log(newIndex + 1)
    }

    return (
        <Container>
            <div
                style={{ overflow: 'hidden', width: itemWidth * 3 }}
                ref={containerRef}
            >
                <motion.div
                    drag="x"
                    dragConstraints={containerRef}
                    dragElastic={1}
                    style={{ display: 'flex', x }}
                    onDragEnd={handleDragEnd}
                    animate={controls}
                >
                    {itemsData.map((item, index) => (
                        <motion.div key={index} style={{ minWidth: itemWidth }}>
                            {item}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <SliderContainer>
                {/* <Slider
                    ref={divRef}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                >
                    {itemsData.map((d) => (
                        <SliderItem key={d}>{d}</SliderItem>
                    ))}
                </Slider> */}
            </SliderContainer>
        </Container>
    )
}
