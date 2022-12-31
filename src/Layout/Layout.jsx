import React from 'react'
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