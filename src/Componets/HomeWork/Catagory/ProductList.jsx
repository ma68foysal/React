import React from 'react'

export default function ProductList({product}) {

  
  return (
  <div onClick className='productList'>
    <li className='product' >{product.name}</li>
    <li className='productPrice'>{product.price}</li>
  </div>
  )
}
