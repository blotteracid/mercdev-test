import React from 'react'
import Title from '../Title/Title'
import Avatar from '../Avatar/Avatar'
import './user_info.css'

const UserInfo = ({ name, photoUrl }) => (
  <>
    <Avatar className='user_info__avatar' image={photoUrl} />
    <Title text={name} />
  </>
)

export default UserInfo
