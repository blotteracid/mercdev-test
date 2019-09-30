import React from 'react'
import './avatar.css'

const Avatar = ({ className, image }) => <img className={`avatar ${className}`} src={image} alt="avatar" />

export default Avatar
