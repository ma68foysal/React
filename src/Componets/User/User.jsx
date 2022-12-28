import React from 'react'
import Login from './Login/Login'

export default function User(props) {
    const {massage}=props
  return (
    <div>
        <Login massage={massage}/>
    </div>
  )
}
