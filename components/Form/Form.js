import React, { Component } from 'react'
import Title from '../Title/Title'
import UserInfo from '../UserInfo/UserInfo'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import TextField from '../TextField/TextField'
import Button from '../Button/Button'
import './form.css'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      error: null,
      user: {
        name: null,
        photoUrl: null,
      },
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  login(email, password) {
    return fetch('https://us-central1-mercdev-academy.cloudfunctions.net/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(function(res) {
      return res.json()
    })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleLogout(event) {
    event.preventDefault()
    this.setState({
      email: '',
      password: '',
      error: null,
      user: {
        name: null,
        photoUrl: null,
      },
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const { email, password } = this.state

    this.login(email, password).then(res => {
      if (res.error) {
        this.setState({
          error: res.error,
        })
      } else {
        this.setState({
          user: {
            name: res.name,
            photoUrl: res.photoUrl,
          },
          error: null,
        })
      }
    })
  }

  render() {
    const { email, password, error, user } = this.state

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        {user.name ? (
          <UserInfo name={user.name} photoUrl={user.photoUrl} />
        ) : (
          <>
            <Title text="Log In" />
            <TextField
              error={error}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              placeholder="E-mail"
              className='form__text_field'
            />
            <TextField
              error={error}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              placeholder="Password"
              className='form__text_field'
            />
          </>
        )}
        {error && <ErrorMessage className='form__error_message' text="E-Mail or password is incorrect" />}
        {user.name ? (
          <Button type="button" className='form__button' onClick={this.handleLogout}>
            Logout
          </Button>
        ) : (
          <Button type="submit" className='form__button'>Log In</Button>
        )}
      </form>
    )
  }
}

export default Form
