import React from 'react'
import Logo from './Logo'
import Title from './Title'
import ErrorMessage from './ErrorMessage'
import Avatar from './Avatar'
import TextField from './TextField'
import Button from './Button'

const Form = () => {
  return (
    <div className="container">
      <Logo />
      <form className="form" id="form">
        <Avatar image="" />
        <Title text="Log In" />
        <TextField type="email" name="email" placeholder="E-mail" />
        <TextField type="password" name="password" placeholder="Password" />
        <ErrorMessage text="E-Mail or password is incorrect" />
        <Button type="submit">Log In</Button>
      </form>
    </div>
  )
}

export default Form
