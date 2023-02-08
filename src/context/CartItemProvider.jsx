import React, { useState } from 'react'
import { CartItem } from './context'

function CartItemProvider({children}) {
  const init = {
    product:[],
    totalQty:0
  }
 
    const [item, setItem]=useState(init)
    
    const items ={
        item,
        setItem,
        
        
    }

  return (
    <CartItem.Provider value={items}>
         {children}
    </CartItem.Provider>
  )
}

export default CartItemProvider