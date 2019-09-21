import React from 'react'

const Button = props => (
  <button className="form__button" {...props}>
    {props.children}
  </button>
)

export default Button
