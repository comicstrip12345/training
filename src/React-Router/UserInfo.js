import React from 'react'
import { useParams } from 'react-router-dom'

const UserInfo = () => {
    const {userID} = useParams()
    return (
        <div>UserInfo {userID}</div>
    )
}

export default UserInfo