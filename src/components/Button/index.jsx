import React from 'react'
import './style.less'

export default function Button ({children, ...props}) {
  return (
    <button
      className='Button'
      type='button'
      {...props}
    >
      {children}
    </button>
  )
}
