import React, { useState } from 'react'
import { CartItem } from './context'

function CartItemProvider({children}) {
 
    const [item, setItem]=useState([])
    const [productId, setProductId]=useState(null)

    const items ={
        item,
        setItem,
        productId,
        setProductId
        
    }

  return (
    <CartItem.Provider value={items}>
         {children}
    </CartItem.Provider>
  )
}

export default CartItemProvider