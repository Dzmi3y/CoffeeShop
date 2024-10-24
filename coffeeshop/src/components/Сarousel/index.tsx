import React, { useRef, useState } from 'react'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import {
    CarouselItem,
    Container,
    Message,
    Name,
    PaginationContainer,
    PaginationDot,
    StyledImage,
    TextContainer,
    TextContainerBorder,
} from './styles'
import { FeedbackInfo } from '../../model/FeedbackInfo'

type Props = {
    data: FeedbackInfo[]
}

export const Сarousel: React.FC<Props> = ({ data }) => {
    const containerRef = useRef(null)
    const x = useMotionValue(0)
    const controls = useAnimation()
    const itemWidth = 300
    const buttonsArrayLenght = data && data.length > 2 ? data.length - 2 : 0
    const buttons = Array(buttonsArrayLenght).fill(null)
    const [currentPage, setCurrentPage] = useState<number>(0)

    const handleDragEnd = () => {
        let newIndex = -1 * Math.round(x.get() / itemWidth)

        newIndex = newIndex < 0 ? 0 : newIndex
        newIndex = newIndex >= data.length - 3 ? data.length - 3 : newIndex
        controls.start({ x: -newIndex * itemWidth })
        setCurrentPage(newIndex)
    }
    const goToPageByIndex = (index: number) => {
        controls.start({ x: -index * itemWidth })
        setCurrentPage(index)
    }

    const container = {
        hidden: { opacity: 1, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
        },
    }

    return (
        <Container>
            <motion.div
                style={{ overflow: 'hidden', width: itemWidth * 3 }}
                ref={containerRef}
                variants={container}
                initial="hidden"
                whileInView="visible"
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
                            <CarouselItem whileHover={{ scale: 1.1 }}>
                                <StyledImage
                                    draggable="false"
                                    src={item.imageUrl}
                                />
                                <TextContainerBorder>
                                    <TextContainer>
                                        <Name>{item.name}</Name>
                                        <Message>{item.message}</Message>
                                    </TextContainer>
                                </TextContainerBorder>
                            </CarouselItem>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            <PaginationContainer>
                {buttons.map((_, index) => (
                    <PaginationDot
                        key={index}
                        onClick={() => {
                            goToPageByIndex(index)
                        }}
                        whileHover={{ scale: 1.5 }}
                        whileTap={{ scale: 0.9 }}
                        animate={{
                            backgroundColor:
                                currentPage == index ? '#FF902B' : '#FFCB7C',
                        }}
                        transition={{ duration: 0.5 }}
                    />
                ))}
            </PaginationContainer>
        </Container>
    )
}
