import userEvent from '@testing-library/user-event'
import React,{useContext} from 'react'
import './hero.css'
import Img from './Img.png'
import dark from './dark.png'
import { themeSwitch, users } from '../App'

function Hero() {
    const user = useContext(users)
    const ThemeSwitch=useContext(themeSwitch)
   
  
   const{visitor}=user
   
  return (
    visitor === null &&(
        <div className='banner'>
          {ThemeSwitch.theme === false ? <img className='img' src={Img} alt="" />:<img className='img' src={dark} alt="" />}
        
      
    </div>
    )
    
  )
}

export default Hero