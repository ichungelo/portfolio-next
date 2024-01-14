import { FlexProps } from '@chakra-ui/react'
import { MotionProps } from 'framer-motion'

/** The current position of a carousel item */
export type CarouselItemPosition = 'left' | 'center' | 'right' | 'hidden'

export interface CarouselContextProps {
  onInitialize: (children: React.ReactNode) => void
  onNext: () => void
  onPrevious: () => void
  findPosition: ((index?: number) => CarouselItemPosition) | (() => null)
  numberOfSlides: number
  state: React.ReactNode | null
}

export type GetMotionStyles = ({
  position
}: {
  position: CarouselItemPosition
}) => FlexProps & MotionProps
