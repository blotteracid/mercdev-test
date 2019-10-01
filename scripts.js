import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/Layout/Layout'

import './styles/fonts.css'
import './styles/normalize.css'
import './styles/styles.css'

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<Layout />, document.getElementById('root'))
})
