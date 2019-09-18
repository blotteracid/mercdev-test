import React from 'react'
import Logo from './Logo'
import Title from './Title'
import ErrorMessage from './ErrorMessage'
import Avatar from './Avatar'

const Form = () => {
  return (
    <div className="container">
      <Logo />
      <form className="form" id="form">
        <Avatar image="" />
        <Title text="Log In" />
        <input className="form__input" type="email" name="email" placeholder="E-Mail" />
        <input className="form__input" type="password" name="password" placeholder="Password" />
        <ErrorMessage text="E-Mail or password is incorrect" />
        <button className="form__button" type="submit">
          Login
        </button>
      </form>
    </div>
  )
}

export default Form
