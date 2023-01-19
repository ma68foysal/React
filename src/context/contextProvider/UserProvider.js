import React, { useContext,useState } from 'react'
import { users } from '../Context'

function UserProvider({children}) {
    

    const sessionValue = sessionStorage.getItem('user')
    const visitor = JSON.parse(sessionValue)

    const [isLoggedIn , setIsLoggedIn] = useState(false)
    const userInfo ={
        visitor,
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn
      }
  return (
    <users.Provider value={userInfo}>
      {children}
    </users.Provider>
  )
}

export default UserProvider