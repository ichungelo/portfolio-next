import React from 'react'
import { CarouselContextProps, CarouselItemPosition } from '../../types/index'

export type CarouselItemContextProps = Pick<
  CarouselContextProps,
  'onNext' | 'onPrevious' | 'numberOfSlides'
> & {
  position: CarouselItemPosition | null
  onClickHandler: () => void
}

const CarouselItemContext = React.createContext<CarouselItemContextProps>({
  onNext: () => null,
  onPrevious: () => null,
  position: null,
  onClickHandler: () => null,
  numberOfSlides: 0
})

/**
 * React Hook to manage a carousel item.
 */
function useCarouselItem(): CarouselItemContextProps {
  const context = React.useContext(CarouselItemContext)
  if (context === undefined) {
    throw Error('useCarouselItem must be used within a CarouselItemContext')
  }
  return context
}

export { CarouselItemContext, useCarouselItem }
