import React from 'react'
import './text_field.css'

const TextField = props => {
  console.log(props.error)

  return <input className={`text_field ${props.error ? 'text_field__error' : null}`} {...props} />
}

export default TextField
