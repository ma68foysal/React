import React from 'react'
import Guest from './Guest/Guest'

export default function Login(props) {
    const {massage}=props
  return (
    <div>
        <Guest massage={massage}/>
    </div>
  )
}
