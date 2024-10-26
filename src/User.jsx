import React from 'react'
import {useParams} from 'react-router-dom'
function User() {
    const userParam = useParams()
  return (
    <div>

      i am user {userParam.username}
    </div>
  )
}

export default User
