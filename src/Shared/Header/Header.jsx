import React, { useContext, useRef, useState, } from 'react'
import header from './Header.module.css'
import Logo from './Hasan-Logo.png'
import { styles, themeSwitch, users } from '../../context/Context'
import { Link } from 'react-router-dom'


function Header() {
  const ThemeSwitch=useContext(themeSwitch)
  const{theme,setTheme}=ThemeSwitch
  const inputRef = useRef(null)
  function handleRef(){
    inputRef.current.focus()
  }
  


    const styleProp = useContext(styles)

    
    const user = useContext(users)
    const {visitor}=user
    function handleUser(){
      sessionStorage.removeItem('visitor')
    }
   
    function handlePopup(e){
     styleProp.setStyle('block')
        

    }
   

  return (
   
        <>
        <div className={header.container}>
        
        <div className={header.logo}>
            <Link to="/"><img className={header.logo} src={Logo} alt="" /></Link>
            
        </div>
        <div className={header.navBar}>
            <ul>
                <Link className={header.navLinks} to="/"><li className={header.navItem}>Home</li></Link>
                <Link className={header.navLinks} to="/about"> <li className={header.navItem}>About</li></Link>
                <Link className={header.navLinks} to="/contact"><li className={header.navItem}>Contact</li></Link>
                <Link className={header.navLinks} to="/blog"><li className={header.navItem}>Blog</li></Link>
                
               {
                user.isLoggedIn && (
                <Link className={header.navLinks} to=""><li className={header.navItem}>Dashboard</li></Link>

                )
                
               }
                
                
            </ul>

        </div>
        <div className={header.navBtn}>


            <input type="text" placeholder='current' ref={inputRef} />
            <button onClick={handleRef} >focus</button>

          {
            user.visitor ? 
                <button className={header.btn} type='button'onClick={()=> sessionStorage.removeItem('user')}>Logout</button>:
                <button className={header.btn} type='button' onClick={handlePopup}>Login</button>
            
          }
                
          
            
            <button type='button' onClick={()=>setTheme(!theme)}>ThemeSwitch</button>
          

        </div>

        </div>
       
        </>
    
  )
}

export default Header