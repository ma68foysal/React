import React, { useContext } from 'react'
import { users } from '../App'
import Footer from '../Shared/Footer/Footer'
import Header from '../Shared/Header/Header'

function Layout({children}) {
  
   
  return (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout