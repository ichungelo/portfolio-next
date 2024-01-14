import * as React from 'react'
import { useCarousel, CarouselItemContext } from '../../context'

interface CarouselItemProps {
  children: React.ReactNode
  index: number
}

/**
 * Wrapper around each item in the carousel.
 */
function CarouselItem({ children, index }: CarouselItemProps): JSX.Element {
  const { onNext, onPrevious, findPosition, numberOfSlides } = useCarousel()

  const position = findPosition(index)

  const onClickHandler = React.useCallback(() => {
    switch (position) {
      case 'left':
        return onNext()
      case 'right':
        return onPrevious()
      default:
        return () => null
    }
  }, [onNext, onPrevious, position])

  const value = React.useMemo(
    () => ({ onNext, onPrevious, position, onClickHandler, numberOfSlides }),
    [numberOfSlides, onClickHandler, onNext, onPrevious, position]
  )

  return <CarouselItemContext.Provider value={value}>{children}</CarouselItemContext.Provider>
}

export default CarouselItem
