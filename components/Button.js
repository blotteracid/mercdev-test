import React from 'react'

const Button = props => (
  <button className="form__button" type={props.type}>
    {props.children}
  </button>
)

export default Button
