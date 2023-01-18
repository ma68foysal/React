import React from 'react'
import Logo from '../Shared/Header/Hasan-Logo.png'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
     <Link to="/"><img style={{width:"100px"}} src={Logo} alt="" /></Link>
    <div style={{width:"50%" , fontSize:"72px", margin:'auto',textAlign:'center'}}>Contact</div>
    </>
  )
}

export default Contact