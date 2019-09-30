import React from 'react'
import Logo from '../Logo/Logo'
import Form from '../Form/Form'
import './layout.css'

const Layout = () => (
  <div className="layout">
    <Logo className='layout__logo'/>
    <Form />
  </div>
)

export default Layout
