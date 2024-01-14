import * as React from 'react'
import { ReactNode } from 'react'
import { MotionContainer } from '../'
import { CarouselContext } from '../../context'
import { isReactElement } from '../../utils'
import { GetMotionStyles } from '../../types'

interface CarouselProps {
  children: ReactNode
  getMotionStyles?: GetMotionStyles
}

function init({ children, ...props }: CarouselProps): JSX.Element[] {
  const asArr = React.Children.toArray(children).filter(isReactElement)
  const count = asArr.length
  const first = asArr.splice(0, 1)
  const centerChild = (
    <MotionContainer
      key={'0'}
      index={1}
      getMotionStyles={props.getMotionStyles}
      numberOfSlides={count}
    >
      {first}
    </MotionContainer>
  )

  if (asArr.length === 0) return [centerChild]

  const second = asArr.splice(0, 1)
  const leftChild = (
    <MotionContainer
      key={'1'}
      index={0}
      getMotionStyles={props.getMotionStyles}
      numberOfSlides={count}
    >
      {second}
    </MotionContainer>
  )

  const rest = asArr.reverse().map((child, index) => {
    const key = `${count - index - 1}` || `key_${index - 1}` // if there are less than 3 images, one key will be undefined

    return (
      <MotionContainer
        key={key}
        index={index + 2}
        getMotionStyles={props.getMotionStyles}
        numberOfSlides={count}
      >
        {child}
      </MotionContainer>
    )
  })

  return [leftChild, centerChild, ...rest]
}

function Carousel({ children, ...props }: CarouselProps): JSX.Element {
  const [state, dispatch] = React.useReducer(carouselReducer, [])

  const onInitialize = React.useCallback(
    (items: React.ReactNode) => {
      dispatch({
        type: 'INITIALIZE',
        children: items,
        getMotionStyles: props.getMotionStyles
      })
    },
    [props.getMotionStyles]
  )

  const onNext = React.useCallback(() => {
    dispatch({ type: 'NEXT' })
  }, [])

  const onPrevious = React.useCallback(() => {
    dispatch({ type: 'PREVIOUS' })
  }, [])

  const findPosition = React.useCallback(
    (index?: number) => {
      if (state.length === 1) return 'center'

      const positionInArray = state.findIndex((child) => {
        return child.key == `${index}`
      })

      switch (positionInArray) {
        case 0:
          return 'left'
        case 1:
          return 'center'
        case 2:
          return 'right'
        default:
          return 'hidden'
      }
    },
    [state]
  )

  const value = React.useMemo(
    () => ({ onNext, onPrevious, findPosition, numberOfSlides: state.length, onInitialize, state }),
    [findPosition, onNext, onPrevious, onInitialize, state]
  )

  return <CarouselContext.Provider value={value}>{children}</CarouselContext.Provider>
}

export default Carousel

type State = React.ReactElement<any, string | React.JSXElementConstructor<any>>[]

type Action =
  | {
      type: 'INITIALIZE'
      children: React.ReactNode
      getMotionStyles?: GetMotionStyles | undefined
    }
  | {
      type: 'NEXT'
    }
  | {
      type: 'PREVIOUS'
    }

const shiftLeft = (arr: State) => {
  const [first, ...rest] = arr
  return [...rest, first]
}

const shiftRight = (arr: State) => {
  const arrCopy = [...arr]
  const lastItem = arrCopy.pop()
  if (lastItem == undefined) return arr
  arrCopy.unshift(lastItem)
  return arrCopy
}

function carouselReducer(state: State, action: Action): State {
  if (action.type === 'INITIALIZE') {
    return init({ children: action.children, ...action.getMotionStyles })
  }
  const numberOfSlides = state.length

  if (numberOfSlides <= 1) return state // don't copy

  switch (action.type) {
    case 'NEXT': {
      return shiftRight(state).map((child, index) => {
        // NB: the index is needed for framer-motion to keep track of the layoutId.
        return React.cloneElement(child, { index })
      })
    }
    case 'PREVIOUS': {
      return shiftLeft(state).map((child, index) => {
        // NB: the index is needed for framer-motion to keep track of the layoutId.
        return React.cloneElement(child, { index })
      })
    }
  }
}
