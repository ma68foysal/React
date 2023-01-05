import React, { useContext, useState } from 'react'
import header from './Header.module.css'
import Logo from './Hasan-Logo.png'
import { users } from '../../App';
function Header() {
    
    const user = useContext(users)
    const [style,setStyle]=useState('')
    
    function handlePopup(e){
        setStyle('block')

    }
   

  return (
   
        <>
        <div className={header.container}>
        
        <div className={header.logo}>
            <a href="#"><img className={header.logo} src={Logo} alt="" /></a>
            
        </div>
        <div className={header.navBar}>
            <ul>
                <a className={header.navLinks} href=""><li className={header.navItem}>Home</li></a>
                <a className={header.navLinks} href=""> <li className={header.navItem}>About</li></a>
                <a className={header.navLinks} href=""><li className={header.navItem}>Contact</li></a>
                <a className={header.navLinks} href=""><li className={header.navItem}>Blog</li></a>
                
               {
                user.isLoggedIn && (
                <a className={header.navLinks} href=""><li className={header.navItem}>Dashboard</li></a>

                )
                
               }
                
                
            </ul>

        </div>
        <div className={header.navBtn}>
            <input type="text" />
            {
                user.isLoggedIn ?(<button className={header.btn} type='button'onClick={()=>user.setIsLoggedIn(false)}>Logout</button>):(<button className={header.btn} type='button' onClick={handlePopup}>Login</button>)
            }
            
            <button type='button'>ThemeSwitch</button>
            {/* <span>{user.visitor.result.name}</span> */}

        </div>

        </div>
       
        </>
    
  )
}

export default Header