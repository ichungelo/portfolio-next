import React from 'react'
import { Variants } from 'framer-motion'
import { CarouselItemPosition, GetMotionStyles } from '../../types'
import { MotionFlexProps, MotionFlex } from '../'

type MotionContainerProps = MotionFlexProps & {
  children: React.ReactNode
  index: number
  getMotionStyles?: GetMotionStyles
  numberOfSlides: number
}

const findPosition = ({
  index,
  numberOfSlides
}: {
  index: number
  numberOfSlides: number
}): CarouselItemPosition => {
  if (numberOfSlides === 1) return 'center'
  switch (index) {
    case 0:
      return 'left'
    case 1:
      return 'center'
    case 2:
      return 'right'
    default:
      return 'hidden'
  }
}

const defaultGetMotionStyles: GetMotionStyles = ({ position }) => {
  switch (position) {
    case 'left': {
      return {
        animate: {
          x: 100
        },
        whileHover: {
          x: 50,
          scale: 1.1
        },
        _hover: {
          cursor: 'pointer'
        }
      }
    }
    case 'center': {
      return {
        animate: {
          x: 0
        },

        whileHover: {
          x: 0,
          scale: 1
        },
        _hover: {
          cursor: 'default'
        }
      }
    }
    case 'right':
      return {
        animate: {
          x: -100
        },
        whileHover: {
          x: -50,
          scale: 1.1
        },
        _hover: {
          cursor: 'pointer'
        }
      }
    default:
      return {
        style: {}
      }
  }
}

const variants: Variants = {
  left: {
    zIndex: 1,
    x: 100
  },
  right: {
    zIndex: 1,
    x: -100
  },
  center: { zIndex: 2, x: 0 },
  hidden: { zIndex: -1, x: 0 }
}

/**
 * Container for carousel items providing animation.
 */
function MotionContainer({
  children,
  index,
  getMotionStyles,
  numberOfSlides,
  ...props
}: MotionContainerProps): JSX.Element {
  const position = findPosition({ index, numberOfSlides })

  const defaultMotionStyles = React.useMemo(() => {
    return defaultGetMotionStyles({ position: position ?? 'hidden' })
  }, [position])

  const customMotionStyles = React.useMemo(() => {
    if (!getMotionStyles) return {}

    return getMotionStyles({ position: position ?? 'hidden' })
  }, [getMotionStyles, position])

  return (
    <MotionFlex
      layout
      pos={position === 'hidden' ? 'absolute' : 'relative'}
      {...defaultMotionStyles}
      {...customMotionStyles}
      {...props}
      variants={variants}
      animate={position}
    >
      {children}
    </MotionFlex>
  )
}

export default MotionContainer
