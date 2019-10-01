import React from 'react'
import './error_message.css'

const ErrorMessage = ({ className, text }) => <div className={`error_message ${className}`}>{text}</div>

export default ErrorMessage
