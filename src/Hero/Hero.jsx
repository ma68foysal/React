import userEvent from '@testing-library/user-event'
import React,{useContext} from 'react'
import './hero.css'
import Img from './Img.png'
import { users } from '../App'

function Hero() {
    const user = useContext(users)
  
   const{visitor}=user
   
  return (
    visitor === null &&(
        <div className='banner'>
        <img className='img' src={Img} alt="" />
      
    </div>
    )
    
  )
}

export default Hero