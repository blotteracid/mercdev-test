import React from 'react'
import ReactDOM from 'react-dom'
import Form from './components/Form'

import './styles/fonts.css'
import './styles/normalize.css'
import './styles/styles.css'
import './styles/blocks/container.css'
import './styles/blocks/avatar.css'
import './styles/blocks/form.css'
import './styles/blocks/logo.css'

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<Form />, document.getElementById('root'))
})
