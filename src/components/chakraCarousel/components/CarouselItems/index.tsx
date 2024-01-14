import { Flex, FlexProps } from '@chakra-ui/react'
import * as React from 'react'
import { useCarousel } from '../../context'

/**
 * The parent container for the carousel items.
 */

function CarouselItems({
  children,
  ...rest
}: FlexProps & { children: React.ReactNode }): JSX.Element {
  const { onInitialize, state } = useCarousel()

  React.useEffect(() => {
    if (children) {
      onInitialize(children)
    }
  }, [children, onInitialize])

  return (
    <Flex position="relative" align="center" {...rest}>
      {state}
    </Flex>
  )
}

export default CarouselItems
