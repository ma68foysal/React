import React from 'react'

export default function Products(props) {
    const {item: product }=props
    

  return (
    <div className="product">

        <span>{product.productName}</span>
        <span>{product.price}</span>
            
            </div>
  )
}
 