import React from 'react'
import Title from '../Title/Title'
import Avatar from '../Avatar/Avatar'

const UserInfo = ({ name, photoUrl }) => (
  <>
    <Avatar image={photoUrl} />
    <Title text={name} />
  </>
)

export default UserInfo
