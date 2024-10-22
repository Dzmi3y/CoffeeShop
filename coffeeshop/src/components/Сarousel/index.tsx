import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import {
    CarouselItem,
    Message,
    Name,
    StyledImage,
    TextContainer,
} from './styles'

type CarouselInfo = {
    imageUrl: string
    name: string
    message: string
}

type Props = {
    data: CarouselInfo[]
}

export const Сarousel: React.FC<Props> = ({ data }) => {
    const containerRef = useRef(null)
    const x = useMotionValue(0)
    const controls = useAnimation()
    const itemWidth = 120

    const handleDragEnd = (event: any, info: { offset: { x: any } }) => {
        const offset = info.offset.x
        let newIndex = -1 * Math.round(x.get() / itemWidth)

        newIndex = newIndex < 0 ? 0 : newIndex
        newIndex = newIndex >= data.length - 3 ? data.length - 3 : newIndex
        controls.start({ x: -newIndex * itemWidth })
        console.log('page')
        console.log(newIndex + 1)
    }

    return (
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
                {data.map((item, index) => (
                    <motion.div key={index} style={{ minWidth: itemWidth }}>
                        <CarouselItem>
                            <StyledImage src={item.imageUrl} />
                            <TextContainer>
                                <Name>{item.name}</Name>
                                <Message>{item.message}</Message>
                            </TextContainer>
                        </CarouselItem>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}
