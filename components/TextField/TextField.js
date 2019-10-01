import React from 'react'
import './text_field.css'

const TextField = ({ className, ...props}) => {
  return <input className={`text_field ${props.error ? 'text_field__error' : ''} ${className}`} {...props} />
}

export default TextField
