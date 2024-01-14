import React from 'react'

function isReactElement(element: React.ReactNode): element is React.ReactElement {
  return React.isValidElement(element) && 'type' in element
}

export { isReactElement }
