import React, { Component } from 'react'
import Logo from './Logo'
import Title from './Title'
import ErrorMessage from './ErrorMessage'
import Avatar from './Avatar'
import TextField from './TextField'
import Button from './Button'

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
      <div className="container">
        <Logo />
        <form className={`form ${error ? 'form_invalid' : ''} ${user.name ? 'form_success' : ''}`} onSubmit={this.handleSubmit}>
          {user.photoUrl ? <Avatar image={user.photoUrl} /> : null}
          <Title text={user.name || 'Log In'} />
          {user.name ? null : (
            <>
              <TextField
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                placeholder="E-mail"
              />
              <TextField
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                placeholder="Password"
              />
            </>
          )}
          {error ? <ErrorMessage text="E-Mail or password is incorrect" /> : null}
          {user.name ? (
            <Button type="button" onClick={this.handleLogout}>
              Logout
            </Button>
          ) : (
            <Button type="submit">Log In</Button>
          )}
        </form>
      </div>
    )
  }
}

export default Form
