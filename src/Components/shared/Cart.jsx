import React, { useContext, useEffect, useState } from 'react'
import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartInfo, CartItem } from '../../context/context'



function Cart() {
  const cart = useContext(CartInfo)
  const {openCart,setOpeanCart}=cart
  const cartItems = useContext(CartItem)
  const{item}= cartItems
  
  console.log(item);
  
 
  const navigate = useNavigate()
  function handleClick (){
    setOpeanCart(!openCart)
    navigate('/cart-details')
    
  }

  return (
    <> 
    <div className='cartBody' style={{ display:!openCart ?'none':'block'}} >
    <div className='cart'>
     {
      item.map((cartProduct)=>
        
       <div className='cartItemBox d-flex justify-content-between' key={cartProduct.id}>
          <div className='d-flex '>
            <img src={cartProduct.thumbnail} style={{width:'100px'}} alt="" />
            <div>
              <p>{cartProduct.title}</p>
              <p>des</p>
            </div>
          </div>
          <div className='d-flex'>
            <div className='d-flex'>
              <button className='inrease'>+</button>
              <p>{item.price}</p>
              <button className='decrise'>-</button>
            </div>
            <div>
              <button>remove</button>
            </div>
          </div>
        </div>
      
      )
     
    }  
    <button onClick={handleClick}>View CArt</button>
     </div>      
    </div>
            
       
        
    </>
  )
}

export default memo(Cart) 