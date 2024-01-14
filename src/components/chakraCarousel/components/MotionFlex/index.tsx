import { Flex, FlexProps } from '@chakra-ui/react'
import { motion, MotionProps } from 'framer-motion'

type FlexPropsWithoutFramerProperties = Omit<
  FlexProps,
  'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart' | 'style' | 'transition'
>

export interface MotionFlexProps extends FlexPropsWithoutFramerProperties {}

/**
 * Chakra-UI Flex component instilled with framer-motion properties.
 */
const MotionFlex = motion<FlexPropsWithoutFramerProperties>(Flex)

export { MotionFlex }
