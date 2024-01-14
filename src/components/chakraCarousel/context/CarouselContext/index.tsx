import { createContext, useContext } from 'react'
import { CarouselContextProps } from '../../types/index'

const CarouselContext = createContext<CarouselContextProps>({
  onInitialize: () => null,
  onNext: () => null,
  onPrevious: () => null,
  findPosition: () => null,
  numberOfSlides: 0,
  state: null
})

/**
 * React Hook to manage a carousel.
 *
 * It provides the logic and will be used with react context.
 * to propagate its return value to all children.
 */
function useCarousel(): CarouselContextProps {
  const context = useContext(CarouselContext)

  if (context === undefined) {
    throw Error('useCarousel must be used within a Carousel Provider')
  }

  return context
}

export { CarouselContext, useCarousel }
